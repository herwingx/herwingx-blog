import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '../src/content/docs');
const DAYS_NEW = 7; // Días para considerar algo "Nuevo"

// Función recursiva para hallar archivos .mdx
function getFiles(dir) {
  const subdirs = fs.readdirSync(dir);
  const files = subdirs.map((subdir) => {
    const res = path.resolve(dir, subdir);
    return fs.statSync(res).isDirectory() ? getFiles(res) : res;
  });
  return files.reduce((a, f) => a.concat(f), []);
}

console.log('🚀 Iniciando script de badges...');

try {
  console.log('📂 Directorio de contenido:', CONTENT_DIR);
  // Función recursiva...

  const files = getFiles(CONTENT_DIR).filter(f => f.endsWith('.mdx'));
  let updatedCount = 0;

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Extraer Frontmatter simple
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return;

    const frontmatter = match[1];

    // Buscar fecha
    const dateMatch = frontmatter.match(/date: ["']?(\d{4}-\d{2}-\d{2})["']?/);
    if (!dateMatch) return;

    const postDate = new Date(dateMatch[1]);
    const diffTime = new Date().getTime() - postDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // IMPRIMIR SIEMPRE
    console.log(`🔎 Scan: ${path.basename(file)} | Fecha: ${dateMatch[1]} | Diff: ${diffDays} días`);

    const isNew = Math.abs(diffDays) <= DAYS_NEW;

    // Lógica de Badge
    let newFrontmatter = frontmatter;
    const hasSidebar = frontmatter.includes('sidebar:');
    const hasBadge = frontmatter.includes('badge:');

    if (isNew) {
      if (hasBadge) {
        // Ya tiene badge, no tocamos para no borrar badges manuales como "Core" o "Popular"
        // Opcional: Podríamos forzar "Nuevo" si quisiéramos
        return;
      }

      // Insertar Badge de Nuevo
      const badgeYaml = `\n  badge:\n    text: Nuevo\n    variant: success`;

      if (hasSidebar) {
        // Inyectar badge justo debajo de "sidebar:"
        newFrontmatter = frontmatter.replace(/(sidebar:.*\n)/, '$1  badge:\n    text: Nuevo\n    variant: success\n');
      } else {
        newFrontmatter = frontmatter + `sidebar:${badgeYaml}`;
      }

      console.log(`✨ Marcando como NUEVO: ${path.basename(file)} (${diffDays} días)`);
    } else {
      // Si NO es nuevo y tiene el badge "Nuevo", quitarlo (Limpieza)
      if (frontmatter.includes('text: Nuevo')) {
        newFrontmatter = frontmatter.replace(/  badge:\n    text: Nuevo\n    variant: [a-z]+\n?/, '');
        // Limpiar sidebar vacío si quedó huérfano
        newFrontmatter = newFrontmatter.replace(/sidebar:\s*\n*$/, '');
        console.log(`🧹 Quitando etiqueta NUEVO: ${path.basename(file)}`);
      } else {
        return; // No hay nada que hacer
      }
    }

    if (newFrontmatter !== frontmatter) {
      const newContent = content.replace(frontmatter, newFrontmatter);
      fs.writeFileSync(file, newContent, 'utf8');
      updatedCount++;
    }
  });

  console.log(`✅ Proceso terminado. ${updatedCount} archivos actualizados.`);
} catch (error) {
  console.error('❌ Error fatal en auto-badges:', error);
  process.exit(0); // No romper el build, solo avisar
}

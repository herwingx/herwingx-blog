# 🤖 Automatización y Scripts

El proyecto cuenta con un pipeline de CI/CD local integrado en los scripts de `npm`.

---

## Script de Auto-Badges

**Archivo:** `scripts/auto-badges.mjs`

Este script se ejecuta automáticamente antes de `npm run dev` y `npm run build`.

### Cómo funciona

1. Escanea todos los archivos `.mdx` en `src/content/docs/`.
2. Lee la fecha del frontmatter (`date: YYYY-MM-DD`).
3. Si el post tiene **menos de 7 días**:
   - Le inyecta `badge: { text: Nuevo, variant: success }` en el sidebar.
4. Si el post ya pasó los 7 días:
   - Le quita el badge automáticamente.

### Reglas del script

- Solo toca badges con texto `"Nuevo"`.
- **Si pones un badge manual** (ej: `"Popular"`, `"Beta"`), el script lo respeta y no lo modifica.
- La constante `DAYS_NEW` (por defecto `7`) controla la ventana de "novedad".

### Ejecución manual

```bash
node scripts/auto-badges.mjs
```

---

## Integración con npm

Los scripts del `package.json` encadenan la ejecución automática:

```json
{
  "dev": "node scripts/auto-badges.mjs && astro dev",
  "build": "node scripts/auto-badges.mjs && astro build"
}
```

Esto garantiza que los badges estén actualizados tanto en desarrollo como en producción, sin intervención manual.

---

## CI/CD — GitHub Actions con Caché

**Archivo:** `.github/workflows/deploy.yml`

El workflow de deploy incluye un paso de caché (`actions/cache@v4`) que almacena `node_modules` y `.astro` para acelerar builds consecutivos.

### Cómo funciona

1. Se ejecuta en cada push a `main` o manualmente (`workflow_dispatch`).
2. Después de configurar Node.js, restaura el caché basándose en el hash de `package-lock.json`.
3. Si el `package-lock.json` no cambió, se salta la instalación completa de dependencias.
4. Compila el sitio y lo despliega en GitHub Pages.

### Invalidación del caché

- **Automática**: Cuando cambia `package-lock.json` (nuevas dependencias o actualizaciones).
- **Manual**: Se puede invalidar desde la pestaña Actions de GitHub → Re-run con "Clear cache".

---

## Cloudflare Web Analytics

**Archivo:** `src/components/Head.astro`

Se inyecta el beacon de Cloudflare Web Analytics en todas las páginas del sitio. Es un script ligero (`beacon.min.js`) que no usa cookies y respeta la privacidad.

### Implementación

Se usa `Fragment set:html` para inyectar el script como HTML raw, evitando que Astro interprete las llaves `{}` del JSON como expresiones JSX.

### Acceso al dashboard

Los datos se pueden ver en [Cloudflare Dashboard → Web Analytics](https://dash.cloudflare.com/).

---

## Feed RSS

**Archivo:** `src/pages/rss.xml.js`

Genera un feed RSS automático accesible en `/rss.xml`.

### Cómo funciona

1. Obtiene toda la colección `docs` con `getCollection('docs')`.
2. Filtra páginas especiales (`index`, `404`, y cualquier subíndice `*/index`).
3. Genera items con: título, descripción, fecha (`date` del frontmatter) y enlace.
4. Incluye `<language>es</language>` como metadata personalizada.

### Dependencia

Requiere el paquete `@astrojs/rss` (`npm install @astrojs/rss`).

# 📚 Herwingx Docs

Documentación personal de desarrollo con [Astro Starlight](https://starlight.astro.build/).

[![Deploy](https://img.shields.io/badge/🌐-docs.herwingx.dev-blue)](https://docs.herwingx.dev)
[![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-181717?logo=github)](https://pages.github.com/)

---

## 🚀 Inicio Rápido

```bash
git clone https://github.com/herwingx/docs-starlight.git
cd docs-starlight
npm install
npm run dev
```

**URLs locales:**
- 📖 Docs: `http://localhost:4321`
- 🎛️ Admin: `http://localhost:4321/admin/`

---

## 📝 Crear Contenido

### Opción 1: Panel Admin (CMS)
1. Ve a `https://docs.herwingx.dev/admin/`
2. Login con GitHub
3. Crea/edita páginas visualmente
4. Los cambios se commitean automáticamente

### Opción 2: Archivos MDX
```bash
# Crear nueva página
touch src/content/docs/frontend/mi-guia.mdx
```

```mdx
---
title: Mi Guía
description: Descripción para SEO
---

# Contenido aquí
```

---

## 📄 Agregar Nuevas Páginas

### En secciones existentes
Las páginas se agregan automáticamente al sidebar si están en un directorio con `autogenerate`.

**Secciones disponibles:**
| Sección   | Directorio                             |
| :-------- | :------------------------------------- |
| Frontend  | `src/content/docs/frontend/`           |
| Backend   | `src/content/docs/backend/`            |
| DevOps    | `src/content/docs/devops/`             |
| Proyectos | `src/content/docs/proyectos/<nombre>/` |

**Ejemplo - Nueva guía de React:**
```bash
touch src/content/docs/frontend/react-hooks.mdx
```

```mdx
---
title: React Hooks
description: Guía completa de hooks en React
---

Tu contenido aquí...
```

> 💡 **Tip:** El orden en el sidebar se controla con `sidebar: { order: N }` en el frontmatter.

---

## 📁 Crear Nueva Sección

Para agregar una nueva sección al sidebar:

### 1. Crear el directorio
```bash
mkdir -p src/content/docs/nueva-seccion
```

### 2. Agregar al sidebar en `astro.config.mjs`
```javascript
sidebar: [
  // ... secciones existentes ...
  {
    label: '🔧 Nueva Sección',
    collapsed: false,
    autogenerate: { directory: 'nueva-seccion' },
  },
],
```

### 3. Crear primera página
```bash
touch src/content/docs/nueva-seccion/index.mdx
```

### 4. (Opcional) Agregar al CMS en `public/admin/config.yml`
```yaml
collections:
  # ... colecciones existentes ...
  - name: nueva-seccion
    label: '🔧 Nueva Sección'
    folder: src/content/docs/nueva-seccion
    create: true
    extension: mdx
    format: frontmatter
    fields:
      - { label: 'Título', name: 'title', widget: 'string' }
      - { label: 'Descripción', name: 'description', widget: 'string' }
      - { label: 'Contenido', name: 'body', widget: 'markdown' }
```

---

## 📘 Agregar Nuevo Proyecto

Para documentar un nuevo proyecto:

### 1. Crear estructura
```bash
mkdir -p src/content/docs/proyectos/mi-proyecto
touch src/content/docs/proyectos/mi-proyecto/index.mdx
```

### 2. Agregar al sidebar en `astro.config.mjs`
```javascript
sidebar: [
  // ... otras secciones ...
  {
    label: '📗 Mi Proyecto',
    collapsed: false,
    autogenerate: { directory: 'proyectos/mi-proyecto' },
  },
],
```

### 3. Configurar en CMS (`public/admin/config.yml`)
```yaml
collections:
  - name: mi-proyecto
    label: 'Proyecto: Mi Proyecto'
    folder: src/content/docs/proyectos/mi-proyecto
    create: true
    extension: mdx
    format: frontmatter
    media_folder: ''
    public_folder: ''
    fields:
      - { label: 'Título', name: 'title', widget: 'string' }
      - { label: 'Descripción', name: 'description', widget: 'string' }
      - { label: 'Contenido', name: 'body', widget: 'markdown' }
```

---

## 📦 Comandos

| Comando           | Descripción         |
| :---------------- | :------------------ |
| `npm run dev`     | Servidor desarrollo |
| `npm run build`   | Build producción    |
| `npm run preview` | Preview del build   |

---

## 🚀 Deploy (GitHub Pages)

### Configuración Inicial (una vez)

1. **Crear repositorio en GitHub:**
   ```bash
   gh repo create docs-starlight --public --source=. --push
   ```

2. **Habilitar GitHub Pages:**
   - Ve a `Settings > Pages`
   - Source: **GitHub Actions**

3. **Configurar dominio en Cloudflare:**
   - Tipo: `CNAME`
   - Name: `docs`
   - Target: `herwingx.github.io`

4. **Primer deploy:**
   ```bash
   git push origin main
   ```

### Deploy Automático
Cada push a `main` despliega automáticamente via GitHub Actions.

---

## 📱 PWA (Progressive Web App)

El sitio es instalable como app:

**En móvil:**
- Visita `docs.herwingx.dev`
- Menú → "Añadir a pantalla de inicio"

**En desktop:**
- Chrome/Edge muestran botón de instalación

---

## 🎛️ CMS (Sveltia CMS)

- **URL:** `https://docs.herwingx.dev/admin/`
- **Backend:** GitHub (OAuth)
- Los cambios se commitean al repo y despliegan automáticamente

---

## 🛠️ Tecnologías

- Astro 5.x + Starlight 0.37
- Sveltia CMS
- GitHub Pages
- PWA ready

---

MIT © [herwingx](https://github.com/herwingx)

# 📁 Crear Carpetas y Subcarpetas

> ⚠️ **Importante:** Sveltia CMS solo puede crear **archivos**, no carpetas.
> Las carpetas deben crearse manualmente y luego registrarse en el CMS.

---

## Paso 1: Crear la estructura de archivos

```bash
# Crear una nueva subcarpeta (ejemplo: backend/docker)
mkdir -p src/content/docs/backend/docker

# Crear el archivo índice obligatorio
touch src/content/docs/backend/docker/index.mdx
```

---

## Paso 2: Configurar el archivo índice

Edita `src/content/docs/backend/docker/index.mdx`:

```mdx
---
title: Docker y Contenedores
description: Guías para dominar Docker en tu homelab.
sidebar:
  label: Intro Docker
  order: 1
---

import { Badge, LinkCard, CardGrid } from '@astrojs/starlight/components';

<Badge text="📂 Backend / Docker" variant="note" size="medium" />

Aquí va la introducción del tema...

## 🗂️ Contenido

<CardGrid>
  <LinkCard title="Primeros Pasos" href="./getting-started/" />
  <LinkCard title="Docker Compose" href="./compose/" />
</CardGrid>
```

---

## Paso 3: Registrar en Sveltia CMS

Edita `public/admin/config.yml` y añade la nueva colección:

```yaml
- name: backend-docker
  label: "⚙️ Backend › 🐳 Docker"
  folder: src/content/docs/backend/docker
  create: true
  delete: true
  slug: "{{slug}}"
  extension: mdx
  format: frontmatter
  fields:
    - { label: Título, name: title, widget: string, required: true }
    - { label: Fecha, name: date, widget: datetime, format: "YYYY-MM-DD", time_format: false, required: false }
    - { label: Descripción, name: description, widget: string, required: true }
    - { label: "OG Image URL", name: og_image, widget: string, required: false, hint: "URL absoluta de la imagen OG" }
    - label: Sidebar
      name: sidebar
      widget: object
      collapsed: true
      required: false
      fields:
        - { label: Etiqueta Menu, name: label, widget: string, required: false }
        - { label: Orden, name: order, widget: number, required: false }
    - { label: Contenido, name: body, widget: markdown }
```

---

## Paso 4: Recargar el CMS

Recarga Sveltia CMS (`Ctrl+Shift+R`) para ver la nueva colección.

---

## Checklist rápido

- [ ] Carpeta creada con `mkdir -p`
- [ ] Archivo `index.mdx` (o `intro.mdx`) con frontmatter válido
- [ ] Colección registrada en `public/admin/config.yml`
- [ ] CMS recargado para verificar

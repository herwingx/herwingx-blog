# 📝 Gestión de Contenido

Guía para crear y gestionar artículos en Herwingx Labs.

---

## CMS: Sveltia CMS

Usamos **Sveltia CMS** — una alternativa moderna a Decap/Netlify CMS.

### Vía CMS (Recomendado)

Visita `/admin/` en tu entorno local o producción.

- **Login:** Automático (Local) o vía GitHub (Prod).
- **Ventaja:** Autocompleta fechas y valida campos requeridos.

### Vía Código (VS Code)

Crea un archivo `.mdx` en la carpeta correspondiente dentro de `src/content/docs/`.

---

## Plantilla de Artículo

```mdx
---
title: Mi Nuevo Experimento
date: "2026-02-04"   # ¡Importante! Usa comillas y fecha actual.
description: Breve resumen de qué rompiste hoy.
og_image: https://docs.herwingx.dev/images/mi-imagen.png  # (Opcional) URL absoluta
sidebar:
  order: 10          # (Opcional) Orden manual
---

Aquí empieza la magia...
```

### Campos del frontmatter

| Campo         | Requerido | Descripción                                              |
| :------------ | :-------: | :------------------------------------------------------- |
| `title`       | ✅        | Título del artículo                                       |
| `date`        | ✅        | Fecha en formato `YYYY-MM-DD` (entre comillas)            |
| `description` | ✅        | Resumen corto para SEO y previews                         |
| `og_image`    | ❌        | URL absoluta de la imagen Open Graph                      |
| `sidebar`     | ❌        | Objeto con `label` (nombre en menú) y `order` (posición)  |

---

## Ubicaciones del contenido

| Tipo de contenido | Carpeta destino                   |
| :---------------- | :-------------------------------- |
| Frontend          | `src/content/docs/frontend/`      |
| Backend           | `src/content/docs/backend/`       |
| DevOps            | `src/content/docs/devops/`        |
| Tools & Labs      | `src/content/docs/tools-labs/`    |

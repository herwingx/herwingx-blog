# 📸 Imágenes OG (Open Graph)

Las "Imágenes OG" son las que aparecen cuando compartes un link en WhatsApp, Twitter, LinkedIn, etc.

> **⚠️ No hay imagen OG global.** Cada artículo debe tener su propia imagen. Si no la tiene, se comparte solo con título y descripción.

---

## Cómo funciona

- **Starlight genera automáticamente** `og:title`, `og:description`, `og:url` y `og:locale` desde el frontmatter.
- **Cada artículo define su propia imagen** con el campo `og_image` (URL absoluta).
- Los tags globales (`og:type`, `og:site_name`, `twitter:card`) se definen en `astro.config.mjs`.
- El componente `src/components/Head.astro` inyecta `twitter:title`, `twitter:description` y la imagen si existe.

---

## Agregar imagen OG a una página

### Opción A: Desde Sveltia CMS (Recomendado)

Cada colección tiene un campo **"OG Image URL"**. Solo pega la URL absoluta.

### Opción B: Desde código

Agrega `og_image` al frontmatter:

```mdx
---
title: Warp Terminal
description: La terminal del futuro...
og_image: https://docs.herwingx.dev/images/warp-card.png
---
```

---

## Reglas importantes

| Regla                          | Detalle                                                                            |
| :----------------------------- | :--------------------------------------------------------------------------------- |
| **Cada artículo con su imagen** | No existe imagen por defecto. Cada post necesita su propia `og_image`             |
| **URL absoluta obligatoria**   | `https://docs.herwingx.dev/images/warp-card.png` (no `/images/warp-card.png`)      |
| **Archivos en `public/images/`** | Las imágenes van en `public/images/` (el CMS las guarda ahí automáticamente)       |
| **Sin imagen = sin preview**   | Si no defines `og_image`, el link se comparte sin imagen (solo título y descripción) |
| **Tamaño recomendado**         | 1200×630px, formato PNG o JPG                                                      |

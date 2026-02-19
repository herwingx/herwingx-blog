# ⚡ Cheatsheet de Mantenimiento

Referencia rápida: ¿qué archivo tocar según la acción?

---

## Acciones comunes

| Acción                    | Archivos a tocar                                                                                                                                  | ¿Reiniciar server? |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-----------------: |
| **Agregar un artículo**   | Solo crea el `.mdx` en la carpeta correcta                                                                                                        | No                  |
| **Crear subcarpeta**      | 1. Crea carpeta + `index.mdx` (o `intro.mdx`)<br>2. Registra en `public/admin/config.yml`                                                        | **Sí** (CMS)        |
| **Nueva categoría raíz**  | 1. Crea carpeta en `src/content/docs/`<br>2. Añade grupo en `astro.config.mjs`<br>3. Registra en `public/admin/config.yml`<br>4. Añade tarjeta en `src/content/docs/index.mdx` | **Sí**              |
| **Cambiar portada**       | `src/content/docs/index.mdx`                                                                                                                      | No                  |
| **Cambiar CSS global**    | `src/styles/custom.css`                                                                                                                            | No                  |
| **Modificar sidebar**     | `astro.config.mjs` → sección `sidebar`                                                                                                            | **Sí**              |
| **Cambiar logo**          | Reemplazar archivos en `src/assets/` y actualizar `astro.config.mjs`                                                                              | **Sí**              |

---

## Archivos clave

| Archivo                        | Propósito                                         |
| :----------------------------- | :------------------------------------------------ |
| `astro.config.mjs`             | Configuración principal (sidebar, idiomas, head)   |
| `public/admin/config.yml`      | Colecciones y campos del CMS                       |
| `src/styles/custom.css`        | Estilos globales personalizados                    |
| `src/components/Head.astro`    | Meta tags personalizados (OG, Twitter)             |
| `scripts/auto-badges.mjs`     | Script de auto-etiquetado                          |
| `src/content/docs/index.mdx`  | Página de inicio / portada                         |

---

## Comandos

| Comando               | Descripción                                |
| :-------------------- | :----------------------------------------- |
| `npm run dev`         | Badges + servidor local                    |
| `npm run build`       | Badges + compilación estática              |
| `npm run preview`     | Preview del build                          |
| `npm run cms`         | Proxy local para Sveltia CMS               |
| `npm run dev:cms`     | Dev + CMS en paralelo                      |

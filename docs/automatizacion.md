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

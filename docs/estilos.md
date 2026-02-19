# 🎨 Guía de Estilos: Índices

Convenciones para mantener la navegación limpia y consistente.

---

## Índices de Categoría (Frontend, Backend, DevOps...)

Deben ser **invisibles** en el menú lateral para no estorbar, pero accesibles desde el Home.

```yaml
---
title: Título Épico
sidebar:
  hidden: true   # No mostrar en menú lateral
prev: false      # No mostrar en paginación
next: false
---
import { Badge } from '@astrojs/starlight/components';
<Badge text="📂 Categoría" variant="note" size="medium" />
```

**¿Por qué?** Las categorías principales se navegan desde la portada y el sidebar ya muestra sus hijos. Mostrar el índice duplicaría la entrada.

---

## Índices de Subcarpetas (Cursor, Docker, WSL...)

Estos **SÍ** se muestran porque introducen un tema complejo con múltiples artículos.

```yaml
---
title: Título del Tema
sidebar:
  label: Intro Tema  # Nombre corto para el menú
  order: 1
---
import { Badge } from '@astrojs/starlight/components';
<Badge text="📂 Subcarpeta" variant="note" size="medium" />
```

**¿Por qué?** Sirven como punto de entrada y tabla de contenidos para un tema que tiene varios artículos relacionados.

---

## Resumen

| Tipo de índice     | ¿Visible en sidebar? | ¿Tiene paginación? | Ejemplo                |
| :----------------- | :-------------------: | :-----------------: | :--------------------- |
| Categoría raíz     | ❌ `hidden: true`     | ❌ `prev/next: false` | `frontend/intro.mdx`  |
| Subcarpeta         | ✅ Con `label` corto  | ✅ Normal            | `wsl/guia-wsl2.mdx`   |

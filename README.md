# 🧪 Herwingx Labs

> **Donde rompo cosas para aprender cómo funcionan.** — Tutoriales prácticos sobre desarrollo, servidores caseros y vida en la terminal.

[![Estado](https://img.shields.io/badge/Estado-En_Producción-2ea44f?style=flat-square&logo=github)](https://docs.herwingx.dev)
[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Starlight](https://img.shields.io/badge/Starlight-0.27-7735ea?style=flat-square&logo=astro&logoColor=white)](https://starlight.astro.build)
[![CMS](https://img.shields.io/badge/Sveltia-CMS-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://github.com/sveltia/sveltia-cms)

<p align="center">
  <img src="public/favicon.svg" alt="Herwingx Labs Logo" width="120" />
</p>

---

## 🔬 ¿Qué es este Laboratorio?

Este no es un blog normal. Es un **sistema de documentación vivo**.
Aquí publico mis experimentos de código, configuraciones de servidores y flujos de trabajo con IA.

El sitio está diseñado para ser **Autónomo**:
- 🤖 **Auto-etiquetado**: Un script detecta posts recientes (< 7 días) y les pone la etiqueta `Nuevo`.
- 📅 **Auto-fechado**: El CMS sugiere la fecha de hoy automáticamente.
- 🏠 **Home Dinámico**: La portada se actualiza sola con lo último que publico.

---

## 📂 Organización del Conocimiento

Todo el contenido vive en `src/content/docs/`. Está dividido en 4 pilares:

| Carpeta       | Icono | Propósito                                                                 |
| :------------ | :---- | :------------------------------------------------------------------------ |
| `/frontend`   | 🎨    | **Visual**: CSS, React, Efectos UI y trucos de diseño.                    |
| `/backend`    | ⚙️    | **Lógica**: APIs, Bases de Datos, Arquitectura y Flujos de IA.            |
| `/devops`     | 🚀    | **Infra**: Docker, Linux, VPS, Seguridad y Redes.                         |
| `/proyectos`  | 🧪    | **Lab**: Configs personales (Dotfiles), Setup del sitio y experimentos.   |

---

## 📝 Gestión de Contenido (CMS)

Usamos **Sveltia CMS** — una alternativa moderna a Decap/Netlify CMS.

### A. Vía CMS (Recomendado)
Visita `/admin/` en tu entorno local o producción.
- **Login:** Automático (Local) o vía GitHub (Prod).
- **Ventaja:** Autocompleta fechas y valida campos requeridos.

### B. Vía Código (VS Code)
Crea un archivo `.mdx` en la carpeta correspondiente.

**Plantilla Mínima:**
```mdx
---
title: Mi Nuevo Experimento
date: "2026-02-04"   # ¡Importante! Usa comillas y fecha actual.
description: Breve resumen de qué rompiste hoy.
sidebar:
  order: 10          # (Opcional) Orden manual
---

Aquí empieza la magia...
```

---

## 📁 Crear Carpetas y Subcarpetas

> ⚠️ **Importante:** Sveltia CMS solo puede crear **archivos**, no carpetas.
> Las carpetas deben crearse manualmente y luego registrarse en el CMS.

### Paso 1: Crear la estructura de archivos

```bash
# Crear una nueva subcarpeta (ejemplo: backend/docker)
mkdir -p src/content/docs/backend/docker

# Crear el archivo índice obligatorio
touch src/content/docs/backend/docker/index.mdx
```

### Paso 2: Configurar el archivo índice

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

### Paso 3: Registrar en Sveltia CMS

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

### Paso 4: Recargar el CMS

Recarga Sveltia CMS (`Ctrl+Shift+R`) para ver la nueva colección.

---

## 🎨 Guía de Estilo: Índices

Para mantener la navegación limpia, seguimos estas reglas:

### Índices de Categoría (Frontend, Backend...)
Deben ser **invisibles** en el menú para no estorbar, pero accesibles desde el Home.

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

### Índices de Subcarpetas (Cursor, Docker...)
Estos **SÍ** se muestran porque introducen un tema complejo.

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

---

## 🤖 Automatización y Scripts

El proyecto cuenta con un pipeline de CI/CD local integrado en `npm`.

### Script de Badges (`scripts/auto-badges.mjs`)
Este script se ejecuta automáticamente antes de `dev` y `build`.

1.  Escanea todos los archivos `.mdx`.
2.  Lee la fecha del frontmatter (`date: YYYY-MM-DD`).
3.  Si el post tiene **menos de 7 días**:
    - Le inyecta `badge: { text: Nuevo, variant: success }` en el sidebar.
4.  Si el post ya es viejo:
    - Le quita el badge automáticamente.

> 📘 **Nota:** Si pones un badge manual (ej: "Popular"), el script lo respeta y no lo toca.

---

## ⚡ Cheatsheet de Mantenimiento

¿Qué archivo debo editar si...?

| Acción | Archivos a tocar | ¿Reiniciar server? |
| :--- | :--- | :---: |
| **Agregar un Artículo** | Solo crea el `.mdx` en la carpeta correcta. | No |
| **Crear Subcarpeta** | 1. Crea carpeta + `index.mdx`<br>2. Registra en `config.yml` | **Sí** (CMS) |
| **Nueva Categoría Raíz** | 1. Crea carpeta en `src/content/docs/`<br>2. Añade grupo en `astro.config.mjs`<br>3. Registra en `public/admin/config.yml` | **Sí** |
| **Cambiar Portada** | `src/content/docs/index.mdx` | No |
| **Cambiar CSS Global** | `src/styles/custom.css` | No |

---

## 🚀 Comandos de Laboratorio

| Comando               | Descripción                                                                 |
| :-------------------- | :-------------------------------------------------------------------------- |
| `npm run dev`         | **Modo Dios.** Ejecuta script de badges + Levanta servidor local.           |
| `npm run build`       | **Modo Producción.** Ejecuta badges + Compila el sitio estático.            |
| `npm run preview`     | Previsualiza el sitio compilado.                                            |
| `npm run cms`         | Levanta el proxy local para el CMS (si se requiere).                        |

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Core** | Astro 5 + Starlight |
| **CMS** | Sveltia CMS (Fork moderno de Decap) |
| **Estilos** | Custom CSS (Variables puras) |
| **Automatización** | Node.js Scripts (Badges) |
| **Despliegue** | Cloudflare Pages / Vercel |
| **Auth** | Cloudflare Workers (OAuth Proxy) |

---

## 🤝 Contribución

Si encuentras un error en mis notas o tienes una forma mejor de hacer algo:

1.  Haz un Fork.
2.  Crea una rama (`feat/mejora-increible`).
3.  Manda un PR.

---
*Hecho con 🧪 y ☕ por Herwingx.*

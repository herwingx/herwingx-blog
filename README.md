# 🧪 Herwingx Labs

> **Donde rompo cosas para aprender cómo funcionan.** — Tutoriales prácticos sobre desarrollo, servidores caseros y vida en la terminal.

[![Estado](https://img.shields.io/badge/Estado-En_Producción-2ea44f?style=flat-square&logo=github)](https://docs.herwingx.dev)
[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Starlight](https://img.shields.io/badge/Starlight-0.37-7735ea?style=flat-square&logo=astro&logoColor=white)](https://starlight.astro.build)
[![CMS](https://img.shields.io/badge/Sveltia-CMS-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://github.com/sveltia/sveltia-cms)

<p align="center">
  <img src="public/favicon.svg" alt="Herwingx Labs Logo" width="120" />
</p>

---

## 🔬 ¿Qué es esto?

**Herwingx Labs** es un sitio de documentación personal construido con [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). No es un blog convencional — es un **sistema de conocimiento vivo** donde publico experimentos de código, configuraciones de servidores y flujos de trabajo con IA.

### Características principales

- **Auto-etiquetado**: Un script detecta posts recientes (< 7 días) y les añade el badge `Nuevo` automáticamente.
- **CMS integrado**: Gestión de contenido visual con [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (fork moderno de Decap CMS).
- **Home dinámico**: La portada se actualiza sola con las últimas publicaciones.
- **PWA ready**: Manifiesto web y meta tags para instalación como app.
- **Multiidioma**: Estructura preparada para español (por defecto) e inglés.

---

## 📂 Estructura del Contenido

Todo el contenido vive en `src/content/docs/`, organizado en 4 pilares:

| Carpeta        | Tema                                                     |
| :------------- | :------------------------------------------------------- |
| `frontend/`    | 🎨 CSS, React, efectos UI y trucos de diseño             |
| `backend/`     | ⚙️ APIs, Bases de Datos, Arquitectura y flujos de IA     |
| `devops/`      | 🚀 Docker, Linux, VPS, Seguridad y Redes                 |
| `tools-labs/`  | 🛠️ Herramientas, configs personales y experimentos       |

---

## 🛠️ Stack Tecnológico

| Capa               | Tecnología                              |
| :------------------ | :-------------------------------------- |
| **Framework**       | Astro 5 + Starlight                     |
| **CMS**             | Sveltia CMS (Fork moderno de Decap)     |
| **Estilos**         | Custom CSS (Variables puras)            |
| **Automatización**  | Node.js Scripts (Auto-badges)           |
| **Despliegue**      | Cloudflare Pages                        |
| **Auth (CMS)**      | Cloudflare Workers (OAuth Proxy)        |

---

## 🚀 Inicio Rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/herwingx/herwingx-labs.git
cd herwingx-labs

# 2. Instalar dependencias
npm install

# 3. Levantar servidor de desarrollo
npm run dev
```

### Comandos disponibles

| Comando               | Descripción                                              |
| :-------------------- | :------------------------------------------------------- |
| `npm run dev`         | Ejecuta badges + levanta servidor local                  |
| `npm run build`       | Ejecuta badges + compila el sitio estático               |
| `npm run preview`     | Previsualiza el sitio compilado                          |
| `npm run cms`         | Levanta el proxy local para Sveltia CMS                  |
| `npm run dev:cms`     | Dev + CMS local en paralelo                              |

---

## 📁 Estructura del Proyecto

```
├── public/
│   ├── admin/           # Sveltia CMS (config + UI)
│   ├── icons/           # Iconos PWA
│   └── images/          # Imágenes OG y assets públicos
├── scripts/
│   └── auto-badges.mjs  # Auto-etiquetado de posts nuevos
├── src/
│   ├── components/      # Componentes Astro personalizados
│   ├── content/docs/    # Todo el contenido del sitio
│   ├── pages/           # Páginas especiales (admin)
│   └── styles/          # CSS personalizado
├── astro.config.mjs     # Configuración principal de Astro/Starlight
└── package.json
```

---

## 📖 Documentación interna

Las guías de cómo gestionar, mantener y extender este proyecto están en la carpeta [`docs/`](docs/):

| Guía | Descripción |
| :--- | :--- |
| [Gestión de Contenido](docs/contenido.md) | Cómo crear artículos vía CMS o código, plantillas y frontmatter |
| [Imágenes OG](docs/imagenes-og.md) | Cómo funcionan las imágenes Open Graph y cómo agregarlas |
| [Carpetas y Subcarpetas](docs/carpetas.md) | Cómo crear nuevas secciones y registrarlas en el CMS |
| [Guía de Estilos](docs/estilos.md) | Convenciones para índices de categorías y subcarpetas |
| [Automatización](docs/automatizacion.md) | Cómo funciona el script de auto-badges |
| [Mantenimiento](docs/mantenimiento.md) | Cheatsheet rápido: qué archivo tocar para cada acción |

---

## 🤝 Contribución

Si encuentras un error en mis notas o tienes una forma mejor de hacer algo:

1. Haz un Fork.
2. Crea una rama (`feat/mejora-increible`).
3. Manda un PR.

---

*Hecho con 🧪 y ☕ por Herwingx.*

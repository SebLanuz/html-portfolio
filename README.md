# Portfolio de Sebastián Lara

Sitio construido con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind
CSS**, a partir del diseño de Figma.

## Cómo correrlo en tu máquina

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

```
src/
  app/                 páginas (rutas)
    page.tsx           Home
    projects/page.tsx  Listado de proyectos
    projects/[slug]/page.tsx   Plantilla de case study (una por proyecto)
    about/page.tsx
    contact/page.tsx
  components/          Navbar, botones, tarjetas de proyecto, íconos
  data/
    site.ts            Tu info: nombre, rol, email, teléfono, LinkedIn
    projects.ts         Contenido de cada case study (textos, objetivos, etc.)
  lib/
    assets.ts           Mapa central de imágenes (ver public/images/README.md)
```

## Editar contenido

- **Textos generales / datos de contacto:** `src/data/site.ts`
- **Case studies (Cinemex, Uber Eats, Galactic Coffee):** `src/data/projects.ts`.
  Cada proyecto es un objeto con sus textos (objetivos, insights, hipótesis,
  conclusiones, etc.) — edítalos ahí, no hace falta tocar el diseño de las
  páginas.
- **Agregar un proyecto nuevo:** agrega un objeto más al arreglo `projects` en
  `src/data/projects.ts` con un `slug` nuevo; la página
  `/projects/[slug]` se genera automáticamente, y aparecerá solo en el listado
  de `/projects` y `/about`.
- **Imágenes:** ver `public/images/README.md` — por ahora las imágenes
  apuntan a enlaces temporales de Figma que caducan en unos días; hay
  instrucciones para reemplazarlas por archivos permanentes.

## Desplegar

El proyecto está listo para **Vercel** o **GitHub Pages**:

- **Vercel (recomendado, cero configuración):** sube este repo a GitHub y
  conéctalo en https://vercel.com/new.
- **GitHub Pages:** requiere exportar el sitio como estático
  (`output: "export"` en `next.config.mjs`) ya que Pages no ejecuta servidor.
  Aviso si quieres que lo configure así.

## Pendiente

- Los mockups de laptop y teléfono de la página de inicio están señalados
  como "por terminar" — swap fácil en `src/lib/assets.ts` cuando los tengas.
- Reemplazar las imágenes temporales de Figma por archivos definitivos (ver
  `public/images/README.md`).

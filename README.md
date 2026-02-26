# First Stop. — Café de Especialidad en Zapopan

Landing page single-page para First Stop., café de especialidad en Zapopan, Jalisco.

## Stack

- **Next.js 14** con App Router
- **TypeScript** estricto
- **Tailwind CSS** (sin plugins externos)
- **Framer Motion** para animaciones
- **Heroicons** para iconografía mínima

## Tipografía

- **Logo**: Bebas Neue (weight 400, uppercase)
- **Display/Headings**: DM Serif Display (weight 400, italic para acentos)
- **Body/UI**: DM Sans (weights 300 y 400)

## Paleta de Color

```
--color-cream:    #F5F0E8   (fondo base)
--color-brick:    #8B2E1A   (primario)
--color-burgundy: #5C1A1A   (acento oscuro)
--color-sand:     #C8BFB0   (neutro)
--color-ink:      #1C1410   (texto base)
```

## Estructura

1. **Navbar** — navegación sticky con logo y CTAs
2. **Hero** — tagline principal con SVG decorativo
3. **Oferta** — tres columnas: café, desayunos, matcha
4. **Sobre Nosotros** — layout 60/40 con placeholder visual
5. **Horarios** — horarios de atención centrados
6. **Ubicación** — dirección y mapa de Google Maps
7. **CTA Final** — fondo brick con llamado a la acción
8. **Footer** — información de contacto y copyright

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## Animaciones

Todas las animaciones usan el patrón `fadeUp`:
- opacity: 0 → 1
- y: 24 → 0
- duration: 0.5s
- ease: "easeOut"

## Notas de Implementación

- TypeScript estricto (sin `any`)
- Componentes con `"use client"` solo cuando usan hooks o Framer Motion
- **Mobile-first responsive design** completamente optimizado:
  - Breakpoints: mobile (< 640px), tablet (640px-1024px), desktop (> 1024px)
  - Tipografía fluida con clamp() y breakpoints adaptativos
  - Padding y spacing optimizados para cada dispositivo
  - Grid layouts que se adaptan: 1 col (mobile) → 2 cols (tablet) → 4 cols (desktop)
  - Botones full-width en mobile, auto en desktop
  - Altura de iframe de mapa reducida en mobile (300px vs 400px)
  - Logo y navegación optimizados para pantallas pequeñas
- SVGs inline para elementos decorativos
- Sin fotografías de stock
- Copy con tono humano y pausado
- Scroll suave nativo (`scroll-behavior: smooth`)
- Sin overflow horizontal (`overflow-x: hidden`)
- Tap highlight deshabilitado para mejor UX en móviles

## Información del Negocio

**Dirección**: Av. Universidad 325, Zapopan 45116, Jalisco
**Horarios**: Lunes – Sábado, 7:00 am – 9:00 pm (Domingo cerrado)
**Instagram**: [@firststop.mx](https://instagram.com/firststop.mx)

## Powered By

Desarrollado por [Amoxtli®](https://www.amoxtli.tech)
# demo-first-stop

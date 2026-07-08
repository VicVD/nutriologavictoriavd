# Nutrióloga Victoria D. — Sitio Web

Sitio web estático (HTML5 + CSS3 + JS ES6 + Bootstrap 5) para la marca personal de
la Nutrióloga Victoria D. Diseño premium, minimalista y orgánico, inspirado en el
logotipo (verde bosque, verde salvia y beige).

## Estructura

```
/
├── index.html          Página de inicio
├── sobre-mi.html        Historia y trayectoria (línea de tiempo interactiva)
├── consulta.html         Servicios + formulario de agenda
├── blog.html             Blog tipo revista con buscador y categorías
├── recetas.html           Catálogo de recetas con filtros y favoritos
├── contacto.html          Formulario, mapa y redes sociales
├── login.html             Acceso a "Familia Nutria" (preparado para Firebase Auth)
├── dashboard.html          Panel privado con menú lateral
├── css/style.css          Sistema de diseño (variables, tipografía, componentes)
├── js/main.js             Navbar, menú móvil, animaciones al scroll, filtros, favoritos
├── img/logo-vd.png        Logotipo de la marca
└── assets/                Carpeta libre para recursos adicionales
```

## Cómo verlo
Abre `index.html` en cualquier navegador. No requiere instalación ni build:
usa CDN para Bootstrap 5, Bootstrap Icons y Google Fonts (Poppins + Nunito).

## Próximos pasos técnicos sugeridos
- **Firebase Authentication**: conectar `login.html` (función `form-login` en
  `js/main.js`) a `signInWithEmailAndPassword` / proveedor de Google.
- **Firebase Firestore**: alimentar dinámicamente blog, recetas y descargables.
- **Firebase Storage**: alojar fotografías, PDFs de recetas y material descargable.
- **Agenda de citas y pagos**: el formulario de `consulta.html` ya está estructurado
  para conectarse a un backend de citas (Calendly, Firestore o API propia).
- **Calculadoras nutricionales**: se puede añadir como nuevo módulo en el dashboard.

## Notas de diseño
- Paleta: verde bosque `#1F2A17`, verde oliva `#435330`, verde salvia `#93A66A`,
  beige `#EDE4CF` / `#F8F5EC`.
- Tipografía: Poppins (títulos), Nunito (texto).
- Elemento distintivo: la "vid que crece" — línea de tiempo con progreso animado
  en `sobre-mi.html`, inspirada en el brote del logotipo.
- Accesibilidad: contraste AA, foco visible, `prefers-reduced-motion` respetado.

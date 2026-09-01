# Implementation Plan: 01-mvp-core

## Objective
Realizar el scaffolding completo de la aplicación utilizando una librería de componentes de React compatible con Next.js y React 19 (ej. Mantine o Material UI v6), estructurar las rutas principales con pantallas mockeadas ("en construcción" o con datos estáticos), e implementar el formulario funcional de evaluación emocional/técnica con su motor de recomendaciones.

## Implementation Steps

### Step 1: UI Library Setup
- Instalar la librería de componentes seleccionada (por ejemplo, `@mantine/core @mantine/hooks` o `@mui/material @emotion/react @emotion/styled`) asegurando compatibilidad con React 19 y Next.js App Router.
- Configurar el proveedor de la librería (Provider) en `src/app/layout.tsx`.
- Deshabilitar/remover o adaptar la configuración de Tailwind según sea necesario si se prefiere depender puramente de la librería.

### Step 2: App Scaffolding (Rutas y Mocks)
- Estructurar el ruteo de Next.js App Router creando carpetas y archivos `page.tsx` para las siguientes secciones:
  - `src/app/login/page.tsx`: Pantalla de login mockeada (diseño estético, botón de "Ingresar" que redirige al Dashboard).
  - `src/app/dashboard/page.tsx`: Dashboard general con tarjetas informativas, métricas agregadas simuladas y accesos rápidos.
  - `src/app/players/page.tsx`: Listado con tarjetas/tabla de jugadoras mockeadas y buscador de texto.
  - `src/app/players/[id]/page.tsx`: Perfil estático de una jugadora con un historial simulado y evolución del estado de flow.
  - `src/app/assessment/new/page.tsx`: Reubicar y adaptar la pantalla funcional del formulario aquí.

### Step 3: Data Models (TypeScript)
- Mantener y refinar las interfaces en `src/types/assessment.ts` si es necesario para dar soporte al listado de jugadoras y al historial mockeado.

### Step 4: Recommendation Engine
- Mantener `src/utils/recommendations.ts` con la lógica estática actual (reglas if/else basadas en scores de jugadoras y observaciones de psicólogos) y asegurar cobertura de casos.

### Step 5: Form & Component Refactoring
- Migrar y adaptar los componentes existentes (`PlayerForm`, `PsychologistForm`, `ResultsDisplay`) para utilizar los componentes nativos de la librería de UI elegida (ej: Sliders, Checkboxes, Card, Button, Container, Select, Input, etc.).
- Asegurar que el formulario combinado en `/assessment/new` funcione correctamente y calcule los next steps de manera reactiva en base al submit.

### Step 6: Navigation & Layout Integration
- Crear un componente de barra de navegación (`src/components/Navigation.tsx`) que use los componentes de la librería y permita navegar fluidamente entre el Dashboard, el Listado de Jugadoras, el Formulario y el Login.
- Añadir el componente de navegación globalmente en el layout raíz o selectivamente según la ruta (ej. ocultar en login).

### Step 7: Documentation (README)
- Actualizar `README.md` explicando la estructura del scaffolding del MVP, la arquitectura modular aplicada, la librería de UI utilizada y los comandos para ejecutar el proyecto en Vercel o en local.

## Verification & Testing
- Validar la correcta compilación y builds de Next.js sin errores de TypeScript ni de SSR relacionados con la librería de componentes.
- Probar la navegación fluida a través de todas las rutas configuradas en el scaffolding.
- Interactuar con el formulario en `/assessment/new`, asegurando que al enviar se calculen y presenten las recomendaciones correctas según las reglas de negocio estáticas.


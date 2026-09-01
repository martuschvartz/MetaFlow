# Track 01: MVP Core - Scaffolding y Flujo Principal

## Objective
Desarrollar el scaffolding (estructura base) de la aplicación y el flujo central en el cual se capturan datos técnicos y emocionales para generar recomendaciones ("next steps"). El objetivo es tener toda la estructura de navegación preparada (aunque mockeada) y validar la utilidad del formulario y el motor de reglas en una vista combinada, sin backend real.

## Scope (Alcance)

### 1. Estructura de Vistas (Scaffolding Mockeado)
- Creación de rutas principales (App Router):
  - `/login`: Vista mockeada de autenticación.
  - `/dashboard`: Vista mockeada del panel principal (resumen, métricas rápidas).
  - `/players`: Listado mockeado de jugadoras.
  - `/players/[id]`: Perfil de una jugadora específica.
  - `/assessment/new`: Pantalla funcional para este MVP donde residirá el formulario principal.

### 2. Flujo de Formulario (UI)
- **Simulación en Pantalla Única (`/assessment/new`):**
  - Para agilizar pruebas, los campos de la jugadora y del psicólogo deportivo convivirán temporalmente en un solo formulario.
  - Uso de componentes de la librería seleccionada (ej. MUI/Mantine): Sliders para métricas de autoevaluación (1 a 5) y Checkboxes para observaciones técnicas.

### 3. Modelos de Datos (Interfaces TypeScript)
- **Autoevaluación (Jugadora):**
  - Estado de flow, activación/nervios, confianza, presión percibida, diálogo interno.
- **Evaluación Profesional (Psicólogo):**
  - Conceptos observados y fortalezas (Psicología deportiva, flow, cognitivo conductual, etc.).

### 4. Motor de Recomendaciones y Resultados
- **Reglas Estáticas (If/Else):** Utilidad estática (ej. `generateNextSteps()`) que evalúa cruces entre el score emocional y las marcas técnicas.
  - *Ejemplo:* Si "confianza < 3" y "cognitivo conductual = true" -> "Próximo paso: Trabajo en reestructuración cognitiva".
- **Visualización de Resultados:** Al hacer submit, se redirige (o se muestra en un modal/pantalla) a la vista del reporte generado con las indicaciones.

### 5. Gestión de Estado para el MVP
- Almacenamiento temporal en el estado local (React State) o Context API simulando la persistencia durante la sesión.

## Out of Scope (Fuera del MVP Core)
- Integración real con base de datos (Supabase).
- Autenticación real de usuarios (JWT, roles).
- Gráficos históricos funcionales.

## Design & Architecture Notes
- Priorizar componentes modulares utilizando la librería de componentes elegida.
- El motor de reglas debe estar puramente desacoplado en una función aislada, de forma que sea fácilmente migrable al backend en el futuro.

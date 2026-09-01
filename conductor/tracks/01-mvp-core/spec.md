# Track 01: MVP Core - Formularios y Next Steps

## Objective
Desarrollar el flujo central de la plataforma en el cual se capturan los datos de la jugadora y del psicólogo deportivo para generar recomendaciones accionables ("next steps"). El objetivo de este MVP es validar la utilidad del formulario y del motor de reglas, sin necesidad de un backend real de momento.

## Scope (Alcance)

### 1. Modelos de Datos (Interfaces TypeScript)
- **Autoevaluación de la Jugadora (Valores graduales 1 al 5):**
  - Estado de flow.
  - Estado de activación/nervios.
  - Confianza.
  - Presión percibida.
  - Diálogo interno predominante.
- **Evaluación del Psicólogo Deportivo (Checklists booleanos o categóricos):**
  - **Conceptos observados:** Psicología del deporte, Estado de flow, Logoterapia, Cognitivo conductual, Deportología/traumatología/kinesiología.
  - **Fortalezas observadas:** (Mismas categorías).

### 2. Interfaz de Usuario (UI)
- **Pantalla de Carga de Datos:** Un formulario responsivo, posiblemente dividido en pasos (Step 1: Jugadora, Step 2: Psicólogo) o secciones bien delimitadas.
  - Uso de componentes visuales amigables: Sliders para métricas de 1 a 5. Casilleros (Checkboxes) agrupados por área para el psicólogo.
- **Pantalla de Resultados:** Una vista donde, en base al submit del formulario, se presenta el perfil actual resumido junto con un bloque de **"Next Steps / Indicaciones"**.

### 3. Motor de Recomendaciones Estáticas
- Un módulo utilitario (ej. `generateNextSteps(playerData, psychData)`) que contiene lógica estática de decisión.
- *Ejemplo de regla conceptual:* Si la 'Confianza' es menor a 3 y el psicólogo marcó algo particular en 'Cognitivo conductual', se renderiza un next step como "Trabajar reestructuración cognitiva en la próxima sesión".

### 4. Gestión de Estado para el MVP
- Almacenamiento temporal en LocalStorage o Context API para permitir simular el flujo completo (Ingreso de form -> Ver resultado) para la validación con stakeholders, antes de incorporar Supabase.

## Out of Scope (Fuera del MVP Core)
- Integración real con base de datos (Supabase).
- Autenticación real de usuarios con roles y contraseñas.
- Gráficos históricos de evolución en un Dashboard complejo a lo largo del tiempo.

## Design & Architecture Notes
- Priorizar componentes modulares. El motor de reglas debe estar desacoplado de la vista, para que el día de mañana sea muy sencillo mover esa lógica a una API de Supabase o reemplazarlo con un prompt de IA.

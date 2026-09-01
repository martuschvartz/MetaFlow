# Workflow

## Desarrollo Local
1. **Inicialización:** Bootstrap con `npx create-next-app@latest` usando App Router, TypeScript y Tailwind CSS.
2. **Estructura Modular:** Desarrollar features dentro de `app/` para rutas y `/components` para UI reutilizable (Sliders, Formularios).
3. **Gestión de Datos (MVP):** Dado que Supabase se integrará más adelante, el MVP utilizará estado de React o LocalStorage para simular la persistencia y la navegación entre la pantalla de formulario y la pantalla de resultados.

## Convenciones de Código
- **Ramas (Branches):** `feature/nombre-de-feature`, `fix/descripcion-del-bug`.
- **Tipado Estricto:** Definir todas las interfaces del dominio deportivo en un directorio de `types/` (ej: `PlayerAssessment`, `PsychologistObservation`).
- **Separación de Lógica:** Las reglas de negocio que definen los "Next Steps" deben extraerse en utilidades puras (ej. `utils/recommendations.ts`) para que sean fácilmente testables y migrables al backend más adelante.

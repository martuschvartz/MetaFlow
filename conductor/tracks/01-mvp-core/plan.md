# Implementation Plan: 01-mvp-core

## Objective
Realizar el scaffolding del proyecto Next.js, construir la primera versión funcional del formulario de seguimiento (jugadora y psicólogo) junto con el motor de reglas estáticas, y documentar el proceso de ejecución en el README.

## Implementation Steps

### Step 1: Project Scaffolding
- Ejecutar el comando de creación de Next.js en el directorio del proyecto (utilizando configuración estándar: App Router, TypeScript, Tailwind CSS, y el directorio `src/`).
- Instalar dependencias necesarias (lucide-react para íconos si se requieren).
- Limpiar el código boilerplate de `src/app/page.tsx` y ajustar estilos globales en `src/app/globals.css`.

### Step 2: Data Models (TypeScript)
- Crear el archivo `src/types/assessment.ts`.
- Definir la interfaz `PlayerAssessment` (Flow, Activación, Confianza, Presión, Diálogo Interno, con valores numéricos 1-5).
- Definir la interfaz `PsychologistAssessment` (Conceptos y fortalezas mediante booleanos o arrays de categorías).

### Step 3: Recommendation Engine
- Crear `src/utils/recommendations.ts`.
- Implementar la función `generateNextSteps(player: PlayerAssessment, psych: PsychologistAssessment): string[]`.
- Agregar al menos 3 a 5 reglas estáticas básicas para demostrar el funcionamiento (ej. "Si confianza < 3 -> Sugerir ejercicio X").

### Step 4: UI Components
- Crear `src/components/PlayerForm.tsx`: Componente con sliders o radio buttons para la autoevaluación.
- Crear `src/components/PsychologistForm.tsx`: Componente con checkboxes clasificados por área.
- Crear `src/components/ResultsDisplay.tsx`: Componente que recibe la lista de "Next Steps" y los renderiza de forma clara.

### Step 5: Main Page Integration & State
- Actualizar `src/app/page.tsx` para coordinar el estado de la aplicación (usando `useState`).
- Crear un flujo sencillo: Mostrar el formulario y, al hacer "Submit", ocultar el formulario y mostrar el componente de resultados con los next steps generados.

### Step 6: Documentation (README)
- Crear/Actualizar el archivo `README.md` en la raíz del repositorio.
- Incluir la descripción del MVP.
- Proveer instrucciones claras sobre cómo instalar dependencias (`npm install`) y cómo correr el servidor de desarrollo (`npm run dev`).

## Verification & Testing
- Verificar que la inicialización del proyecto no afecte la carpeta `conductor/`.
- Ejecutar el entorno de desarrollo y comprobar que no hay errores de TypeScript o Linting.
- Interactuar con el formulario y validar que los estados cambien.
- Confirmar que las reglas de recomendación devuelven los strings esperados según las combinaciones ingresadas.

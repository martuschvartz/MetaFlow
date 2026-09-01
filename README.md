# MetaFlow - Volley Performance & Emotional Tracker (MVP)

MetaFlow es una plataforma web interactiva diseñada para el seguimiento integral (técnico, emocional y psicológico) de jugadoras de voleibol. Este MVP facilita la co-creación de diagnósticos e intervenciones inmediatas mediante la colaboración entre la jugadora de voley y el psicólogo deportivo.

Este proyecto ha sido estructurado y desplegado siguiendo la metodología ágil de **Conductor**, y está preparado para ser alojado directamente en **Vercel** con futura integración nativa hacia **Supabase**.

---

## 🚀 Características del MVP Core

1. **Autoevaluación de la Jugadora:**
   - Métricas continuas en sliders (escala 1-5) para medir **Estado de Flow**, **Nivel de Activación/Nervios**, **Confianza** y **Presión Percibida**.
   - Identificación cualitativa del **Diálogo Interno** (positivo, neutro o negativo).

2. **Evaluación Clínica Profesional:**
   - Panel de control para el Psicólogo Deportivo dividido en dos dimensiones:
     - **Conceptos en alerta o intervención:** Identificación de áreas críticas a resolver (TCC, Logoterapia, Kinesiología, etc.).
     - **Fortalezas consolidadas:** Reconocimiento de pilares estables sobre los cuales apalancar el entrenamiento mental.

3. **Motor de Recomendaciones Estáticas:**
   - Algoritmo en TypeScript (`src/utils/recommendations.ts`) que procesa las variables cargadas y deduce de manera lógica y científica un plan de acción concreto con "Next Steps" aplicables para el siguiente entrenamiento o partido.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Biblioteca:** [React 19+](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)

---

## 📦 Instalación y Configuración Local

Sigue estos sencillos pasos para iniciar MetaFlow en tu entorno local:

### 1. Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendado) y `npm`.

### 2. Instalar Dependencias
Desde la raíz del proyecto, ejecuta el siguiente comando:
```bash
npm install
```

### 3. Ejecutar el Servidor de Desarrollo
Inicia el entorno local de pruebas ejecutando:
```bash
npm run dev
```

La aplicación estará disponible en tu navegador en [http://localhost:3000](http://localhost:3000).

### 4. Compilar para Producción (Build)
Para probar la compilación estática que utilizará Vercel para el despliegue final:
```bash
npm run build
```

---

## 📂 Arquitectura del Código

La estructura de archivos de la aplicación sigue los estándares modernos de Next.js App Router:

```text
MetaFlow/
├── conductor/               # Configuración y especificaciones del producto (Tracks)
├── public/                  # Archivos y recursos estáticos
└── src/
    ├── app/
    │   ├── globals.css      # Estilos e importación de Tailwind CSS
    │   ├── layout.tsx       # Estructura HTML común de la app
    │   └── page.tsx         # Coordinador principal de estado y vista (Formulario y Resultados)
    ├── components/
    │   ├── PlayerForm.tsx   # Formulario interactivo para la jugadora
    │   ├── PsychologistForm.tsx # Panel de checklists profesionales
    │   └── ResultsDisplay.tsx # Renderizador del plan de acción final
    ├── types/
    │   └── assessment.ts    # Definiciones e interfaces de TypeScript
    └── utils/
        └── recommendations.ts # Algoritmo y motor de reglas para "Next Steps"
```

---

## 📈 Próximos Pasos (Próximos Tracks)
- **Track 02 - Base de Datos & Auth (Supabase):** Implementación del login de usuarios para separar el rol de la jugadora y del psicólogo, persistiendo los datos históricos en PostgreSQL.
- **Track 03 - Dashboard Histórico:** Visualización gráfica de la evolución del estado de flow y correlaciones técnicas a lo largo del tiempo.

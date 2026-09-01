# MetaFlow - Volley Performance & Emotional Tracker (MVP)

MetaFlow es una plataforma web interactiva diseñada para el seguimiento integral (técnico, emocional y psicológico) de jugadoras de voleibol. Este MVP facilita la co-creación de diagnósticos e intervenciones inmediatas mediante la colaboración entre la jugadora de voley y el psicólogo deportivo.

Este proyecto ha sido estructurado y desplegado siguiendo la metodología ágil de **Conductor**, y está preparado para ser alojado directamente en **Vercel** con futura integración nativa hacia **Supabase**.

---

## 🚀 Características del MVP Core

1. **Estructura de Ruteo Completa (Scaffolding)**:
   - `/login`: Pantalla de autenticación clínica mockeada para simular el acceso seguro.
   - `/dashboard`: Panel central con KPIs, resúmenes del plantel, alertas críticas y accesos rápidos.
   - `/players`: Listado interactivo de jugadoras con filtros por nombre o posición de juego.
   - `/players/[id]`: Perfil individualizado con historial de sesiones previas, métricas de flow y recomendaciones de cada período.
   - `/assessment/new`: Formulario unificado de carga para registrar nuevas evaluaciones.

2. **Autoevaluación de la Jugadora:**
   - Métricas continuas en sliders (escala 1-5) para medir **Estado de Flow**, **Nivel de Activación/Nervios**, **Confianza** y **Presión Percibida**.
   - Identificación cualitativa del **Diálogo Interno** (positivo, neutro o negativo).

3. **Evaluación Clínica Profesional:**
   - Panel de control para el Psicólogo Deportivo dividido en dos dimensiones:
     - **Conceptos en alerta o intervención:** Identificación de áreas críticas a resolver (TCC, Logoterapia, Kinesiología, etc.).
     - **Fortalezas consolidadas:** Reconocimiento de pilares estables sobre los cuales apalancar el entrenamiento mental.

4. **Motor de Recomendaciones Estáticas:**
   - Algoritmo en TypeScript (`src/utils/recommendations.ts`) que procesa las variables cargadas y deduce de manera lógica y científica un plan de acción concreto con "Next Steps" aplicables para el siguiente entrenamiento o partido.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Biblioteca:** [React 19+](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Librería de Componentes y UI:** [Material UI (MUI) v6](https://mui.com/material-ui/) + [Emotion](https://emotion.sh/) + `@mui/material-nextjs` para cacheado óptimo de estilos en App Router.

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
    │   ├── assessment/
    │   │   └── new/
    │   │       └── page.tsx # Pantalla del formulario unificado principal
    │   │   ├── dashboard/
    │   │   │   └── page.tsx # Panel de control, KPIs y alertas de jugadoras
    │   │   ├── login/
    │   │   │   └── page.tsx # Pantalla de inicio de sesión mockeada
    │   │   ├── players/
    │   │   │   ├── [id]/
    │   │   │   │   └── page.tsx # Historial de sesiones y evolución por jugadora
    │   │   │   └── page.tsx # Listado completo con buscador y estado clínico
    │   ├── globals.css      # Estilos e importaciones globales
    │   ├── layout.tsx       # Estructura global y envoltura de ThemeProvider/CssBaseline
    │   └── page.tsx         # Redirección por defecto a /login
    ├── components/
    │   ├── Navigation.tsx   # Barra de navegación receptiva (Header + Drawer)
    │   ├── PlayerForm.tsx   # Formulario interactivo para la jugadora (MUI)
    │   ├── PsychologistForm.tsx # Checklists profesionales del psicólogo (MUI)
    │   └── ResultsDisplay.tsx # Renderizador estético del plan de acción final (MUI)
    ├── types/
    │   └── assessment.ts    # Definiciones e interfaces de TypeScript
    ├── utils/
    │   └── recommendations.ts # Algoritmo y motor de reglas para "Next Steps"
    └── theme.ts             # Definición de paleta de colores y tipografías (MUI Theme)
```

---

## 📈 Próximos Pasos (Próximos Tracks)
- **Track 02 - Base de Datos & Auth (Supabase):** Implementación del login de usuarios para separar el rol de la jugadora y del psicólogo, persistiendo los datos históricos en PostgreSQL.
- **Track 03 - Dashboard Histórico:** Visualización gráfica de la evolución del estado de flow y correlaciones técnicas a lo largo del tiempo.

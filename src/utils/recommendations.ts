import { PlayerAssessment, PsychologistAssessment } from '../types/assessment';

export function generateNextSteps(
  player: PlayerAssessment,
  psych: PsychologistAssessment
): string[] {
  const steps: string[] = [];

  // --- Reglas basadas en la autoevaluación del jugador ---
  
  // Confianza
  if (player.confidence < 3) {
    steps.push('Foco en micro-objetivos: Establecer metas ultra-específicas y controlables en los entrenamientos (ej. efectividad de saque, no el resultado del partido).');
    if (psych.observedCBT) {
      steps.push('Trabajo Cognitivo-Conductual: Implementar reestructuración de pensamientos limitantes identificados con el psicólogo.');
    }
  } else if (player.confidence >= 4 && psych.strengthPsychology) {
    steps.push('Anclaje de confianza: Registrar los aciertos y sensaciones corporales de hoy para usarlos como referencia mental futura.');
  }

  // Activación (Nivel de Nivel de Nervios / Alerta)
  if (player.activation >= 4) {
    steps.push('Técnica de desactivación: Aplicar respiración diafragmática profunda (relación 4-2-8 segundos) antes de entrar a la cancha para regular el ritmo cardíaco.');
  } else if (player.activation <= 2) {
    steps.push('Técnica de activación psicofísica: Realizar saltos cortos, aplausos y auto-charla enérgica para elevar el nivel de alerta y salir de la zona de apatía.');
  }

  // Presión Percibida
  if (player.pressure >= 4) {
    steps.push('Control de variables: Concentrarse únicamente en lo que está bajo el control directo de la jugadora (esfuerzo, actitud, comunicación) e ignorar el público o los árbitros.');
    if (psych.observedLogotherapy) {
      steps.push('Perspectiva existencial (Logoterapia): Recordar el propósito de jugar (el disfrute del juego en sí) restándole peso absoluto al resultado externo.');
    }
  }

  // Estado de Flow
  if (player.flow < 3) {
    steps.push('Foco atencional: Reducir la sobre-analización técnica. Buscar centrar la atención en estímulos externos relevantes (la costura de la pelota, el movimiento de la defensa).');
    if (psych.observedFlow) {
      steps.push('Rutina pre-ejecución: Diseñar una secuencia corta de 3 pasos físicos y mentales antes de cada saque para inducir el ingreso automático al estado de flow.');
    }
  }

  // Diálogo Interno
  if (player.selfTalk === 'negativo') {
    steps.push('Uso de palabras gatillo (Stop-Thinking): Al detectar diálogo interno negativo, utilizar un comando físico (ej. tocarse la rodillera) e interno ("¡Basta!") para cambiar a una frase constructiva corta.');
  }

  // --- Reglas basadas exclusivamente en la evaluación del Psicólogo ---
  
  if (psych.observedKinesiology) {
    steps.push('Atención Kine-Deportológica: Priorizar la rutina de movilidad preventiva y activación articular de hombros/rodillas previa a los saltos.');
  }
  
  if (psych.strengthCBT) {
    steps.push('Refuerzo de fortalezas: Continuar potenciando el auto-registro positivo y el diario de entrenamiento cognitivo ya implementados.');
  }

  if (psych.strengthLogotherapy) {
    steps.push('Espacio de valores: Utilizar la fortaleza encontrada en sus valores fundamentales para liderar al equipo y sostener los momentos de adversidad.');
  }

  // Fallback si no se activa ninguna regla (situación ideal de equilibrio)
  if (steps.length === 0) {
    steps.push('Mantener consistencia: El estado actual es altamente equilibrado. Continuar registrando tus sensaciones y rutinas actuales sin alteraciones.');
  }

  return steps;
}

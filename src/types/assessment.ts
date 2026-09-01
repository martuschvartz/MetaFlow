export interface PlayerAssessment {
  flow: number; // 1-5
  activation: number; // 1-5 (nervios/activación)
  confidence: number; // 1-5
  pressure: number; // 1-5
  selfTalk: 'positivo' | 'negativo' | 'neutro'; // diálogo interno predominante
}

export interface PsychologistAssessment {
  observedPsychology: boolean;
  observedFlow: boolean;
  observedLogotherapy: boolean;
  observedCBT: boolean; // Cognitivo Conductual
  observedKinesiology: boolean; // Deportología / Traumatología / Kinesiología

  strengthPsychology: boolean;
  strengthFlow: boolean;
  strengthLogotherapy: boolean;
  strengthCBT: boolean;
  strengthKinesiology: boolean;
}

export interface FullAssessment {
  id: string;
  date: string;
  playerName: string;
  playerData: PlayerAssessment;
  psychologistData: PsychologistAssessment;
  recommendations: string[];
}

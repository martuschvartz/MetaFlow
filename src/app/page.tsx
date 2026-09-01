'use client';

import React, { useState } from 'react';
import PlayerForm from '../components/PlayerForm';
import PsychologistForm from '../components/PsychologistForm';
import ResultsDisplay from '../components/ResultsDisplay';
import { PlayerAssessment, PsychologistAssessment } from '../types/assessment';
import { generateNextSteps } from '../utils/recommendations';

const initialPlayerState: PlayerAssessment = {
  flow: 3,
  activation: 3,
  confidence: 3,
  pressure: 3,
  selfTalk: 'neutro',
};

const initialPsychState: PsychologistAssessment = {
  observedPsychology: false,
  observedFlow: false,
  observedLogotherapy: false,
  observedCBT: false,
  observedKinesiology: false,
  
  strengthPsychology: false,
  strengthFlow: false,
  strengthLogotherapy: false,
  strengthCBT: false,
  strengthKinesiology: false,
};

export default function Home() {
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState<PlayerAssessment>(initialPlayerState);
  const [psychData, setPsychData] = useState<PsychologistAssessment>(initialPsychState);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const steps = generateNextSteps(playerData, psychData);
    setRecommendations(steps);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setPlayerName('');
    setPlayerData(initialPlayerState);
    setPsychData(initialPsychState);
    setRecommendations([]);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 font-sans pb-16">
      {/* Navbar de la App */}
      <header className="bg-white border-b border-zinc-200 py-4 px-6 sticky top-0 z-50 shadow-xs">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-br from-teal-500 to-indigo-700 text-white font-black text-sm h-8 w-8 flex items-center justify-center rounded-lg shadow-md">
              MF
            </span>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-zinc-950 to-zinc-700 bg-clip-text text-transparent">
              MetaFlow <span className="text-teal-600 font-medium text-xs">Volley MVP</span>
            </span>
          </div>
          <div className="text-xs bg-zinc-100 text-zinc-600 font-bold px-3 py-1.5 rounded-full border border-zinc-200">
            Fase: Piloto Clínico
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Banner Informativo */}
            <div className="bg-gradient-to-br from-zinc-900 to-indigo-950 text-white p-8 rounded-3xl shadow-xl space-y-3 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10 scale-150">
                <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <span className="bg-teal-500/20 text-teal-300 text-[10px] font-black tracking-widest uppercase py-1 px-2.5 rounded-full border border-teal-500/30">
                Seguimiento Multidisciplinar
              </span>
              <h1 className="text-3xl font-black tracking-tight leading-tight">
                Carga de Sesión y Diagnóstico de Rendimiento
              </h1>
              <p className="text-zinc-300 text-sm max-w-2xl leading-relaxed">
                Completa los datos de percepción subjetiva de la jugadora y el análisis clínico estructurado del psicólogo deportivo para generar un plan de acción inmediato enfocado en optimizar el estado de flow en la cancha.
              </p>
            </div>

            {/* Datos Generales */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-4">
              <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Información Básica</h2>
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase">Nombre de la Jugadora</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Martina Schvartz"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-semibold"
                />
              </div>
            </div>

            {/* Formulario Jugadora */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
              <PlayerForm data={playerData} onChange={setPlayerData} />
            </div>

            {/* Formulario Psicólogo */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
              <PsychologistForm data={psychData} onChange={setPsychData} />
            </div>

            {/* Botón Guardar / Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-600 to-indigo-700 hover:from-teal-700 hover:to-indigo-850 text-white font-bold text-sm py-4 px-8 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Generar Plan de Acción e Indicaciones →
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-xs">
            <ResultsDisplay
              playerName={playerName}
              playerData={playerData}
              psychData={psychData}
              recommendations={recommendations}
              onReset={handleReset}
            />
          </div>
        )}
      </main>
    </div>
  );
}

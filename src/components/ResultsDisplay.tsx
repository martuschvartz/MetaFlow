import React from 'react';
import { PlayerAssessment, PsychologistAssessment } from '../types/assessment';

interface ResultsDisplayProps {
  playerName: string;
  playerData: PlayerAssessment;
  psychData: PsychologistAssessment;
  recommendations: string[];
  onReset: () => void;
}

export default function ResultsDisplay({
  playerName,
  playerData,
  psychData,
  recommendations,
  onReset,
}: ResultsDisplayProps) {
  // Helpers para dar estilo a los puntajes
  const getScoreColor = (value: number) => {
    if (value >= 4) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (value >= 3) return 'bg-amber-100 text-amber-800 border-amber-200';
    return 'bg-rose-100 text-rose-800 border-rose-200';
  };

  // Convertimos las fortalezas/observados a listas legibles para el reporte
  const getActiveObservations = () => {
    const list = [];
    if (psychData.observedPsychology) list.push('Psicología del Deporte');
    if (psychData.observedFlow) list.push('Estado de Flow');
    if (psychData.observedLogotherapy) list.push('Logoterapia');
    if (psychData.observedCBT) list.push('TCC (Cognitivo Conductual)');
    if (psychData.observedKinesiology) list.push('Deportología / Kinesiología');
    return list;
  };

  const getActiveStrengths = () => {
    const list = [];
    if (psychData.strengthPsychology) list.push('Psicología del Deporte');
    if (psychData.strengthFlow) list.push('Estado de Flow');
    if (psychData.strengthLogotherapy) list.push('Logoterapia');
    if (psychData.strengthCBT) list.push('TCC (Cognitivo Conductual)');
    if (psychData.strengthKinesiology) list.push('Deportología / Kinesiología');
    return list;
  };

  const activeObs = getActiveObservations();
  const activeStrengths = getActiveStrengths();

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Encabezado del Reporte */}
      <div className="bg-gradient-to-r from-teal-800 to-indigo-900 text-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="text-teal-200 text-xs font-bold tracking-widest uppercase">Reporte Generado</span>
          <h2 className="text-2xl font-black mt-1">{playerName || 'Jugadora de Volley'}</h2>
          <p className="text-zinc-300 text-xs mt-1">
            Fecha de análisis: {new Date().toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <button
          onClick={onReset}
          className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 px-4 rounded-xl border border-white/20 transition-all self-start md:self-auto"
        >
          ← Cargar Nuevo Diagnóstico
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Panel Izquierdo: Resumen Jugadora */}
        <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100 space-y-4 md:col-span-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Métricas Emocionales</h3>
          
          <div className="space-y-3">
            {[
              { label: 'Flow', val: playerData.flow },
              { label: 'Activación / Nervios', val: playerData.activation },
              { label: 'Confianza', val: playerData.confidence },
              { label: 'Presión Percibida', val: playerData.pressure },
            ].map((metric) => (
              <div key={metric.label} className="flex justify-between items-center bg-white p-3 rounded-xl border border-zinc-100">
                <span className="text-xs font-semibold text-zinc-700">{metric.label}</span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getScoreColor(metric.val)}`}>
                  {metric.val} / 5
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white p-3 rounded-xl border border-zinc-100 space-y-1">
            <span className="text-[11px] font-bold text-zinc-400 block uppercase">Diálogo Interno</span>
            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase ${
              playerData.selfTalk === 'positivo'
                ? 'bg-emerald-100 text-emerald-800'
                : playerData.selfTalk === 'negativo'
                ? 'bg-rose-100 text-rose-800'
                : 'bg-zinc-100 text-zinc-800'
            }`}>
              {playerData.selfTalk}
            </span>
          </div>
        </div>

        {/* Panel Central: Resumen Psicólogo */}
        <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100 space-y-4 md:col-span-2 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Diagnóstico Profesional</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Conceptos en alerta */}
              <div className="bg-white p-4 rounded-xl border border-zinc-100 space-y-2">
                <span className="text-xs font-bold text-sky-800 block border-b pb-1">Conceptos Observados</span>
                {activeObs.length > 0 ? (
                  <ul className="space-y-1 text-xs text-zinc-700 list-disc list-inside">
                    {activeObs.map((obs) => (
                      <li key={obs}>{obs}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-zinc-400 italic">Ningún concepto en alerta observado.</p>
                )}
              </div>

              {/* Fortalezas */}
              <div className="bg-white p-4 rounded-xl border border-zinc-100 space-y-2">
                <span className="text-xs font-bold text-emerald-800 block border-b pb-1">Fortalezas Identificadas</span>
                {activeStrengths.length > 0 ? (
                  <ul className="space-y-1 text-xs text-zinc-700 list-disc list-inside">
                    {activeStrengths.map((st) => (
                      <li key={st}>{st}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-zinc-400 italic">No se marcaron fortalezas consolidadas.</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 text-[11px] text-amber-800 leading-relaxed mt-4">
            <strong>Nota metodológica:</strong> Los siguientes pasos se basan en una correlación de reglas estáticas validadas desde la psicología del deporte (TCC, Logoterapia, Flow) y la deportología médica aplicada al voleibol.
          </div>
        </div>
      </div>

      {/* Resultados Accionables: Next Steps */}
      <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm space-y-4">
        <div className="border-b border-zinc-100 pb-3">
          <h3 className="text-lg font-extrabold text-zinc-800 flex items-center gap-2">
            🚀 Plan de Acción e Indicaciones Recomendadas
          </h3>
          <p className="text-xs text-zinc-500">Sugerencias concretas para aplicar en el próximo entrenamiento y sesión.</p>
        </div>

        <div className="grid gap-3">
          {recommendations.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start bg-zinc-50 p-4 rounded-xl border-l-4 border-emerald-500 hover:bg-zinc-100/50 transition-all gap-3"
            >
              <span className="flex items-center justify-center bg-emerald-100 text-emerald-800 font-bold text-xs h-6 w-6 rounded-full shrink-0">
                {idx + 1}
              </span>
              <p className="text-sm font-medium text-zinc-800 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

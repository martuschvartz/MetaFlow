import React from 'react';
import { PlayerAssessment } from '../types/assessment';

interface PlayerFormProps {
  data: PlayerAssessment;
  onChange: (data: PlayerAssessment) => void;
}

export default function PlayerForm({ data, onChange }: PlayerFormProps) {
  const handleChange = (field: keyof PlayerAssessment, value: any) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const sliders = [
    {
      field: 'flow' as const,
      label: 'Estado de Flow / Fluidez',
      description: 'Nivel de inmersión y disfrute automático en el juego.',
      minLabel: 'Muy trabada / Pensando demasiado',
      maxLabel: 'Fluyendo sin pensar / Disfrute total',
    },
    {
      field: 'activation' as const,
      label: 'Estado de Activación / Nivel de Alerta',
      description: 'Nivel de nerviosismo y energía corporal percibidos.',
      minLabel: 'Muy apática / Floja de energía',
      maxLabel: 'Extremadamente nerviosa / Sobreactivada',
    },
    {
      field: 'confidence' as const,
      label: 'Confianza Personal',
      description: 'Grado de seguridad para tomar decisiones y ejecutar acciones técnicas.',
      minLabel: 'Insegura / Temor al error',
      maxLabel: 'Seguridad absoluta / Líder de juego',
    },
    {
      field: 'pressure' as const,
      label: 'Presión Percibida',
      description: 'Sensación de peso externo por el resultado, público o cuerpo técnico.',
      minLabel: 'Cero presión / Relajada',
      maxLabel: 'Presión asfixiante / Tensión alta',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-zinc-200 pb-3">
        <h2 className="text-xl font-bold text-emerald-700">1. Autoevaluación de la Jugadora</h2>
        <p className="text-sm text-zinc-500">Métricas graduales de percepción subjetiva y estado psicológico actual.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sliders.map(({ field, label, description, minLabel, maxLabel }) => (
          <div key={field} className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <label className="block text-sm font-semibold text-zinc-800">{label}</label>
                <span className="text-[11px] text-zinc-500 leading-tight block">{description}</span>
              </div>
              <span className="bg-emerald-100 text-emerald-800 font-bold text-sm px-3 py-1 rounded-full border border-emerald-200">
                {data[field]}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={data[field]}
              onChange={(e) => handleChange(field, parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div className="flex justify-between text-[10px] text-zinc-500 font-medium">
              <span className="max-w-[120px]">{minLabel}</span>
              <span className="max-w-[120px] text-right">{maxLabel}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Diálogo interno select */}
      <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-3">
        <div>
          <label className="block text-sm font-semibold text-zinc-800">Diálogo Interno Predominante</label>
          <span className="text-[11px] text-zinc-500 block">¿Cómo son tus pensamientos o conversaciones internas en la cancha hoy?</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {(['positivo', 'neutro', 'negativo'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleChange('selfTalk', type)}
              className={`py-3 px-4 rounded-lg text-xs font-semibold border transition-all text-center capitalize ${
                data.selfTalk === type
                  ? type === 'positivo'
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                    : type === 'neutro'
                    ? 'bg-zinc-700 border-zinc-700 text-white shadow-sm'
                    : 'bg-rose-600 border-rose-600 text-white shadow-sm'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

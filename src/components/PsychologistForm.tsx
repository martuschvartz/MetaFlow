import React from 'react';
import { PsychologistAssessment } from '../types/assessment';

interface PsychologistFormProps {
  data: PsychologistAssessment;
  onChange: (data: PsychologistAssessment) => void;
}

export default function PsychologistForm({ data, onChange }: PsychologistFormProps) {
  const handleToggle = (field: keyof PsychologistAssessment) => {
    onChange({
      ...data,
      [field]: !data[field],
    });
  };

  const categories = [
    {
      id: 'Psychology' as const,
      name: 'Psicología del Deporte',
      desc: 'Herramientas mentales genéricas de alto rendimiento.',
    },
    {
      id: 'Flow' as const,
      name: 'Estado de Flow',
      desc: 'Habilidad de inmersión y piloto automático positivo.',
    },
    {
      id: 'Logotherapy' as const,
      name: 'Logoterapia Deportiva',
      desc: 'Enfoque de sentido, valores y motivación existencial.',
    },
    {
      id: 'CBT' as const,
      name: 'TCC (Cognitivo Conductual)',
      desc: 'Gestión de pensamientos, creencias y autodiálogo.',
    },
    {
      id: 'Kinesiology' as const,
      name: 'Deportología / Kinesiología',
      desc: 'Aspectos físicos, prevención de lesiones e integridad física.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-zinc-200 pb-3">
        <h2 className="text-xl font-bold text-sky-700">2. Evaluación Profesional (Psicólogo)</h2>
        <p className="text-sm text-zinc-500">Evaluación experta de aspectos deportivos, kinesiológicos y marcos psicológicos.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Columna 1: Conceptos Observados */}
        <div className="space-y-4">
          <div className="bg-sky-50 p-3 rounded-lg border border-sky-100">
            <h3 className="text-sm font-bold text-sky-800">Conceptos en Alerta o Intervención</h3>
            <p className="text-[11px] text-sky-600">Áreas que requieren atención inmediata o técnicas específicas.</p>
          </div>
          
          <div className="space-y-3">
            {categories.map((cat) => {
              const fieldKey = `observed${cat.id}` as keyof PsychologistAssessment;
              return (
                <label
                  key={`obs-${cat.id}`}
                  className={`flex items-start p-4 rounded-xl border cursor-pointer transition-all ${
                    data[fieldKey]
                      ? 'bg-sky-50/50 border-sky-300 text-sky-950'
                      : 'bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-700'
                  }`}
                >
                  <div className="flex items-center h-5 mr-3">
                    <input
                      type="checkbox"
                      checked={data[fieldKey]}
                      onChange={() => handleToggle(fieldKey)}
                      className="w-4 h-4 text-sky-600 border-zinc-300 rounded focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold">{cat.name}</span>
                    <span className="text-[11px] text-zinc-500 leading-tight block mt-0.5">{cat.desc}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Columna 2: Fortalezas Observadas */}
        <div className="space-y-4">
          <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
            <h3 className="text-sm font-bold text-emerald-800">Fortalezas Consolidadas</h3>
            <p className="text-[11px] text-emerald-600">Áreas fuertes sobre las cuales apalancar o generar resiliencia.</p>
          </div>

          <div className="space-y-3">
            {categories.map((cat) => {
              const fieldKey = `strength${cat.id}` as keyof PsychologistAssessment;
              return (
                <label
                  key={`str-${cat.id}`}
                  className={`flex items-start p-4 rounded-xl border cursor-pointer transition-all ${
                    data[fieldKey]
                      ? 'bg-emerald-50/50 border-emerald-300 text-emerald-950'
                      : 'bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-700'
                  }`}
                >
                  <div className="flex items-center h-5 mr-3">
                    <input
                      type="checkbox"
                      checked={data[fieldKey]}
                      onChange={() => handleToggle(fieldKey)}
                      className="w-4 h-4 text-emerald-600 border-zinc-300 rounded focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold">{cat.name}</span>
                    <span className="text-[11px] text-zinc-500 leading-tight block mt-0.5">{cat.desc}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

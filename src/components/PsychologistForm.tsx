'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  Alert,
} from '@mui/material';
import { PsychologistAssessment } from '../types/assessment';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 2 }}>
        <Typography variant="h5" color="secondary.main" sx={{ fontWeight: 800 }}>
          2. Evaluación Profesional (Psicólogo)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Evaluación experta de aspectos deportivos, kinesiológicos y marcos psicológicos.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Columna 1: Conceptos Observados (Alertas) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Alert
            severity="warning"
            icon={<WarningAmberIcon />}
            sx={{
              mb: 3,
              borderRadius: 3,
              bgcolor: 'rgba(237, 108, 2, 0.05)',
              color: 'warning.dark',
              border: '1px solid rgba(237, 108, 2, 0.1)',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
              Conceptos en Alerta o Intervención
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', fontWeight: 'normal', color: 'text.secondary', mt: 0.5 }}>
              Áreas que requieren atención inmediata o técnicas específicas.
            </Typography>
          </Alert>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {categories.map((cat) => {
              const fieldKey = `observed${cat.id}` as keyof PsychologistAssessment;
              const isChecked = data[fieldKey];
              return (
                <Card
                  key={`obs-${cat.id}`}
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    borderColor: isChecked ? 'warning.main' : 'divider',
                    bgcolor: isChecked ? 'rgba(237, 108, 2, 0.02)' : 'background.paper',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: 'warning.light',
                      bgcolor: 'rgba(237, 108, 2, 0.01)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isChecked}
                          onChange={() => handleToggle(fieldKey)}
                          color="warning"
                          sx={{ p: 1 }}
                        />
                      }
                      label={
                        <Box sx={{ ml: 0.5 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                            {cat.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.2 }}>
                            {cat.desc}
                          </Typography>
                        </Box>
                      }
                      sx={{ m: 0, width: '100%', alignItems: 'flex-start' }}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Grid>

        {/* Columna 2: Fortalezas Consolidadas */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Alert
            severity="success"
            icon={<StarBorderIcon />}
            sx={{
              mb: 3,
              borderRadius: 3,
              bgcolor: 'rgba(46, 125, 50, 0.05)',
              color: 'success.dark',
              border: '1px solid rgba(46, 125, 50, 0.1)',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: '700' }}>
              Fortalezas Consolidadas
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', fontWeight: 'normal', color: 'text.secondary', mt: 0.5 }}>
              Áreas fuertes sobre las cuales apalancar o generar resiliencia.
            </Typography>
          </Alert>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {categories.map((cat) => {
              const fieldKey = `strength${cat.id}` as keyof PsychologistAssessment;
              const isChecked = data[fieldKey];
              return (
                <Card
                  key={`str-${cat.id}`}
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    borderColor: isChecked ? 'success.main' : 'divider',
                    bgcolor: isChecked ? 'rgba(46, 125, 50, 0.02)' : 'background.paper',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: 'success.light',
                      bgcolor: 'rgba(46, 125, 50, 0.01)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isChecked}
                          onChange={() => handleToggle(fieldKey)}
                          color="success"
                          sx={{ p: 1 }}
                        />
                      }
                      label={
                        <Box sx={{ ml: 0.5 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                            {cat.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.2 }}>
                            {cat.desc}
                          </Typography>
                        </Box>
                      }
                      sx={{ m: 0, width: '100%', alignItems: 'flex-start' }}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

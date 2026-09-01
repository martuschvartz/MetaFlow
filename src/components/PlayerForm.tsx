'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Slider,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from '@mui/material';
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 2 }}>
        <Typography variant="h5" color="primary.main" sx={{ fontWeight: 800 }}>
          1. Autoevaluación de la Jugadora
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Métricas graduales de percepción subjetiva y estado psicológico actual.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {sliders.map(({ field, label, description, minLabel, maxLabel }) => (
          <Grid size={{ xs: 12, md: 6 }} key={field}>
            <Card variant="outlined" sx={{ borderRadius: 3, p: 1, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
              <CardContent sx={{ '&:last-child': { pb: 2 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ pr: 2 }}>
                    <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 700 }}>
                      {label}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.2, mt: 0.5 }}>
                      {description}
                    </Typography>
                  </Box>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: 'primary.light',
                      color: 'white',
                      fontSize: '0.875rem',
                      px: 2,
                      py: 0.5,
                      borderRadius: 4,
                      fontWeight: 'bold'
                    }}
                  >
                    {data[field]} / 5
                  </Paper>
                </Box>

                <Box sx={{ px: 1, py: 1 }}>
                  <Slider
                    value={data[field]}
                    min={1}
                    max={5}
                    step={1}
                    marks
                    onChange={(_, val) => handleChange(field, val as number)}
                    color="primary"
                    sx={{
                      height: 6,
                      '& .MuiSlider-thumb': {
                        width: 18,
                        height: 18,
                        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                          boxShadow: 'inherit',
                        },
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ maxWidth: '45%' }}>
                    {minLabel}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ maxWidth: '45%', textAlign: 'right' }}>
                    {maxLabel}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Diálogo Interno */}
      <Card variant="outlined" sx={{ borderRadius: 3, p: 1, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
        <CardContent sx={{ '&:last-child': { pb: 2 } }}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend" sx={{ mb: 1 }}>
              <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 700 }}>
                Diálogo Interno Predominante
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.2 }}>
                ¿Cómo son tus pensamientos o conversaciones internas en la cancha hoy?
              </Typography>
            </FormLabel>
            <RadioGroup
              row
              value={data.selfTalk}
              onChange={(e) => handleChange('selfTalk', e.target.value)}
              sx={{ gap: 2, mt: 1 }}
            >
              {[
                { value: 'positivo', label: 'Positivo (Constructivo / Enfoque)', color: '#10b981' },
                { value: 'neutro', label: 'Neutro (Táctico / Descriptivo)', color: '#6b7280' },
                { value: 'negativo', label: 'Negativo (Auto-crítica / Limitante)', color: '#ef4444' },
              ].map((item) => (
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  control={<Radio />}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                        {item.value}
                      </Typography>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: item.color }} />
                    </Box>
                  }
                  sx={{
                    flexGrow: 1,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: data.selfTalk === item.value ? 'primary.main' : 'divider',
                    borderRadius: 3,
                    p: 1.5,
                    m: 0,
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: 'primary.light',
                      bgcolor: 'rgba(15, 118, 110, 0.02)',
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}

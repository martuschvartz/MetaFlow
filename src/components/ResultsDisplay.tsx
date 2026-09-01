'use client';

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';
import { PlayerAssessment, PsychologistAssessment } from '../types/assessment';
import {
  ArrowBack as ArrowBackIcon,
  CheckCircleOutlined as CheckCircleOutlineIcon,
  LibraryBooks as LibraryBooksIcon
} from '@mui/icons-material';

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

  const getMetricColor = (val: number, isLowerBetter = false) => {
    if (isLowerBetter) {
      if (val <= 2) return 'success';
      if (val <= 4) return 'warning';
      return 'error';
    } else {
      if (val >= 4) return 'success';
      if (val >= 3) return 'warning';
      return 'error';
    }
  };

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

  const formattedDate = new Date().toLocaleDateString('es-AR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Banner Encabezado */}
      <Paper
        sx={{
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #0f766e 0%, #4f46e5 100%)',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 3,
          boxShadow: '0 8px 24px rgba(15, 118, 110, 0.15)'
        }}
      >
        <Box>
          <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 2, fontWeight: 'bold', opacity: 0.8 }}>
            Reporte de Sesión Generado
          </Typography>
          <Typography variant="h4" sx={{ mt: 0.5, mb: 1, fontWeight: 900 }}>
            {playerName || 'Jugadora de Vóley'}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Fecha de diagnóstico: <Box component="span" sx={{ textTransform: 'capitalize' }}>{formattedDate}</Box>
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={onReset}
          startIcon={<ArrowBackIcon />}
          sx={{
            bgcolor: 'rgba(255,255,255,0.15)',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: 2.5,
            border: '1px solid rgba(255,255,255,0.2)',
            py: 1,
            px: 2,
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.25)',
              borderColor: 'white'
            }
          }}
        >
          Nueva Evaluación
        </Button>
      </Paper>

      <Grid container spacing={4}>
        {/* Columna Izquierda: Percepción de la Jugadora */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card variant="outlined" sx={{ borderRadius: 3, p: 1, height: '100%', borderColor: 'divider' }}>
            <CardContent>
              <Typography variant="subtitle1" color="primary.dark" sx={{ mb: 2, fontWeight: 800 }}>
                Sensaciones de la Jugadora
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { label: 'Flow / Fluidez', val: playerData.flow, isLower: false },
                  { label: 'Activación / Nervios', val: playerData.activation, isLower: true },
                  { label: 'Confianza', val: playerData.confidence, isLower: false },
                  { label: 'Presión Percibida', val: playerData.pressure, isLower: true },
                ].map((metric) => (
                  <Box
                    key={metric.label}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      bgcolor: 'background.default',
                      p: 2,
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {metric.label}
                    </Typography>
                    <Chip
                      label={`${metric.val} / 5`}
                      size="small"
                      color={getMetricColor(metric.val, metric.isLower)}
                      sx={{ fontWeight: 'bold' }}
                    />
                  </Box>
                ))}

                <Box
                  sx={{
                    bgcolor: 'background.default',
                    p: 2,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    mt: 1
                  }}
                >
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 'bold', textTransform: 'uppercase', mb: 0.5 }}>
                    DIÁLOGO INTERNO
                  </Typography>
                  <Chip
                    label={playerData.selfTalk}
                    color={
                      playerData.selfTalk === 'positivo'
                        ? 'success'
                        : playerData.selfTalk === 'negativo'
                        ? 'error'
                        : 'default'
                    }
                    sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Columna Derecha: Observaciones Clínicas y Next Steps */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Próximos Pasos (Next Steps) - Bloque Central */}
            <Card
              sx={{
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'rgba(79, 70, 229, 0.2)',
                bgcolor: 'rgba(79, 70, 229, 0.03)',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.05)'
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <LibraryBooksIcon color="secondary" />
                  <Typography variant="h6" color="secondary.dark" sx={{ fontWeight: 900 }}>
                    Next Steps / Plan de Acción Inmediato
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2, borderColor: 'rgba(79, 70, 229, 0.1)' }} />
                <List sx={{ p: 0 }}>
                  {recommendations.map((rec, rIdx) => (
                    <ListItem
                      key={rIdx}
                      sx={{
                        p: 0,
                        mb: 2,
                        alignItems: 'flex-start',
                        '&:last-child': { mb: 0 }
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: 'secondary.main',
                          color: 'white',
                          minWidth: 20,
                          height: 20,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          mr: 2,
                          mt: '2px'
                        }}
                      >
                        {rIdx + 1}
                      </Box>
                      <ListItemText
                        primary={
                          <Typography variant="body1" sx={{ fontWeight: '500', color: 'text.primary', lineHeight: 1.4 }}>
                            {rec}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Observaciones y Fortalezas Profesionales */}
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined" sx={{ borderRadius: 3, height: '100%', borderColor: 'divider' }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography variant="subtitle2" color="warning.dark" sx={{ mb: 1.5, fontWeight: 800 }}>
                      Alertas Profesionales Observadas
                    </Typography>
                    {activeObs.length > 0 ? (
                      <List dense sx={{ p: 0 }}>
                        {activeObs.map((obs) => (
                          <ListItem key={obs} sx={{ p: 0, mb: 1 }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 16, mr: 1, color: 'warning.main' }} />
                            <ListItemText
                              primary={
                                <Typography variant="body2" sx={{ fontWeight: '600' }}>
                                  {obs}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <Typography variant="caption" color="text.secondary">
                        No se registraron alertas profesionales en esta sesión.
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined" sx={{ borderRadius: 3, height: '100%', borderColor: 'divider' }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Typography variant="subtitle2" color="success.dark" sx={{ mb: 1.5, fontWeight: 800 }}>
                      Fortalezas a Potenciar
                    </Typography>
                    {activeStrengths.length > 0 ? (
                      <List dense sx={{ p: 0 }}>
                        {activeStrengths.map((str) => (
                          <ListItem key={str} sx={{ p: 0, mb: 1 }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 16, mr: 1, color: 'success.main' }} />
                            <ListItemText
                              primary={
                                <Typography variant="body2" sx={{ fontWeight: '600' }}>
                                  {str}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <Typography variant="caption" color="text.secondary">
                        No se marcaron fortalezas consolidadas específicas.
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

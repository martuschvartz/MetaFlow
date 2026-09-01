'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  Grid,
  Rating,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  CalendarToday as CalendarTodayIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircleOutlined as CheckCircleOutlineIcon
} from '@mui/icons-material';

interface PlayerDetails {
  id: string;
  name: string;
  position: 'Armadora' | 'Punta' | 'Central' | 'Opuesta' | 'Líbero';
  number: number;
  flow: number;
  status: 'optimal' | 'stable' | 'alert';
  history: Array<{
    date: string;
    flow: number;
    confidence: number;
    activation: number;
    pressure: number;
    selfTalk: string;
    observations: string[];
    recommendations: string[];
  }>;
}

const mockPlayersDetails: Record<string, PlayerDetails> = {
  '1': {
    id: '1',
    name: 'Martina Schvartz',
    position: 'Punta',
    number: 7,
    flow: 4.5,
    status: 'optimal',
    history: [
      {
        date: '31 Ago 2026',
        flow: 4.5,
        confidence: 5,
        activation: 3,
        pressure: 2,
        selfTalk: 'positivo',
        observations: ['Psicología deportiva enfocada', 'Estado de flow fluido', 'Fuerte confianza'],
        recommendations: ['Anclaje de confianza: Registrar los aciertos y sensaciones de hoy para usarlos de referencia en el futuro.'],
      },
      {
        date: '24 Ago 2026',
        flow: 3.8,
        confidence: 4,
        activation: 4,
        pressure: 3,
        selfTalk: 'neutro',
        observations: ['Estado de flow moderado', 'CBT aplicada'],
        recommendations: ['Control de diálogo interno durante transiciones de sets.'],
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Delfina Solari',
    position: 'Armadora',
    number: 10,
    flow: 2.5,
    status: 'alert',
    history: [
      {
        date: '30 Ago 2026',
        flow: 2.5,
        confidence: 2,
        activation: 3,
        pressure: 4,
        selfTalk: 'negativo',
        observations: ['Presión externa percibida', 'Baja confianza auto-informada'],
        recommendations: [
          'Foco en micro-objetivos: Establecer metas ultra-específicas en el saque.',
          'Trabajo de reestructuración de pensamientos limitantes identificados.'
        ],
      }
    ]
  },
  '3': {
    id: '3',
    name: 'Catalina Gómez',
    position: 'Central',
    number: 5,
    flow: 1.8,
    status: 'alert',
    history: [
      {
        date: '31 Ago 2026',
        flow: 1.8,
        confidence: 3,
        activation: 5,
        pressure: 4,
        selfTalk: 'negativo',
        observations: ['Activación psicofísica desregulada (nervios extremos)', 'Atención Kine-Deportológica necesaria'],
        recommendations: [
          'Técnica de desactivación: Respiración diafragmática (4-2-8 segundos) antes de entrar a cancha.',
          'Atención Kine-Deportológica: Priorizar rutina de movilidad preventiva en hombros/rodillas.'
        ],
      }
    ]
  }
};

export default function PlayerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const playerId = resolvedParams.id;
  const player = mockPlayersDetails[playerId] || mockPlayersDetails['1']; // Fallback a Martina por comodidad en MVP

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Botón Volver */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.push('/players')}
        sx={{ mb: 3, textTransform: 'none', fontWeight: 'bold' }}
        color="inherit"
      >
        Volver a Jugadoras
      </Button>

      {/* Tarjeta Perfil Principal */}
      <Card sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={3} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, sm: 'auto' }}>
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  width: 80,
                  height: 80,
                  fontSize: '2rem',
                  fontWeight: 'black',
                  mx: { xs: 'auto', sm: 0 }
                }}
              >
                {player.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
            </Grid>
            <Grid size={{ xs: 12, sm: 'grow' }} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1.5, flexWrap: 'wrap' }}>
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    {player.name}
                  </Typography>
                  <Chip
                    label={player.status === 'optimal' ? 'Estado Óptimo' : player.status === 'stable' ? 'Estado Estable' : 'Estado Crítico'}
                    color={player.status === 'optimal' ? 'success' : player.status === 'stable' ? 'primary' : 'error'}
                    size="small"
                    sx={{ fontWeight: 'bold' }}
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1, mt: 0.5 }}>
                  <Chip label={`Dorsal #${player.number}`} size="small" variant="outlined" sx={{ fontWeight: 'bold' }} />
                  <Chip label={player.position} size="small" color="secondary" variant="outlined" sx={{ fontWeight: 'bold' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Historial de Sesiones */}
      <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 800 }}>
        <TrendingUpIcon color="primary" /> Historial Clínico y Evolución
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {player.history.map((session, index) => (
          <Paper
            key={index}
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 2px 8px rgba(0,0,0,0.01)'
            }}
          >
            {/* Header Sesión */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarTodayIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }} color="text.primary">
                  Sesión del {session.date}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">Flow:</Typography>
                <Rating value={session.flow} readOnly size="small" />
              </Box>
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* Métricas e Indicadores de Autoevaluación */}
            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="caption" color="text.secondary">Confianza</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{session.confidence} / 5</Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="caption" color="text.secondary">Activación / Alerta</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{session.activation} / 5</Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="caption" color="text.secondary">Presión Percibida</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{session.pressure} / 5</Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="caption" color="text.secondary">Diálogo Interno</Typography>
                <Typography variant="body2" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{session.selfTalk}</Typography>
              </Grid>
            </Grid>

            {/* Observaciones y Next Steps */}
            <Grid container spacing={2}>
              {session.observations.length > 0 && (
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 2, height: '100%' }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }} color="text.primary">
                      Observaciones Profesionales
                    </Typography>
                    <List dense sx={{ p: 0 }}>
                      {session.observations.map((obs, oIdx) => (
                        <ListItem key={oIdx} sx={{ p: 0, mb: 0.5 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 16, mr: 1, color: 'primary.main' }} />
                          <ListItemText primary={<Typography variant="body2">{obs}</Typography>} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Grid>
              )}

              <Grid size={{ xs: 12, md: session.observations.length > 0 ? 6 : 12 }}>
                <Box sx={{ p: 2, bgcolor: 'rgba(79, 70, 229, 0.04)', border: '1px dashed rgba(79, 70, 229, 0.2)', borderRadius: 2, height: '100%' }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }} color="secondary.dark">
                    Next Steps / Indicaciones Médicas
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    {session.recommendations.map((rec, rIdx) => (
                      <ListItem key={rIdx} sx={{ p: 0, mb: 0.5, alignItems: 'flex-start' }}>
                        <Box sx={{ minWidth: 16, mt: '2px', mr: 1, color: 'secondary.main', fontSize: '1.2rem', lineHeight: 1 }}>•</Box>
                        <ListItemText primary={<Typography variant="body2" sx={{ lineHeight: 1.3 }}>{rec}</Typography>} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

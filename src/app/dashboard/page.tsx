'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  Add as AddIcon,
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  ArrowForward as ArrowForwardIcon,
  Assessment as AssessmentIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

export default function DashboardPage() {
  const router = useRouter();

  const mockStats = [
    { title: 'Total Jugadoras', value: '14', icon: <GroupIcon />, color: '#0f766e', desc: 'Plantel Primera División' },
    { title: 'Sesiones Realizadas', value: '38', icon: <AssessmentIcon />, color: '#4f46e5', desc: 'Este mes' },
    { title: 'Flow Promedio', value: '3.9 / 5', icon: <TrendingUpIcon />, color: '#10b981', desc: 'Zonas de rendimiento óptimo' },
  ];

  const recentAlerts = [
    {
      id: '1',
      name: 'Delfina Solari',
      type: 'warning',
      message: 'Confianza baja (2/5) y Presión alta (4/5). Diálogo negativo.',
      action: 'Trabajar reestructuración cognitiva',
      time: 'Hace 2 horas',
    },
    {
      id: '2',
      name: 'Catalina Gómez',
      type: 'danger',
      message: 'Nivel de alerta/nervios muy alto (5/5) antes de competencia.',
      action: 'Aplicar técnicas de desactivación profunda 4-2-8',
      time: 'Hace 4 horas',
    },
    {
      id: '3',
      name: 'Sofía Martínez',
      type: 'success',
      message: 'Ingreso estable a estado de flow (4/5). Fuerte enfoque.',
      action: 'Registrar anclajes corporales y rutinas pre-ejecución',
      time: 'Ayer',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Saludo y Encabezado */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
            Hola, Dr. Andrés
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Bienvenido al panel de MetaFlow. Aquí tienes el estado técnico-emocional del equipo de vóley.
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => router.push('/assessment/new')}
          sx={{ borderRadius: 2.5, fontWeight: 'bold', textTransform: 'none', py: 1, px: 2 }}
        >
          Nueva Evaluación
        </Button>
      </Box>

      {/* Tarjetas KPI */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {mockStats.map((stat, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <Card sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.03)', border: '1px solid', borderColor: 'divider' }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                <Box
                  sx={{
                    bgcolor: `${stat.color}15`,
                    color: stat.color,
                    p: 1.5,
                    borderRadius: 2.5,
                    display: 'flex',
                    mr: 2
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                    {stat.title}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800 }} color="text.primary">
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {stat.desc}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Panel de alertas y listado rápido */}
      <Grid container spacing={4}>
        {/* Columna Izquierda: Alertas y Plan de Acción */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                Diagnósticos Recientes y Next Steps
              </Typography>
              <List sx={{ width: '100%', bgcolor: 'background.paper', p: 0 }}>
                {recentAlerts.map((alert, index) => (
                  <ListItem
                    key={alert.id}
                    alignItems="flex-start"
                    sx={{
                      px: 0,
                      py: 2,
                      borderBottom: index !== recentAlerts.length - 1 ? '1px solid' : 'none',
                      borderColor: 'divider'
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor:
                            alert.type === 'danger'
                              ? 'error.light'
                              : alert.type === 'warning'
                              ? 'warning.light'
                              : 'success.light',
                          color: 'white'
                        }}
                      >
                        {alert.type === 'success' ? <CheckCircleIcon /> : <WarningIcon />}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography component="span" variant="subtitle1" sx={{ fontWeight: 700 }} color="text.primary">
                            {alert.name}
                          </Typography>
                          <Typography component="span" variant="caption" color="text.secondary">
                            {alert.time}
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Box sx={{ mt: 0.5 }}>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {alert.message}
                          </Typography>
                          <Chip
                            label={`Acción recomendada: ${alert.action}`}
                            size="small"
                            color={alert.type === 'danger' ? 'error' : alert.type === 'warning' ? 'warning' : 'success'}
                            variant="outlined"
                            sx={{ fontWeight: '600', height: 24, fontSize: '0.75rem' }}
                          />
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Columna Derecha: Acciones Rápidas y Distribución de Flow */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', mb: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                Distribución de Flow del Plantel
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>Excelente (4-5 ptos)</Typography>
                    <Typography variant="body2" color="text.secondary">5 Jugadoras (35%)</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={35} color="success" sx={{ height: 6, borderRadius: 3 }} />
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>Regular (3 ptos)</Typography>
                    <Typography variant="body2" color="text.secondary">7 Jugadoras (50%)</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={50} color="warning" sx={{ height: 6, borderRadius: 3 }} />
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>Crítico (1-2 ptos)</Typography>
                    <Typography variant="body2" color="text.secondary">2 Jugadoras (15%)</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={15} color="error" sx={{ height: 6, borderRadius: 3 }} />
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', bgcolor: 'primary.main', color: 'white' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                ¿Necesitas cargar datos?
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                Completa una nueva sesión de seguimiento técnico-emocional conjunta en menos de 3 minutos.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
                onClick={() => router.push('/assessment/new')}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: '#f4f4f5'
                  }
                }}
              >
                Comenzar Carga
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

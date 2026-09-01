'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Rating,
  Button,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  ArrowForward as ArrowForwardIcon,
  AccountCircle as AccountCircleIcon
} from '@mui/icons-material';

interface Player {
  id: string;
  name: string;
  position: 'Armadora' | 'Punta' | 'Central' | 'Opuesta' | 'Líbero';
  number: number;
  flow: number;
  status: 'optimal' | 'stable' | 'alert';
  lastSession: string;
}

const mockPlayers: Player[] = [
  { id: '1', name: 'Martina Schvartz', position: 'Punta', number: 7, flow: 4.5, status: 'optimal', lastSession: '31 Ago 2026' },
  { id: '2', name: 'Delfina Solari', position: 'Armadora', number: 10, flow: 2.5, status: 'alert', lastSession: '30 Ago 2026' },
  { id: '3', name: 'Catalina Gómez', position: 'Central', number: 5, flow: 1.8, status: 'alert', lastSession: '31 Ago 2026' },
  { id: '4', name: 'Sofía Martínez', position: 'Líbero', number: 3, flow: 4.0, status: 'optimal', lastSession: '29 Ago 2026' },
  { id: '5', name: 'Camila Rodriguez', position: 'Opuesta', number: 9, flow: 3.5, status: 'stable', lastSession: '28 Ago 2026' },
  { id: '6', name: 'Valentina Perez', position: 'Punta', number: 12, flow: 3.8, status: 'stable', lastSession: '27 Ago 2026' },
  { id: '7', name: 'Juana Bianchi', position: 'Armadora', number: 2, flow: 3.2, status: 'stable', lastSession: '25 Ago 2026' },
];

export default function PlayersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = mockPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
          Plantel de Jugadoras
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gestiona los perfiles y sigue la evolución emocional y técnica del equipo.
        </Typography>
      </Box>

      {/* Buscador */}
      <Box sx={{ mb: 4, maxWidth: 500 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar jugadora por nombre o posición..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              sx: { bgcolor: 'background.paper' }
            }
          }}
        />
      </Box>

      {/* Lista / Grid de Jugadoras */}
      <Grid container spacing={3}>
        {filteredPlayers.map((player) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={player.id}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                border: '1px solid',
                borderColor: 'divider',
                position: 'relative',
                overflow: 'visible',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                }
              }}
            >
              {/* Badge de Estado Emocional */}
              <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                <Chip
                  label={player.status === 'optimal' ? 'Óptimo' : player.status === 'stable' ? 'Estable' : 'Alerta'}
                  size="small"
                  color={player.status === 'optimal' ? 'success' : player.status === 'stable' ? 'primary' : 'error'}
                  sx={{ fontWeight: 'bold' }}
                />
              </Box>

              <CardContent sx={{ p: 3 }}>
                {/* Avatar & Identidad */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48, fontWeight: 'bold' }}>
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                      {player.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                      <Chip
                        label={`#${player.number}`}
                        size="small"
                        variant="outlined"
                        sx={{ height: 18, fontSize: '0.65rem', fontWeight: 'bold' }}
                      />
                      <Chip
                        label={player.position}
                        size="small"
                        color="secondary"
                        variant="outlined"
                        sx={{ height: 18, fontSize: '0.65rem', fontWeight: 'bold' }}
                      />
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 1.5 }} />

                {/* Score de Flow */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                    Nivel de Flow:
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Rating value={player.flow} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {player.flow.toFixed(1)}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="caption" color="text.secondary">
                    Última sesión: {player.lastSession}
                  </Typography>
                </Box>

                {/* Acción */}
                <Button
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => router.push(`/players/${player.id}`)}
                  sx={{
                    borderRadius: 2.5,
                    textTransform: 'none',
                    fontWeight: 'bold',
                    borderColor: 'divider',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(15, 118, 110, 0.04)'
                    }
                  }}
                >
                  Ver Historial y Perfil
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {filteredPlayers.length === 0 && (
          <Grid size={{ xs: 12 }}>
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <AccountCircleIcon sx={{ fontSize: 60, color: 'text.secondary', opacity: 0.5, mb: 1.5 }} />
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                No se encontraron jugadoras
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prueba buscando con otro término o posición.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

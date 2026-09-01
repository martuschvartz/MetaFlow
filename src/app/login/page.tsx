'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Alert
} from '@mui/material';
import {
  SportsVolleyball as SportsVolleyballIcon,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('clinic@metaflow.com');
  const [password, setPassword] = useState('volley123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Por favor complete todos los campos');
      return;
    }
    // Para el MVP simular éxito siempre
    router.push('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f766e 0%, #1e1b4b 100%)',
        py: 4,
        px: 2
      }}
    >
      <Container maxWidth="xs">
        <Card sx={{ borderRadius: 4, boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 3,
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1.5,
                  boxShadow: '0 4px 12px rgba(15, 118, 110, 0.3)'
                }}
              >
                <SportsVolleyballIcon sx={{ fontSize: 32 }} />
              </Box>
              <Typography variant="h4" component="h1" color="primary" sx={{ fontWeight: 900, letterSpacing: '-0.5px' }}>
                MetaFlow
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, textAlign: 'center' }}>
                Rendimiento Técnico y Emocional en Vóley
              </Typography>
            </Box>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <Box component="form" onSubmit={handleLogin} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Usuario / Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                }}
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  borderRadius: 2.5,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(15, 118, 110, 0.2)',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(15, 118, 110, 0.3)',
                  }
                }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

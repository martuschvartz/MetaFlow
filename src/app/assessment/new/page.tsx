'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
} from '@mui/material';
import PlayerForm from '@/components/PlayerForm';
import PsychologistForm from '@/components/PsychologistForm';
import ResultsDisplay from '@/components/ResultsDisplay';
import { PlayerAssessment, PsychologistAssessment } from '@/types/assessment';
import { generateNextSteps } from '@/utils/recommendations';
import SendIcon from '@mui/icons-material/Send';

const initialPlayerState: PlayerAssessment = {
  flow: 3,
  activation: 3,
  confidence: 3,
  pressure: 3,
  selfTalk: 'neutro',
};

const initialPsychState: PsychologistAssessment = {
  observedPsychology: false,
  observedFlow: false,
  observedLogotherapy: false,
  observedCBT: false,
  observedKinesiology: false,

  strengthPsychology: false,
  strengthFlow: false,
  strengthLogotherapy: false,
  strengthCBT: false,
  strengthKinesiology: false,
};

export default function NewAssessmentPage() {
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState<PlayerAssessment>(initialPlayerState);
  const [psychData, setPsychData] = useState<PsychologistAssessment>(initialPsychState);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) {
      setValidationError('Por favor ingresa el nombre de la jugadora');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setValidationError('');
    const steps = generateNextSteps(playerData, psychData);
    setRecommendations(steps);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setPlayerName('');
    setPlayerData(initialPlayerState);
    setPsychData(initialPsychState);
    setRecommendations([]);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <ResultsDisplay
          playerName={playerName}
          playerData={playerData}
          psychData={psychData}
          recommendations={recommendations}
          onReset={handleReset}
        />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Encabezado */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
          Nueva Sesión de Carga
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Completa la autoevaluación de la jugadora y el análisis clínico del psicólogo deportivo.
        </Typography>
      </Box>

      {validationError && (
        <Alert severity="error" sx={{ mb: 3, borderRadius: 3 }}>
          {validationError}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Información Básica de la Jugadora */}
        <Card variant="outlined" sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 800 }}>
              Información del Deportista
            </Typography>
            <TextField
              required
              fullWidth
              label="Nombre de la Jugadora"
              placeholder="Ej. Martina Schvartz, Delfina Solari..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              variant="outlined"
            />
          </CardContent>
        </Card>

        {/* Formulario Jugadora */}
        <PlayerForm data={playerData} onChange={setPlayerData} />

        {/* Formulario Psicólogo */}
        <PsychologistForm data={psychData} onChange={setPsychData} />

        {/* Botón de Envío */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 3,
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1rem',
              boxShadow: '0 4px 14px rgba(15, 118, 110, 0.2)',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(15, 118, 110, 0.3)',
              }
            }}
          >
            Generar Diagnóstico y Next Steps
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

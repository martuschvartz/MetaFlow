'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f766e', // Teal 700
      light: '#14b8a6', // Teal 500
      dark: '#115e59', // Teal 800
    },
    secondary: {
      main: '#4f46e5', // Indigo 600
      light: '#6366f1', // Indigo 500
      dark: '#3730a3', // Indigo 800
    },
    background: {
      default: '#f4f4f5', // Zinc 100
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Arial, sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Global border radius for TextFields
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px', // Global border radius for Buttons
        }
      }
    }
  }
});

export default theme;

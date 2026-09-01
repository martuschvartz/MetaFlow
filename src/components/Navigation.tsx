'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
  Chip
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Group as GroupIcon,
  AddCircleOutlined as AddCircleOutlineIcon,
  Logout as LogoutIcon,
  SportsVolleyball as SportsVolleyballIcon
} from '@mui/icons-material';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  // No renderizar navegación en la página de login
  if (pathname === '/login') {
    return null;
  }

  const menuItems = [
    { text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
    { text: 'Jugadoras', path: '/players', icon: <GroupIcon /> },
    { text: 'Nueva Sesión', path: '/assessment/new', icon: <AddCircleOutlineIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    if (mobileOpen) setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, mb: 3 }}>
        <SportsVolleyballIcon color="primary" />
        <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
          MetaFlow
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={pathname === item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                '&.Mui-selected': {
                  bgcolor: 'rgba(15, 118, 110, 0.08)',
                  color: 'primary.main',
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main',
                  },
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={() => handleNavigation('/login')}
        >
          Cerrar Sesión
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', color: 'text.primary' }}>
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => handleNavigation('/dashboard')}>
            <SportsVolleyballIcon color="primary" sx={{ fontSize: 28 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 900,
                letterSpacing: '-0.5px',
                background: 'linear-gradient(45deg, #0f766e 30%, #4f46e5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              MetaFlow
            </Typography>
            <Chip
              label="Volley MVP"
              size="small"
              color="primary"
              variant="outlined"
              sx={{ ml: 1, height: 20, fontSize: '0.65rem', fontWeight: 'bold' }}
            />
          </Box>

          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  onClick={() => handleNavigation(item.path)}
                  variant={pathname === item.path ? 'contained' : 'text'}
                  color={pathname === item.path ? 'primary' : 'inherit'}
                  startIcon={item.icon}
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: pathname === item.path ? 'bold' : 'normal',
                    px: 2,
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <IconButton color="error" onClick={() => handleNavigation('/login')} sx={{ ml: 1 }}>
                <LogoutIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

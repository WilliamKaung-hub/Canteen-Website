"use client";
import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';

export default function Navbar() {
  return (
    <div>
      <AppBar 
        position="static"
        sx={{ backgroundColor:' rgb(0, 1, 15)', color: 'white'}} // Black background, white text
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Click2Canteen
          </Typography>

          {/* Wrap buttons in Box for spacing */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Canteens</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Reg/Log</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

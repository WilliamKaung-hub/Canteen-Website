"use client";
import React from "react";

import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";


export default function HomePage() {
  return (
    <Box sx={{ bgcolor: "#001D51", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            🍽️ Welcome to Click2Canteen
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Quick. Delicious. Right from your campus canteen.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Order Now
          </Button>
          
        </Box>
        
      </Container>
    </Box>
  );
}

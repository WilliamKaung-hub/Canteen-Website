"use client";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import React from "react";
import LinkButton from "@/components/LinkButton";
export default function Navbar() {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: " rgb(0, 0, 0)", color: "White" }} // Black background, white text
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Click2Canteen
          </Typography>

          {/* Wrap buttons in Box for spacing */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <LinkButton href="/Home">
              <Button color="inherit">Home</Button>
            </LinkButton>

            <LinkButton href="/Canteen">
              <Button color="inherit">Canteens</Button>
            </LinkButton>

            <LinkButton href="/ContantUs">
              <Button color="inherit">Contact Us</Button>
            </LinkButton>

            <LinkButton href="/Register">
              <Button color="inherit">Register</Button>
            </LinkButton>

            <LinkButton href="/SystemLogin">
              <Button variant="contained" color="#D00000" size="large">System Login</Button>
            </LinkButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

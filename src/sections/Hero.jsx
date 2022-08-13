import { Box, Button, Container, Typography } from "@mui/material";

import React from "react";
import heroBackgroundImage from "../assets/images/web-design-studio-01.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        p: 3,
        position: "relative",
        backgroundImage: `url("${heroBackgroundImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 64%",
        backgroundSize: "cover",
        minHeight: "700px",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={heroBackgroundImage}
        alt="increase priority"
      />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box mt={14} mb={4} sx={{ maxWidth: 752 }}>
          <Typography variant="h1" color="initial" mb={5} textAlign="center">
            Create and grow your unique website today
          </Typography>

          <Typography
            variant="body1"
            color="initial"
            align="center"
            sx={{ textAlign: "center" }}
          >
            Programmatically work but low hanging fruit so new economy
            cross-pollination. Quick sync new economy onward and upward.
          </Typography>

          <Box
            mt={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" size="large" sx={{ mr: 1 }}>
              Learn More
            </Button>
            <Button variant="outlined" size="large">
              Hire Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

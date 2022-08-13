import { Box, Container, Typography } from "@mui/material";

import React from "react";
import { grey } from "@mui/material/colors";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: grey[900], py: 2 }}>
      <Container>
        <Typography variant="body1" color={grey[50]}>
          Agency | Powered by React &amp; Material UI
        </Typography>
      </Container>
    </Box>
  );
}

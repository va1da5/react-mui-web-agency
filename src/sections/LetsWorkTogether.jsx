import { Box, Button, Typography } from "@mui/material";

import React from "react";
import { grey } from "@mui/material/colors";

export default function LetsWorkTogether() {
  return (
    <Box
      sx={{
        py: 14,
        bgcolor: grey[900],
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
        }}
      >
        <Typography variant="h2" color={grey[50]} align="center">
          Let's work together on your next web project
        </Typography>
        <Typography variant="body1" color={grey[50]} align="center" my={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="large">
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

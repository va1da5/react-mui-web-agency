import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React from "react";
import { grey } from "@mui/material/colors";
import image from "../assets/images/web-design-bg-10.jpg";

export default function WebDesign() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ bgcolor: grey[200], py: 10 }}>
      <Container maxWidth="lg">
        <Stack direction={matches ? "column" : "row"} spacing={4}>
          <Box component="img" src={image} alt="image" />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h2" color="initial">
                Web Design
              </Typography>
              <Typography variant="body1" color="initial" sx={{ my: 4 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Button variant="contained" size="large">
                Learn More
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

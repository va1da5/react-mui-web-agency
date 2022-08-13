import {
  Box,
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Container from "@mui/material/Container";
import React from "react";
import image from "../assets/images/web-design-bg-13.jpg";

export default function Branding() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container sx={{ py: 10 }}>
      <Stack direction={matches ? "column" : "row"} spacing={4}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography variant="h2" color="initial">
              Branding
            </Typography>
            <Typography variant="body1" color="initial" sx={{ py: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="#lear-more"
            >
              Learn More
            </Button>
          </Box>
        </Box>
        <Box component="img" src={image} alt="branding-image"></Box>
      </Stack>
    </Container>
  );
}

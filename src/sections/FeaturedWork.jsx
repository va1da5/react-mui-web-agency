import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React from "react";
import image1 from "../assets/images/web-design-bg-12.jpg";
import image2 from "../assets/images/web-design-bg-13.jpg";

function ImageLink(props) {
  const { href, src } = props;

  return (
    <Box>
      <Link href={href}>
        <Box
          component="img"
          src={src}
          alt="image"
          sx={{
            maxWidth: "100%",
            height: "auto",
            filter: "brightness(100%)",
            transition: "filter 0.15s",
            ":hover": {
              filter: "brightness(108%)",
            },
          }}
        />
      </Link>
    </Box>
  );
}

export default function FeaturedWork() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h2" color="initial">
        Featured Work
      </Typography>

      <Stack direction={matches ? "column" : "row"} spacing={4} sx={{ mt: 6 }}>
        <ImageLink src={image1} href="#link1" />
        <ImageLink src={image2} href="#link2" />
      </Stack>
    </Container>
  );
}

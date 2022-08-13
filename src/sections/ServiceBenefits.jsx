import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import BoltIcon from "@mui/icons-material/Bolt";
import DiamondIcon from "@mui/icons-material/Diamond";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";

function Item(props) {
  const { icon, title, children } = props;

  const Icon = icon;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 6,
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          width: 72,
          height: 72,
          borderRadius: 50,
          position: "relative",
        }}
      >
        <Icon
          sx={{
            margin: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 40,
          }}
        />
      </Box>

      <Typography variant="h3" mt={3} align="center">
        {title}
      </Typography>

      <Typography variant="body1" mt={4} align="center">
        {children}
      </Typography>
    </Box>
  );
}

const serviceItems = [
  {
    icon: DoneIcon,
    title: "Fixed Price Projects",
    description:
      "Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.",
  },
  {
    icon: DiamondIcon,
    title: "Receive on time",
    description:
      "Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.",
  },
  {
    icon: BoltIcon,
    title: "Fast work turnaround",
    description:
      "Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.",
  },
];

export default function ServiceBenefits() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth="lg" sx={{ mt: 2, pt: 8, pb: 20 }}>
      <Stack
        direction={matches ? "column" : "row"}
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        {serviceItems.map((item, index) => {
          return (
            <Item key={index} icon={item.icon} title={item.title}>
              {item.description}
            </Item>
          );
        })}
      </Stack>
    </Container>
  );
}

import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React from "react";
import { grey } from "@mui/material/colors";
import janetImage from "../assets/images/Janet.jpg";
import seanImage from "../assets/images/Sean.jpg";
import willieImage from "../assets/images/Willie.jpg";

const comments = [
  {
    img: janetImage,
    name: "Janet Morris",
    comment: `What is the point of being alive if you don’t at least try to do
    something remarkable?`,
  },
  {
    img: willieImage,
    name: "Willie Brown",
    comment: `What is the point of being alive if you don’t at least try to do
      something remarkable?`,
  },
  {
    img: seanImage,
    name: "Sean Fisher",
    comment: `What is the point of being alive if you don’t at least try to do
    something remarkable?`,
  },
];

function UserComment(props) {
  const { img, children, name } = props;
  return (
    <Box>
      <Box component="img" src={img} alt="image" sx={{ borderRadius: 50 }} />
      <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
        “{children}”
      </Typography>
      <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
        {name}
      </Typography>
    </Box>
  );
}

export default function UserQuotes() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ py: 10, bgcolor: grey[200] }}>
      <Container>
        <Stack direction={matches ? "column" : "row"} spacing={4}>
          {comments.map((item, index) => {
            return (
              <UserComment key={index} img={item.img} name={item.name}>
                {item.comment}
              </UserComment>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}

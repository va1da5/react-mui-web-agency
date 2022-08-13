import {
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import logoImage from "../assets/images/web-agency-logo-3.png";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MenuLink = styled(Link)(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: "0.8em",
  letterSpacing: 0,
  fontWeight: 600,
  color: theme.palette.text.primary,
  textDecoration: "none",
  cursor: "pointer",
  padding: 2,
  ":hover": {
    textDecoration: "underline",
    color: theme.palette.secondary.main,
  },
}));

const navLinks = ["Home", "About Us", "Portfolio", "News", "Contact Us"].map(
  (item) => ({
    title: item,
    href: `#${item}`,
  })
);

export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  return (
    <Box>
      <Container
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 1,
        }}
      >
        <Link
          href="#"
          underline="none"
          color="text.primary"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img src={logoImage} alt="logo" width="34px" />
          <Typography variant="h3" sx={{ ml: 1 }} fontWeight="600">
            Agency
          </Typography>
        </Link>

        {!matches && (
          <Box component="ul" sx={{ display: "flex", alignItems: "center" }}>
            <Stack direction="row" spacing={2}>
              {navLinks.map((item, index) => {
                return (
                  <Box
                    key={index}
                    component="li"
                    sx={{ listStyleType: "none" }}
                  >
                    <MenuLink
                      href={item.href}
                      underline="hover"
                      color="text.primary"
                      variant="body2"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {item.title}
                    </MenuLink>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        )}

        <Drawer
          anchor="right"
          open={drawerVisible}
          onClose={() => {
            setDrawerVisible(false);
          }}
        >
          {navLinks.map((item, index) => {
            return (
              <List key={index}>
                <ListItem disablePadding>
                  <ListItemButton
                    href={item.href}
                    component={Link}
                    sx={{ px: 6 }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          color="initial"
                          sx={{ fontWeight: 600 }}
                        >
                          {item.title}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            );
          })}
        </Drawer>

        {matches && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="menu"
              size="large"
              onClick={() => {
                setDrawerVisible(true);
              }}
            >
              <MenuIcon sx={{ m: 0 }} />
            </IconButton>
          </Box>
        )}
      </Container>
    </Box>
  );
}

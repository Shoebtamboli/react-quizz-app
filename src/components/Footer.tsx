import React from "react";
import { Typography, Link, Container } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Made with ♥ by "}
      <Link color="inherit" href="https://github.com/Shoebtamboli">
        Shoeb Tamboli
      </Link>{" "}
      {new Date().getFullYear()}

    </Typography>
  );
}

export const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 320,
        py: [3, 6]
      }}
    >
      <Copyright />
    </Container>
  );
};

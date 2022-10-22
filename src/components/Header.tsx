import React from "react";
import { Typography, Grid, Divider } from "@mui/material";

export const Header = (props: any) => {
  const { score } = props;
  return (
    <Grid>
      <Typography variant="h1" align="center" gutterBottom>
        Einbürgerungstest
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        Fragenkatalog zur Testvorbereitung
      </Typography>
      <Divider />
      {/* 2. Current Score  */}
      <Typography variant="h2" align="center" gutterBottom>
        Score: {score}
      </Typography>
    </Grid>
  );
};

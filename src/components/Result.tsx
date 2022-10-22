import React from "react";
import { Typography, Button, Grid } from "@mui/material";

export const Result = (props: any) => {
  const {
    questions,
    score,
    setScore,
    setCurrentQuestion,
    setShowResults
  } = props;
  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <Grid
      sx={{
        margin: "0 auto",
        width: "30%",
        backgroundColor: "gray",
        padding: "30px",
        borderRadius: "16px",
        color: "white"
      }}
    >
      <Typography variant="h1" align="center" gutterBottom>
        Final Results
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        {score} out of {questions.length} correct - (
        {(score / questions.length) * 100}%)
      </Typography>
      <Button variant="contained" fullWidth onClick={() => restartGame()}>
        Restart quiz
      </Button>
    </Grid>
  );
};

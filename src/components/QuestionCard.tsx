import React from "react";
import { Typography, Divider, Button, Grid } from "@mui/material";

export const QuestionCard = (props: any) => {
  const {
    currentQuestion,
    questions,
    setScore,
    setCurrentQuestion,
    setShowResults,
    score
  } = props;

  /* A possible answer was clicked */
  const optionClicked = (isCorrect: any) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  // Helper Functions

  // const nextQuestion = () => {
  //   // Move on to the next question if not the last question
  //   const nextQ = number + 1;

  //   if (nextQ === TOTAL_QUESTIONS) {
  //     setGameOver(true);
  //   } else {
  //     setNumber(nextQ);
  //   }
  // };

  return (
    <Grid
      item
      xs={6}
      sx={{
        margin: "0 auto",
        width: "80%",
        height: "auto",
        backgroundColor: "gray",
        padding: "16px",
        borderRadius: "16px",
        color: "white"
      }}
    >
      {/* Current Question  */}
      <Typography variant="h3" align="center" gutterBottom color="primary">
        Question: {currentQuestion + 1} out of {questions.length}
      </Typography>
      <Divider />
      <Typography variant="h6" gutterBottom>
        Bitte kreuzen Sie an. Es gibt nur eine richtige Antwort.
      </Typography>

      <Typography
        variant="h2"
        align="center"
        sx={{
          fontSize: "24px"
        }}
      >
        {questions[currentQuestion].text}
      </Typography>

      {/* List of possible answers  */}
      <ul>
        {questions[currentQuestion].options.map((option: any, index: any) => {
          return (
            <Grid key={option.id}>
              <Button
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    opacity: "0.8"
                  },
                  cursor: "pointer",
                  width: "100%",
                  color: "black",
                  marginTop: "8px",
                  backgroundColor: "darkgray",
                  padding: "16px",
                  border: "3px solid white",
                  borderRadius: "10px",
                  fontSize: "20px",
                  boxShadow: "1px 2px 0px rgba(0, 0, 0, 0.1)",
                  textShadow: "0px 1px 0px rgba(0, 0, 0, 0.25)"
                }}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </Button>
            </Grid>
          );
        })}
      </ul>
    </Grid>
  );
};

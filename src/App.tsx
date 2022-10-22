import React, { useState, useEffect } from "react";
import { questions } from "./questions/Einbürgerungstest";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, AppBar, IconButton, Toolbar } from "@mui/material";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import FlareIcon from "@mui/icons-material/Flare";

import theme from "./muiTheme";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { QuestionCard } from "./components/QuestionCard";
import { Result } from "./components/Result";

const App: React.FC = () => {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  const defineDarkMode = () => {
    if (localStorage.getItem("isDarkModeActive") == null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDarkModeActive(true);
        localStorage.setItem("isDarkModeActive", "true");
      } else {
        setIsDarkModeActive(false);
        localStorage.setItem("isDarkModeActive", "false");
      }
    } else if (localStorage.getItem("isDarkModeActive") === "true") {
      setIsDarkModeActive(true);
    }
  };

  useEffect(() => {
    if (isDarkModeActive) {
      localStorage.setItem("isDarkModeActive", "true");
    } else {
      localStorage.setItem("isDarkModeActive", "false");
    }
  }, [isDarkModeActive]);

  useEffect(() => {
    defineDarkMode();
  }, []);

  const handleClickOnDarkMode = () => {
    setIsDarkModeActive((darkMode) => !darkMode);
  };
  const appTheme = React.useMemo(() => theme(isDarkModeActive), [
    isDarkModeActive
  ]);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          Top: "env(safe-area-inset-top)",
          background: "transparent",
          boxShadow: "none",
          paddingTop: "8px",
          justifyContent: "center",
          justifyItems: "center",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
          marginBottom: appTheme.spacing(-2)
        }}
      >
        <Toolbar>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            aria-label={isDarkModeActive ? "Set light theme" : "Set dark theme"}
            onClick={handleClickOnDarkMode}
          >
            {isDarkModeActive ? <FlareIcon /> : <Brightness3Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* 1. Header  */}
        <Header score={score} />
        <Grid container spacing={2}>
          {/* 3. Show results or show the question game  */}
          {showResults ? (
            /* 4. Final Results */

            <Result
              questions={questions}
              score={score}
              setScore={setScore}
              setCurrentQuestion={setCurrentQuestion}
              setShowResults={setShowResults}
            />
          ) : (
            /* 5. Question Card  */
            <QuestionCard
              currentQuestion={currentQuestion}
              questions={questions}
              setScore={setScore}
              setCurrentQuestion={setCurrentQuestion}
              setShowResults={setShowResults}
              score={score}
            />
          )}
        </Grid>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

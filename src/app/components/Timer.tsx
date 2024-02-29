import React, { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

export default function ProgressTimer({
  timer,
  volume,
}: {
  timer: number;
  volume: boolean;
}) {
  const [progress, setProgress] = useState<number>(100);

  useEffect(() => {
    const percent = (timer / 30) * 100;
    setProgress(percent);
    const timerSound = new Audio("./sounds/optionClick.wav");
    if (volume) timerSound.play();
  }, [timer, volume]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <CircularProgress
        determinate
        value={progress}
        size="lg"
        sx={{
          ".MuiCircularProgress-root": {
            color: "#004643",
          },
          ".MuiCircularProgress-track": {
            stroke: "#ABD1C6",
          },
          ".MuiCircularProgress-progress": {
            stroke: "#004643",
          },
          "--CircularProgress-size": "100px",
          fontSize: "20px",
          fontWeight: 500,
          color: "#004643",
        }}
      >
        {timer}
      </CircularProgress>
    </Box>
  );
}

import React, { useCallback, useState, useEffect } from "react";
import { Box, Zoom, Fab, Fade } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { pink } from "@mui/material/colors";

export const ScrollTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const handleScrollClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleScrollClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 50,
          right: 50,
          zIndex: 20,
        }}
      >
        <Fab
          sx={{
            backgroundColor: "#719ef1",
          }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

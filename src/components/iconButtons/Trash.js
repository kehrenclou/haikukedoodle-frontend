import React from "react";
import { IconButton, Tooltip } from "@mui/material";

import { DeleteOutline } from "@mui/icons-material";

export const Trash = ({ onClick }) => {
  return (
    <>
      <Tooltip
        title="Delete"
        PopperProps={{
          modifiers: [{ name: "offset", options: { offset: [0, -20] } }],
        }}
      >
        <IconButton
          aria-label="delete"
          sx={{ "&:hover": { border: "none" } }}
          onClick={onClick}
        >
          <DeleteOutline
            sx={{
              borderRadius: "50%",
              padding: "5px",
              // color: "#2b2d42",
              backgroundColor: "rgb(229, 236, 251)",
              boxShadow: "rgba(0, 0, 0, 0.45) 0px 1px 3px",
              fontSize: "24px",
              "&:hover": { color: "#2b2d42", backgroundColor: "pink" },
            }}
          />
        </IconButton>
      </Tooltip>
    </>
  );
};

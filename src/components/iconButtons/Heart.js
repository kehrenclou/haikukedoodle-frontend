import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

export const Heart = ({ isLiked, onClick }) => {
  return (
    <>
      <Tooltip
        title={isLiked ? "Unlike" : "Like"}
        placement="top"
        PopperProps={{
          modifiers: [{ name: "offset", options: { offset: [0, -20] } }],
        }}
      >
        <IconButton
          aria-label="like"
          sx={
            isLiked
              ? {
                  "&:hover": { color: "white", border: "none" },
                }
              : {
                  "&:hover": { color: "#2b2d42", border: "none" },
                }
          }
          onClick={onClick}
        >
          {isLiked ? (
            <Favorite
              sx={{
                borderRadius: "50%",
                padding: "5px",
                // backgroundColor: "white",
                // boxShadow: "rgba(0, 0, 0, 0.45) 0px 2px 15px",
                fontSize: "28px",
                color: "#2b2d42",
                "&:hover": { backgroundColor: "pink" },
              }}
            />
          ) : (
            <FavoriteBorder
              sx={{
                borderRadius: "50%",
                padding: "5px",
                // backgroundColor: "white",
                // boxShadow: "rgba(0, 0, 0, 0.45) 0px 2px 15px",
                fontSize: "28px",
                "&:hover": { color: "#2b2d42", backgroundColor: "pink" },
              }}
            />
          )}
        </IconButton>
      </Tooltip>
    </>
  );
};

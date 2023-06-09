import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import {
  BookmarkAddOutlined,
  BookmarkAddedOutlined,
} from "@mui/icons-material";

export const Bookmark = ({ isBookmarked, onClick }) => {
  return (
    <>
      <div className="icon">
        <Tooltip
          title={isBookmarked ? "Remove from Favorites" : "Save to Favorites"}
          placement="top"
          PopperProps={{
            modifiers: [{ name: "offset", options: { offset: [0, -20] } }],
          }}
        >
          <IconButton
            aria-label="favorited"
            sx={
              isBookmarked
                ? {
                    "&:hover": { border: "none", opacity: "0.9" },
                  }
                : {
                    "&:hover": { border: "none", opacity: "0.9" },
                  }
            }
            onClick={onClick}
          >
            {isBookmarked ? (
              <BookmarkAddedOutlined
                sx={{
                  borderRadius: "50%",
                  padding: "5px",
                  backgroundColor: "pink",
                  boxShadow: "rgba(0, 0, 0, 0.45) 0px 3px 5px",
                  fontSize: "24px",
                  color: "#2b2d42",
                  border: "none",

                  "&:hover": { opacity: "0.5", color: "#2b2d42" },
                }}
              />
            ) : (
              <BookmarkAddOutlined
                sx={{
                  borderRadius: "50%",
                  padding: "5px",
                  backgroundColor: "rgb(229, 236, 251)",
                  boxShadow: "rgba(0, 0, 0, 0.45) 0px 1px 3px",
                  fontSize: "24px",
                  "&:hover": { color: "#2b2d42", backgroundColor: "pink" },
                }}
              />
            )}
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

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
               color:"lightgray",
              // borderRadius: "50%",
              // padding: "5px",
              // backgroundColor: "white",
              // boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 15px",
              fontSize: "28px",
              "&:hover": { color: "#2b2d42" },
            }}
          />
        </IconButton>
      </Tooltip>
    </>
  );
};

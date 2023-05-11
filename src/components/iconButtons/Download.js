import { IconButton, Tooltip } from "@mui/material";

import { FileDownloadOutlined } from "@mui/icons-material";

export const Download = ({onClick})=>{
    return(
        <>
         <Tooltip
              title="Download Haiku"
              placement="top"
              PopperProps={{
                modifiers: [{ name: "offset", options: { offset: [0, -20] } }],
              }}
            >
              <IconButton
                size="small"
                aria-label="download"
                sx={{ "&:hover": { color: "#2b2d42", border: "none" } }}
                onClick={onClick}
              >
                <FileDownloadOutlined
                  sx={{
                    borderRadius: "50%",
                    padding: "5px",
                    backgroundColor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.45) 0px 5px 15px",
                    fontSize: "24px",
                    "&:hover": { color: "#2b2d42" },
                  }}
                />
              </IconButton>
            </Tooltip>
        </>
    )
}
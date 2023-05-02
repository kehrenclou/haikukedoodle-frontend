//components/card/card.js
/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";
import "./card.css";
import { IconButton, Tooltip } from "@mui/material";

import {
  BookmarkAddOutlined,
  BookmarkAddedOutlined,
  FileDownloadOutlined,
  DeleteOutline,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import Flower from "../Flower/Flower";

/* ---------------------------------- Card ---------------------------------- */

export default function Card({ lines, chords }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <li className="card">
        <Flower
          width="154"
          height="133"
          petalcolor="rgba(213,157,169,.3)"
          colorb="#47535c"
          colorc="#171e26"
          className="card__bg"
        />

        <section className="card__section card__header ">
          <div className="card__header_content">
            <h2 className="card__title">Davinci Haiku</h2>

            <Tooltip
              title="Delete"
              PopperProps={{
                modifiers: [{ name: "offset", options: { offset: [0, -20] } }],
              }}
            >
              <IconButton
                aria-label="delete"
                sx={{ "&:hover": { color: "red" } }}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <DeleteOutline
                  sx={{
                    borderRadius: "50%",
                    padding: "5px",
                    backgroundColor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 15px",
                    fontSize: "28px",
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>
        </section>

        <section className="card__section">
          <div className="card__line card__line_column">
            <p className="card__text">Code and algorithms</p>
            <p className="card__text card__text_med card__text_indent">
              D F# Em
            </p>
          </div>
          <div className="card__line card__line_column">
            <p className="card__text">Artificial mind at work</p>
            <p className="card__text card__text_med card__text_indent">
              D F# Em
            </p>
          </div>
          <div className="card__line card__line_column">
            <p className="card__text">Haiku born from bytes</p>
            <p className="card__text card__text_med card__text_indent">
              D F# Em
            </p>
          </div>
          <p className="card__text card__text_small">
            ~ by anonymous April 2, 2023
          </p>
        </section>

        {/* <section className="card__section">
          <p className="card__text card__text_small">
            ~ by anonymous April 2, 2023
          </p>
        </section> */}
        <section className="card__section_footer">
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
                      "&:hover": { color: "white" },
                    }
                  : {
                      "&:hover": { color: "#2b2d42" },
                    }
              }
              onClick={() => {
                setIsLiked(!isLiked);
              }}
            >
              {isLiked ? (
                <Favorite
                  sx={{
                    borderRadius: "50%",
                    padding: "5px",
                    fontSize: "28px",
                    color: "#2b2d42",
                    "&:hover": { opacity: 0.5 },
                  }}
                />
              ) : (
                <FavoriteBorder
                  sx={{
                    borderRadius: "50%",
                    padding: "5px",
                    fontSize: "28px",
                    "&:hover": { color: "#2b2d42" },
                  }}
                />
              )}
            </IconButton>
          </Tooltip>
          <div className="card__button-group">
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
                sx={{ "&:hover": { color: "#2b2d42" } }}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <FileDownloadOutlined
                  sx={{
                    borderRadius: "50%",
                    padding: "5px",
                    backgroundColor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.45) 0px 5px 15px",
                    fontSize: "24px",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip
              title={isFavorite ? "Remove from Favorites" : "Save to Favorites"}
              placement="top"
              PopperProps={{
                modifiers: [{ name: "offset", options: { offset: [0, -20] } }],
              }}
            >
              <IconButton
                aria-label="favorited"
                sx={
                  isFavorite
                    ? {
                        "&:hover": { color: "red" },
                      }
                    : {
                        "&:hover": { color: "#2b2d42" },
                      }
                }
                onClick={() => {
                  setIsFavorite(!isFavorite);
                }}
              >
                {isFavorite ? (
                  <BookmarkAddedOutlined
                    sx={{
                      borderRadius: "50%",
                      padding: "5px",
                      backgroundColor: "white",
                      boxShadow: "rgba(0, 0, 0, 0.45) 0px 5px 15px",
                      fontSize: "24px",
                      color: "#2b2d42",
                      "&:hover": { color: "red" },
                    }}
                  />
                ) : (
                  <BookmarkAddOutlined
                    sx={{
                      borderRadius: "50%",
                      padding: "5px",
                      backgroundColor: "white",
                      boxShadow: "rgba(0, 0, 0, 0.45) 0px 5px 15px",
                      fontSize: "24px",
                    }}
                  />
                )}
              </IconButton>
            </Tooltip>
          </div>
        </section>
      </li>
    </>
  );
}

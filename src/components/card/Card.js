import _ from "lodash";
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

export default function Card({
  subject,
  haikuLines,
  chordLines,
  likeCount,
  onDownloadClick,
  onLikeClick,
  song,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const zipPairs = [];
  for (let i = 0; i < 3; i++) {
    zipPairs.push([haikuLines[i], chordLines[i]]);
  }

  function handleLikeClick() {
    setIsLiked(!isLiked);
    // onLikeClick(card);
  }
  function handleDownloadClick(){
    onDownloadClick(song)
  }

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
            <h2 className="card__title">{subject}</h2>

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
          {zipPairs.map(([line, chord], i) => (
            <div className="card__line card__line_column" key={i}>
              <p className="card__text">{line}</p>
              <p className="card__text card__text_med card__text_indent">
                {chord}
              </p>
            </div>
          ))}

          <p className="card__text card__text_small">
            ~ by anonymous April 2, 2023
          </p>
        </section>

        <section className="card__section_footer">
          <div className="card__like-container">
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
                onClick={handleLikeClick}
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
            <p className="card__like-count">{likeCount}</p>
          </div>

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
                onClick={handleDownloadClick}
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
//components/card/card.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import "./card.css";
import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

import Flower from "../Flower/Flower";

import DownloadIcon from "../icons/DownloadIcon";
import BookmarkIcon from "../icons/BookmarkIcon";
import BookmarkAdded from "../icons/BookmarkAdded"
/* ---------------------------------- Card ---------------------------------- */

export default function Card({ lines, chords }) {
  return (
    <>
      <li className="card">
        <Flower
          width="154"
          height="133"
          petalcolor="rgba(213,157,169,.6)"
          colorb="#47535c"
          colorc="#171e26"
          className="card__bg"
        />

        <section className="card__section card__header ">
          <div className="card__header_content">
            <h2 className="card__title">Davinci Haiku</h2>

            <Tooltip title="Delete">
              <IconButton
                aria-label="delete"
                sx={{ "&:hover": { color: "green" } }}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <DeleteOutlineIcon fontSize="medium" />
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
        </section>

        <section className="card__section">
          <p className="card__text card__text_small">
            ~ by anonymous April 2, 2023
          </p>
        </section>
        <section className="card__section_dark">
          <Tooltip title="Save to Favorites">
            <IconButton
              aria-label="favorite"
              sx={{
                "&:hover": { color: "green" },
              }}
              onClick={() => {
                console.log("clicked");
              }}
            >
              <TurnedInNotIcon
                sx={{
                  borderRadius: "50%",
                  padding: "5px",
                  backgroundColor: "white",
                  boxShadow: "rgba(0, 0, 0, 0.55) 0px 5px 15px",
                  fontSize: "30px",
                }}
              />
            </IconButton>
          </Tooltip>

          <button type="button" className=" card__button">
            <DownloadIcon
              height="24"
              width="24"
              aria-label="download button"
              className="card__button_type_svg"
            />
          </button>
          
          <button type="button" className=" card__button">
            <BookmarkAdded
              // height="24"
              // width="24"
              aria-label="download button"
              className="card__button_type_svg"
            />
          </button>
          <button type="button" className="card__button">
            <TurnedInNotIcon
              sx={{
                color: "rgba(140, 139, 139, 0.7)",
                "&:hover": { color: "green" },
              }}
            />
          </button>
          {/* <button type="button" className="card__button">
            <BookmarkIcon
              height="19"
              width="14"
       
              aria-label="download button"
              className="card__button_type_svg card__button_type_bookmark"
            />
          </button> */}

          {/* <button className="card__button card__button_type_download"></button> */}
          <button className="card__button card__button_type_download"></button>
          <button className="card__button card__button_type_bookmark"></button>
        </section>
      </li>
    </>
  );
}

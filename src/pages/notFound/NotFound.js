import React from "react";
import "./notFound.css";
import { SentimentVeryDissatisfied } from "@mui/icons-material";

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found</h2>
        <SentimentVeryDissatisfied
          sx={{ fontSize: "52px", color: "white" }}
          aria-label="sad face graphic"
        />
      </div>
    </>
  );
}

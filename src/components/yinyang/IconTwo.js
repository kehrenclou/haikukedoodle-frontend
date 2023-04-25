//components/yinyang/Icon.js
/* --------------------------------- imports -------------------------------- */
import React from "react";

/* ---------------------------------- Icon ---------------------------------- */

export const IconTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 680.15 680.16"
    {...props}
  >
    <defs>
      <style>
        {".white-dot{fill:#FFF}"}
        {".dark-dot{ fill:rgb(0,0,0,.4)}"}
        {"#yy01:target ~path-yy01{fill:#000}"}
      </style>
    </defs>
    <g id="uuid-3cbb6a75-8333-46b2-9c66-2faf2c96fba2" data-name="Layer 1">
      {/* <circle
        cx={488.85}
        cy={254.76}
        r={35.5}
        className="white-dot"
      /> */}
      <a onClick={() => console.log("clicked-dark")}>
        <g id="yy01" data-name="dark">
          <path
            id="path-yy01"
            d="M478.38 537.59c-92.73-16.35-154.65-104.79-138.3-197.52 16.35-92.73-45.57-181.17-138.3-197.52-83.97-14.81-164.43 34.58-191.02 112.92-.65 2.52-1.26 5.04-1.84 7.57-1.19 5.13-2.26 10.3-3.21 15.52-.15.83-.31 1.65-.46 2.48s-.28 1.66-.42 2.49c-.89 5.22-1.65 10.45-2.29 15.68-.32 2.57-.6 5.15-.86 7.74-3.65 36.6-1.35 73.18 6.9 109.06 9.83 42.85 27.66 82.91 52.99 119.09 25.33 36.17 56.88 66.63 93.79 90.52 38.19 24.74 80.49 41.32 125.69 49.29 45.2 7.97 90.62 6.85 134.97-3.33 42.85-9.83 82.91-27.66 119.09-52.99 36.17-25.33 66.63-56.88 90.52-93.79 20.02-30.9 34.69-64.48 43.78-100.13C642.82 503 562.37 552.39 478.39 537.59ZM138.59 304.54c3.27-18.54 20.96-30.93 39.5-27.66 18.54 3.27 30.93 20.96 27.66 39.5-3.27 18.54-20.96 30.93-39.5 27.66-18.54-3.27-30.93-20.96-27.66-39.5Z"
            data-name="uuid-03e6ed0d-e1f7-4550-96cf-6ffe36696160"
            style={{
              // fill: "#000",
              fill: "rgb(0,0,0,.4)",
            }}
          />
        </g>
      </a>
      <a onClick={() => console.log("clicked- white")}>
        <g id="yy02" data-name="light">
          <path
            id="uuid-c2b9d317-8bf9-441e-8c9c-fa70009ecf3e"
            d="M264.15 8.58c-42.85 9.83-82.91 27.66-119.09 52.99-36.17 25.33-66.63 56.88-90.52 93.79-20.02 30.9-34.69 64.49-43.78 100.13 26.59-78.33 107.04-127.72 191.02-112.92 92.73 16.35 154.65 104.79 138.3 197.52-16.35 92.73 45.57 181.17 138.3 197.52 83.97 14.81 164.43-34.58 191.02-112.92.64-2.47 1.24-4.95 1.81-7.43.02-.05.03-.09.03-.14 1.19-5.13 2.26-10.3 3.21-15.52.16-.83.31-1.65.46-2.48s.28-1.66.42-2.49c.89-5.22 1.65-10.45 2.29-15.68 0-.05.02-.09.01-.14.31-2.52.6-5.06.84-7.6 3.65-36.6 1.35-73.18-6.9-109.06-9.83-42.85-27.66-82.91-52.99-119.09-25.33-36.17-56.88-66.63-93.79-90.52C486.6 29.8 444.3 13.22 399.1 5.25c-45.2-7.97-90.62-6.85-134.97 3.33Zm277.42 367.03c-3.27 18.54-20.96 30.93-39.5 27.66-18.54-3.27-30.93-20.96-27.66-39.5 3.27-18.54 20.96-30.93 39.5-27.66 18.54 3.27 30.93 20.96 27.66 39.5Z"
            data-name="uuid-711cd943-1c84-4f13-8877-16f7d0de42e9"
            style={{
              fill: "#fff",
            }}
          />
        </g>
      </a>
      <circle
        id="uuid-fbe02997-c76a-413b-bd17-9196a2674239"
        cx={509.7}
        cy={371.51}
        r={35.5}
        className="dark-dot"
        data-name="DOT"
      />
      <circle
        id="uuid-1ec179de-7b3b-4559-ba70-dd92c0ea56bc"
        cx={171.27}
        cy={309.8}
        r={35.5}
        className="white-dot"
        data-name="DOT"
      />
    </g>

    <g id="uuid-524dfe5a-0264-4c8a-b08b-ff9dc6eb6c78" data-name="text">
      <text
        style={{
          fontFamily: "Montserrat",
          //   fontFamily: "MyriadConceptRoman-SemiExtended,&quot",
          fontSize: "48px",
          //   fontVariationSettings: "&quot",
          fontWeight: 500,
          fill: "#2b2d42",
        }}
        // transform="matrix(.77 0 0 1 426.05 245.26)"
        transform="matrix(.77 0 0 1 406.05 245.26)"
      >
        <tspan x={0} y={0}>
          {"CREATE A"}
        </tspan>
        <tspan
          x={83.43}
          y={0}
          style={{
            letterSpacing: "-.08em",
          }}
        ></tspan>
        {/* <tspan x={111.21} y={0}>
          {"A "}
        </tspan> */}
        <tspan x={-31.79} y={56.69}>
          {"HAIKU SONG"}
        </tspan>
      </text>
      <text
        style={{
          fontFamily: "Montserrat",
          //   fontFamily: "MyriadConceptRoman-SemiExtended,&quot",
          fontSize: "48px",
          //   fontVariationSettings: "&quot",
          fill: "#fff",
        }}
        transform="matrix(.77 0 0 1 130.84 456.08)"
      >
        <tspan x={0} y={0}>
          {"READ A "}
        </tspan>
        <tspan x={-53.19} y={56.69}>
          {"HAIKU SONG"}
        </tspan>
      </text>
    </g>
  </svg>
);
export default IconTwo;

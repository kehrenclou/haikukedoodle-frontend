import React from "react";
export default function TextLeft({ classname, id }) {
  return (
    <>
      <g id={id} className={classname}>
        <text transform="matrix(.77 0 0 1 130.84 456.07)">
          <tspan x={0} y={0}>
            {"READ"}
          </tspan>
          <tspan xmlSpace="preserve" x={133.36} y={0}>
            {"  A"}
          </tspan>
          <tspan x={173.41} y={0} />
        </text>
        <text transform="matrix(.77 0 0 1 89.88 512.76)">
          <tspan x={0} y={0}>
            {"HAIKU SONG"}
          </tspan>
        </text>
      </g>
    </>
  );
}

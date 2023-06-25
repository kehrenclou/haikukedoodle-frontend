import React from "react";
export default function TextRight({ classname, id }) {
  return (
    <>
      <g id={id} className={classname}>
        <text transform="matrix(.77 0 0 1 414.05 236.25)">
          <tspan x={0} y={0}>
            {"CREATE"}
          </tspan>

          <tspan xmlSpace="preserve" x={191.13} y={0}>
            {"  A"}
          </tspan>
        </text>
        <text transform="matrix(.77 0 0 1 390.89 293.08)">
          <tspan x={0} y={0}>
            {"HAIKU SONG"}
          </tspan>
        </text>
      </g>
    </>
  );
}

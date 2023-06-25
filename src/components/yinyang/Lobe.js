import React from "react";
export default function Lobe({ classname, d, id }) {
  return (
    <>
      <path d={d} className={classname} id={id} />
    </>
  );
}

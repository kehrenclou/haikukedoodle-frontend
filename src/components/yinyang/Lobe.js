export default function Lobe({ lobecolor, d,id }) {
  return (
    <>
      <path
        d={d}
        className={lobecolor}
        id={id}
        // className="cls-3"
      />
    </>
  );
}

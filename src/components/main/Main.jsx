//components/main.jsx
/* --------------------------------- imports -------------------------------- */

import flower from "../../images/flower-min.svg";

/* ---------------------------------- Main ---------------------------------- */
export const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main__logo">
          <div className="main__text_logo">Haiku</div>

          <img
            className="main__flower"
            src={flower}
            alt="haikukedoodle  flower"
          />
          <div className="main__text_logo">kedoodle</div>
        </div>
      </div>
    </>
  );
};

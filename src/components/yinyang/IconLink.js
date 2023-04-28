//components/yinyang/LinkCreate.js
/* --------------------------------- imports -------------------------------- */

import { useNavigate } from "react-router-dom";
/* ---------------------------------- Home ---------------------------------- */

export default function IconLink({ children, onClick }) {
  let navigate = useNavigate();
  function clickHandler() {
    navigate("/create");
  }
  return (
    <>
      <a className="icon-link" onClick={onClick}>
        {children}
      </a>
    </>
  );
}

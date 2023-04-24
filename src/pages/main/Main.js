//components/main.jsx
/* --------------------------------- imports -------------------------------- */
import yyang from "../../images/yingyang.svg";
import "./main.css";
import Header from "../../components/header/Header";

/* ---------------------------------- Main ---------------------------------- */
export default function Main() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="main__body">
          <h1 className="main__heading">Haiku song generator using chat GPT</h1>
          <img src={yyang} alt="Ying yang buttons" className="main__image" />
        </div>
      </div>
    </>
  );
}

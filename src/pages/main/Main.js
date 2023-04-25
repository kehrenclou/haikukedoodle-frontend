//components/main.jsx
/* --------------------------------- imports -------------------------------- */
import yyang from "../../images/yingyang3.svg";
import "./main.css";
import Header from "../../components/header/Header";
import Yinyang from "../../components/yinyang/Yinyang";
import Icon from "../../components/yinyang/Icon";
import { IconTwo } from "../../components/yinyang/IconTwo";

/* ---------------------------------- Main ---------------------------------- */
export default function Main() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="main__body">
          <h1 className="main__heading">Haiku song generator using chat GPT</h1>
          <div className="main__image">
            <IconTwo className="main__image" />
          </div>
          {/* <Yinyang /> */}
          {/* <img src={yyang} className="main__image" /> */}
          {/* <img src={yyang} alt="Ying yang buttons" className="main__image" /> */}
        </div>
      </div>
    </>
  );
}

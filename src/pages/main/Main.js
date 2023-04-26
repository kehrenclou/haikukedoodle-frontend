//components/main.jsx
/* --------------------------------- imports -------------------------------- */
import yyang from "../../images/yingyang3.svg";
import "./main.css";
import Header from "../../components/header/Header";
import Yinyang from "../../components/yinyang/Yinyang";
import Icon from "../../components/yinyang/Icon";
import { IconThree } from "../../components/yinyang/IconThree";

/* --------------------------------- imports -------------------------------- */
import SubjectForm from "../../components/form/subjectForm";
/* ---------------------------------- Main ---------------------------------- */
export default function Main() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="main__body">
          <h1 className="main__heading">Haiku song generator using chat GPT</h1>
          <div>
            {/* <div className="main__image"> */}
            {/* <IconThree width="400px" /> */}
            <SubjectForm />
          </div>
        </div>
      </div>
    </>
  );
}

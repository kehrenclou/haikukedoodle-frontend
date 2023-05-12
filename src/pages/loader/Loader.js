import "./loader.css";
export default function Loader() {
  return (
    <>
      <div className="loader">
        <h1 className="loader__heading">One moment please...</h1>
        <p className="loader__text loader__animate loader__text_sub">Code and algorithms,</p>
        <p className="loader__text loader__animate_2 loader__text_sub">Aftifical mind at work,</p>
        <p className="loader__text loader__animate_3 loader__text_sub">Haiku born from bytes...</p>
      </div>
    </>
  );
}

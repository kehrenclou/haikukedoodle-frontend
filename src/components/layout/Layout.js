import "./layout.css";

export default function Layout({children}) {
  return (
    <>
      <div className="layout">{children}</div>
    </>
  );
}

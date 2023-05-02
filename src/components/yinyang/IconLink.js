//components/yinyang/LinkCreate.js
/* --------------------------------- imports -------------------------------- */

/* ---------------------------------- Home ---------------------------------- */

export default function IconLink({ children, onClick, href }) {
  return (
    <>
      <a className="icon-link" onClick={onClick} href={href}>
        {children}
      </a>
    </>
  );
}

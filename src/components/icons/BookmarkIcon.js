import * as React from "react"
const BookmarkIcon = ({width="",height="",fill="",outline="",...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}//24
    height={height}//24
    fill="none"//none
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill={fill} //#434343
      fillRule="evenodd"
      d="M15.934 22.704a.133.133 0 0 1 .132 0l8.27 4.726a.667.667 0 0 0 .997-.579V4.667A.667.667 0 0 0 24.667 4H7.333a.667.667 0 0 0-.666.667V26.85c0 .512.553.833.997.579l8.27-4.726Zm.132-3.532a.133.133 0 0 0-.132 0l-6.001 3.43a.133.133 0 0 1-.2-.116V7.2c0-.074.06-.133.134-.133h12.266c.074 0 .134.06.134.133v15.286c0 .102-.111.166-.2.116l-6-3.43Z"
      clipRule="evenodd"
    />
  </svg>


)
export default BookmarkIcon
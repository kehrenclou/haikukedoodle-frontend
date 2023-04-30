import React from "react";

const DownloadSvg = ({stroke="",width="",height="",fill="",...props}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}//24
      height={height}//24
      fill={fill}//none
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        stroke={stroke}//#434343
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 3v9m0 0L6 8m4 4 4-4M4 13v4h12v-4"
      />
    </svg>
  )
  export default DownloadSvg
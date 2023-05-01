import * as React from "react";
const BookmarkAdded = ({fill,...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path fill={fill} d="M0 0h24v24H0z" />
    <path d="m19 21-7-3-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9V21zM17.83 9 15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z" />
  </svg>
);
export default BookmarkAdded;

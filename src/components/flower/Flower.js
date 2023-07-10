
import * as React from "react";


export const Flower = ({width="",height="",colora="",colorb="",colorc="",...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      //petal fill
      fill={colora}

      d="M98.742.573c-23.492-5.25-27.29 26.892-26.252 43.62C61.696 30.62 45.22 3.892 21.602 17.535 6.8 28.782 43.403 51.276 63.556 61.117 1.646 51.356-3.625 71.573 1.478 82.903c13.167 22.155 48.459 4.28 64.46-7.426-15.97 17.05-40.451 46.996-12.176 56.954 27.952 5.52 33.983-30.49 33.11-48.637 12.479 14.676 43.593 33.032 59.214 19.785 17.421-19.395-22.24-28.744-44.248-30.995 20.215-.333 55.486-9.431 51.91-25.513-4.473-20.112-45.013-5.937-63.151 3.352 12.504-14.43 31.638-44.6 8.145-49.85Z"
    />
    <path
      //lines in petals
      fill={colorb}
      fillRule="evenodd"
      d="M97.833 10.771c.233.336.095.766-.309.96-.425.205-.99.723-1.658 1.64-.65.891-1.337 2.073-2.044 3.49-1.414 2.83-2.878 6.524-4.29 10.544-2.82 8.034-5.404 17.298-6.92 23.375-.094.38-.541.624-.998.545-.457-.08-.75-.452-.655-.832 1.522-6.1 4.115-15.403 6.953-23.484 1.417-4.039 2.902-7.79 4.35-10.69.724-1.449 1.448-2.702 2.16-3.679.693-.952 1.442-1.735 2.257-2.127.404-.194.92-.078 1.154.258Zm-48.81 24.184c6.356 4.87 11.676 10.386 14.641 13.99.264.32.166.758-.219.977-.385.22-.91.137-1.174-.183-2.903-3.53-8.142-8.962-14.391-13.75-6.274-4.806-13.448-8.873-20.223-9.825-.46-.065-.77-.428-.693-.81.077-.384.512-.642.972-.577 7.277 1.023 14.755 5.326 21.087 10.178Zm94.633 16.226c-.003.389-.383.701-.849.698-7.889-.046-17.825 1.925-27.092 4.44-9.251 2.51-17.755 5.537-22.746 7.555-.42.17-.925.024-1.13-.325-.203-.35-.029-.77.39-.94 5.056-2.043 13.631-5.096 22.961-7.627 9.312-2.527 19.459-4.557 27.627-4.509.466.003.842.32.839.708ZM57.704 68.328c.017.388-.346.714-.812.728-5.693.172-14.849.946-23.771 2.71-8.967 1.772-17.515 4.51-22.167 8.513a.968.968 0 0 1-1.194.016c-.335-.27-.344-.715-.02-.994 5.014-4.315 13.985-7.123 22.989-8.903 9.048-1.788 18.316-2.573 24.1-2.747.466-.014.858.29.875.677Zm35.951 10.883c.283-.308.813-.367 1.184-.131 4.066 2.587 11.319 6.485 19.812 9.732 8.502 3.251 18.171 5.82 27.09 5.815.466 0 .845.314.846.703 0 .388-.377.703-.843.703-9.269.005-19.196-2.654-27.797-5.943-8.611-3.293-15.972-7.246-20.133-9.893-.37-.236-.442-.677-.159-.986Zm-19.963 4.551c.459.068.766.433.684.815-1.133 5.353-3.395 13.762-6.503 21.612-1.553 3.925-3.325 7.725-5.28 10.94-1.947 3.201-4.115 5.885-6.492 7.515-.36.246-.892.203-1.189-.097-.297-.3-.245-.743.115-.989 2.106-1.444 4.146-3.92 6.06-7.065 1.903-3.13 3.644-6.859 5.182-10.746 3.077-7.772 5.321-16.114 6.444-21.415.081-.383.52-.638.979-.57Z"
      clipRule="evenodd"
    />
    <path
      //circle around center of flower
      fill={colorb}
   
      d="M88.325 65.925C87 70.05 81.91 72.497 76.953 71.39c-4.955-1.108-7.898-5.35-6.573-9.474 1.325-4.126 6.416-6.572 11.372-5.464 4.955 1.108 7.898 5.35 6.573 9.474Z"
    />
    <path
      //center flower
      fill={colorc}
      d="M83.431 64.832c-.602 1.875-2.917 2.986-5.17 2.483-2.252-.504-3.59-2.432-2.987-4.307.602-1.875 2.916-2.986 5.17-2.483 2.252.503 3.59 2.431 2.987 4.307Z"
    />
  </svg>
);


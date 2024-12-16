import "normalize.css";
import { createGlobalStyles } from "goober/global";

export const GlobalStyles = createGlobalStyles`
  * {
    box-sizing: border-box;
    font-family: "Inter", "Roboto", sans-serif;
    font-weight: 400;
    color: #162136;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-feature-settings: "clig" off, "liga" off;
  }

@media not all and (pointer: coarse) and (not (-webkit-touch-callout: none)) and (not (-ms-touch-action: none)) {

  * {
    scrollbar-color: #d6d6d6 #F4F5F8;
    scrollbar-width: thin;
  }

  *::-webkit-scrollbar {
    width: 5px;
    height: 0px;
    background-color: #F4F5F8;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #d6d6d6;
    border-radius: 3px;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`;

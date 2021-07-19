import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react"
import { useState } from "react";
import "../Loader.css"
  
const override = css`
    display: block;
    margin: auto;
    color: red;
    `;

export default function Loader() {

  return <PuffLoader size={500} css={override}
          />;
}
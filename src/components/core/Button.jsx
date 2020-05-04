import React from "react";

export default function coreButton(props) {
  return (
    <button type="button" className="button col-12 font-weight-bold" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

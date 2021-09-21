import PropTypes from "prop-types";
import React from "react";
import css from "./Modal.module.css";


export default function Modal({ onClick, largeImageURL, alt }) {
  return (
    <div className={css.Overlay} onClick={onClick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
}
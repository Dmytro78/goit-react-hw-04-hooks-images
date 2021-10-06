import React from "react";
import Loader from "react-loader-spinner";

import s from "./Loader.module.css";

const Spinner = () => {
  return (
    <div className={s.Spinner}>
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Spinner;

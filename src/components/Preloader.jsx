import React from "react";
import { Spin } from "antd";
import s from "./index.module.css";

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <Spin tip="Loading..." />
    </div>
  );
};

export default Preloader;

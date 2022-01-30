import React from "react";
import { Layout } from "antd";
import s from "./index.module.css";

const { Header } = Layout;

const AppBar = () => {
  return <Header className={s.header}>React Movies</Header>;
};

export default AppBar;

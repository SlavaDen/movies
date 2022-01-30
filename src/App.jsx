import React from "react";
import { Layout, Input } from "antd";
import AppBar from "./layout/AppBar";
import Main from "./layout/Main";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Layout>
        <AppBar />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Main />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

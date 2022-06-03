import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Layout, Menu } from "antd";
import Login from "./components/Login";
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "50px", marginTop: 64 }}
      >
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}

export default App;

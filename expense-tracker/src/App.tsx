import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Layout, Menu } from "antd";
import Login from "./components/Login";
import Categories from "./components/Categories";
import AppHeader from "./components/AppHeader";
import Records from "./components/Records";
import Logout from "./components/Logout";
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <AppHeader />
      <Content
        className="site-layout"
        style={{ padding: "50px", marginTop: 64 }}
      >
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/records" element={<Records />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}

export default App;

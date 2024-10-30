import React from "react";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <div style={{backgroundColor: "#242424", height: "100vh"}}>
      <Header />
      <h1 style={{color: "white"}}>LoginPage</h1>
      <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

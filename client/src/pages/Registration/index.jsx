import React from "react";
import Header from "../../components/Header";
import RegistrationForm from "../../components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div style={{backgroundColor: "#242424", height: "100vh"}}>
      <Header />
      <h1 style={{color: "white"}}>RegistrationPage</h1>
      <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;

import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>Bem vindo aos hooks!</h1>
      <Link to="/useState">Ir para o Site UseStatePage</Link><br/><br/>
      <Link to="/useEffect">Ir para o Site UseStatePage</Link>
    </>
  );
};

export default HomePage;

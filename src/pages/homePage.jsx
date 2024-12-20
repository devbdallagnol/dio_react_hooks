import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>Bem vindo aos hooks!</h1>
      <Link to="/useState">Ir para o Site UseStatePage</Link><br/><br/>
      <Link to="/useEffect">Ir para o Site UseEffectPage</Link><br/><br/>
      <Link to="/useCallback">Ir para o Site UseCallbackPage</Link><br/><br/>
      <Link to="/useMemo">Ir para o Site UseMemoPage</Link><br/><br/>
    </>
  );
};

export default HomePage;

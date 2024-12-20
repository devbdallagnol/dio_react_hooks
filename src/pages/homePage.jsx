import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/useContext";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 10px 10px;
  padding: 15px;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  border: 1px solid #00ff00;
  border-radius: 50px;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
  }
`;

const Title = styled.h1`
  color: #333;
`;

export const HomePage = () => {
  const user = useContext(UserContext);
  return (
    <>
      <Title>Bem vindo aos hooks, {user.userName}!</Title>
      <hr/>
      <StyledLink to="/useState">Ir para o Site UseStatePage</StyledLink><br/>
      <StyledLink to="/useEffect">Ir para o Site UseEffectPage</StyledLink><br/>
      <StyledLink to="/useCallback">Ir para o Site UseCallbackPage</StyledLink><br/>
      <StyledLink to="/useMemo">Ir para o Site UseMemoPage</StyledLink><br/>
      <StyledLink to="/useRef">Ir para o Site UseRefPage</StyledLink>
    </>
  );
};

export default HomePage;

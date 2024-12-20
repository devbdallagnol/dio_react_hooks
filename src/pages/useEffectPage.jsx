import react, { useState } from "react";

export const UseEffectPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2>Bem vindo ao UseEffectPage</h2>
      <input
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </>
  );
};

export default UseEffectPage;

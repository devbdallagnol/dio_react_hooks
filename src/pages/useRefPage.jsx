import { useState, useRef } from "react";

export const UseRefPage = () => {
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  return (
    <>
      <h1>Bem vindo a UseRefPAge</h1>
      <input
        ref={inputRef}
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          setMessage("");
        }}
      >
        Enviar
      </button>
    </>
  );
};

export default UseRefPage;

// UseRef - referencia o elemento completo
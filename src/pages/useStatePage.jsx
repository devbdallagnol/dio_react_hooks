import React, { useState } from "react";

export const UseStatePage = () => {
  const [count, setcount] = useState(0);
  return (
    <>
      <h2> Bem vindo ao UseStatePage</h2>
      <p>{count}</p>
    </>
  );
};

export default UseStatePage;

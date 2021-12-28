import { useState } from "react";

const State = () => {
  const [isGreen, setIsgreen] = useState(true);

  const changeColor = () => {
    setIsgreen(!isGreen);
  };

  return (
    <>
      <h2
        onClick={() => changeColor()}
        style={{
          textAlign: "center",
          cursor: "pointer",
          color: isGreen ? "green" : "red",
        }}
      >
        I love using React JS
      </h2>
    </>
  );
};

export default State;

import React, {useState, useEffect } from "react";


function PropsCounter({ time }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, time);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
}

export default PropsCounter;

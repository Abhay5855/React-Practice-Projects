import { useState } from "react/cjs/react.development";

const Convert = () => {
  const [binaryText, setBinaryText] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [decimalText, setDecimalText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setBinaryText("");

    if (binaryText.match("^[0-1]+$") === null) {
      return setErrorMessage("Enter only zero or one");
    }

    setErrorMessage("");

    // Reverse and add the binary text into the array

    const reverseBinary_text = binaryText.split("").map(Number).reverse();

    // console.log(reverseBinary_text);

    // Now add all elements with power of 2

    const result = reverseBinary_text.reduce((acc, curr, idx) => {
      return acc + curr * Math.pow(2, idx);
    }, 0);

    setDecimalText(result);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Either 0 or 1"
            value={binaryText}
            onChange={(e) => setBinaryText(e.target.value)}
          />

          <button>Convert</button>

          {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}

          <h1>{decimalText}</h1>
        </form>
      </div>
    </>
  );
};

export default Convert;

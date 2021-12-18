const Convert = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input />

          <button>Convert</button>

          <h1>{}</h1>
        </form>
      </div>
    </>
  );
};

export default Convert;

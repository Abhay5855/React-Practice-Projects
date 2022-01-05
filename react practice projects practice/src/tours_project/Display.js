const Display = ({ place }) => {
  const Display_places = place.map((data, idx) => {
    return (
      <div key={idx} style={{ maxWidth: "500px", margin: "1rem" }}>
        <div style={{ border: "0.4px solid black" }}>
          <img
            src={data.image}
            alt="img"
            style={{ width: "200px", height: "200px" }}
          />

          <p>Price : {data.price}</p>

          <p>{data.info}</p>

          <button style={{margin : '0 auto'}}>Not Interested</button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>{Display_places}</div>
    </>
  );
};

export default Display;

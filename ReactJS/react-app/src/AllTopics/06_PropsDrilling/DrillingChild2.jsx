const DrillingChild2 = ({ str, setData }) => {
  return (
    <div>
      <h1>Child 2</h1>
      <h2>{str}</h2>
      <button onClick={() => setData("Hii Parent")}>send Data</button>
    </div>
  );
};

export default DrillingChild2;

import DrillingChild2 from "./DrillingChild2";

const DrillingChild1 = ({ str, setData }) => {
  return (
    <div>
      <h1>Child 1</h1>
      <DrillingChild2 str={str} setData={setData} />
    </div>
  );
};

export default DrillingChild1;

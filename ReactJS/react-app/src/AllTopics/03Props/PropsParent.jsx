import PropsChild from "./PropsChild";

const PropsParent = () => {
  let data1 = "Hii";
  let data2 = "hello";
  console.log(<PropsChild data1={data1} data2={data2} />);
  return (
    <div>
      <h1>PropsParent</h1>

      <PropsChild data1={data1} data2={data2} />
    </div>
  );
};

export default PropsParent;

const PropsChild = (props) => {
  console.log(props);
  return (
    <div>
      <h1>PropsChild {props.data1}</h1>
      <h2>PropsChild02 {props.data2}</h2>
    </div>
  );
};

export default PropsChild;

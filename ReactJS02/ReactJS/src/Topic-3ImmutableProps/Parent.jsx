import Child from "./Child";


const Parent = () => {
  //&when i will pass firstName as props then a shallow copy of this firstName will go, not the original firstName will go.A child cannot change the props received from it's parent.Props are immutability.
  //   const firstName = "Brock";
  //   const lastName = "Lesnar";
  const user = {
    firstName: "Brock",
    lastName: "Lesnar",
  };
  return (
    <div>
      <Child user={user} />
    </div>
  );
};

export default Parent;

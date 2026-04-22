import Card from "./Card";

const Parent = () => {
  const player = {
    username: "Rohit Sharma",
    age: 38,
    team: "MI",
    jersey: 45,
    skill: ["batting", "bowling", "captaincy"],
    address: {
      country: "India",
      state: "Maharashtra",
    },
  };
  console.log(<Card {...player} />);
  console.log(<Card player={player} />);
  const player2 = {
    username: "Virat Kohli",
    age: 36,
    team: "RCB",
    jersey: 18,
    skill: ["batting", "captaincy"],
    address: {
      country: "India",
      state: "Delhi",
    },
  };

  const player3 = {
    username: "MS Dhoni",
    age: 40,
    team: "CSK",
    jersey: 7,
    skill: ["batting", "captaincy", "wicketkeeping"],
    address: {
      country: "India",
      state: "Jharkhand",
    },
  };

  console.log({ ...player });
  return (
    <div className="parent-component">
      {/* <Card /> */}
      {/* {Card(18)} === this 18 argument here is a props over here.but this a javascript way.In this way we will receive 18 directly in the props variable as a object.. */}

      {/* below is the react way of passing the props/arguments === pass props as the key-value pairs */}

      {/* instead of string everything will be passed in the form of curly braces */}
      {/* <Card
        jersey={18}
        age={36}
        team="RCB"
        username="Virat Kohli"
        skill="batting"
      /> */}
      {/* first player before equal sign will become key in the props object */}
      {/* <Card player={player} /> */}
      {/* Best way of passing the props  */}
      <Card {...player} />
      <Card {...player2} />
      <Card {...player3} />
    </div>
  );
};

export default Parent;

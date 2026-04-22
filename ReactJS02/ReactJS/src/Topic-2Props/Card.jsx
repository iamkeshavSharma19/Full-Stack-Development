const Card = (props) => {
  console.log(props);
  const { username, age, team, skill, jersey, address } = props;
  const { country, state } = address;
  //&But there is an another best also of passing the props === which is nothing but destructuring on the fly.. === {{username, age, team, skill.....}}

  //~But there is one more way of passing the props. that is spread operator <Card {...player} />
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "300px",
          padding: "20px 30px",
          marginTop: "20px",
        }}
      >
        <h4>Username: {username}</h4>
        <h4>Age: {age}</h4>
        <h4>Team: {team}</h4>
        <h4>Skill: {skill.join(",")}</h4>
        <h4>Jersey: {jersey}</h4>
        <h4>Country: {country}</h4>
        <h4>State: {state}</h4>
      </div>
    </div>
  );
};

export default Card;

const Card = () => {
  const user = {
    username: "Virat Kohli",
    team: "RCB",
    skills: "Batting",
  };

  //   const isRetired = false;
  const isRetired = {
    val: "false",
  };

  return (
    //&You can also write Fragement like this === this is also known as empty Fragement.This is the new way,React.Fragement is the older way.
    <>
      {/* Self closing Tags */}
      <img src="hello" alt="image not found" />
      <h1>Hello Developers 🚀</h1>
      <h3>UserName: {user.username}</h3>
      <h3>Team: {user.team}</h3>
      <h3>Skills: {user.skills}</h3>
      {/* boolean value is not printed in the JSX,even the object is not printed inside JSX. */}
      <h4>isRetired: {isRetired.val}</h4>
    </>
  );
};

export default Card;

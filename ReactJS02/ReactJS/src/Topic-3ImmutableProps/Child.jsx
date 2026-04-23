const Child = (props) => {
  console.log(props);
  //props.firstName = "Roman"; //! Uncaught TypeError: Cannot assign to read only property 'firstName' of object '#<Object>'
  props.user.firstName = "Roman"; //&Allowed.props are immutable.But here i am not changing the props object,I am changing the user property of the props object.It is allowed , but i cannot change the whole props {} object.I cannot replace the whole object and put a new object inplce of it.this is not allowed.this is called as immutability.Bahar wale object mein changes nhi kar sakte,par andar wali cheezen change kar sakta hoon.A child component cannot modify it's own props.
  //   console.log(props);
  return <div>Child</div>;
};

export default Child;

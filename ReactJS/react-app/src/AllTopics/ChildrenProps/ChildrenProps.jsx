const ChildrenProps = ({ children }) => {
  console.log(children);
  return (
    <div>
      <h1>Example Children Props</h1>
      {children}
    </div>
  );
};

export default ChildrenProps;

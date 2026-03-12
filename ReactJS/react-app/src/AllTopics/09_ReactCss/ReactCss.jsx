import Navbar from "./Navbar";

const ReactCss = () => {
  return (
    <div>
      <h1>Learn CSS In React</h1>
      <div
        style={{
          backgroundColor: "red",
          color: "white",
        }}
      >
        style me using inline css
      </div>
      {/* one css file for all the components */}
      <section className="container">style me using global css</section>
      <Navbar />
    </div>
  );
};

export default ReactCss;

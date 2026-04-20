const Parent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        boxShadow: "0px 0px 4px 1px lightgrey",
        width: "920px",
        padding: "0px 25px",
      }}
    >
      <img src="hello" alt="image not found" />

      <h2>FirstName: Keshav</h2>
      <h2>LastName: Sharma</h2>
      <h3>Email: Keshav123@gmail.com</h3>
    </div>
  );
};

export default Parent;

//&JSX is HTML like syntax..

//&Interview Questions ===
//&What is React ?? === React is an open source library developed by Meta Facebook for building user interfaces,particularly Single Page Applications (SPA's).

//?Core Features Of React === 1.)Component Based Architecture 2.)Virtual DOM 3.)JSX(Javascript XML) 4.)One-way Data Binding 5.)Hooks 6.)React Context API 7.)React Server Components (RSC) 8.)Concurrent Mode 9.)Reconcilliation 10.)Large Ecosystem.

//&What is JSX ==> JSX(Javascript XML) is a syntax extension for Javascript that let's you write HTML like code inside Javascript.It was introduced by React to make building UI easier and more readable.

//~JSX Rules == 1)Returns a single parent element. 2)Every tag must be closed,including self-closing ones like ==> <input />, <img /> and <br />.3)Use className instead of class. 4.)Use camelCase for Attributes 5.)Inline styles as Objects. 6.)use htmlFor. 7.)Javascript expressions in {}. for ex = <h1>{name}</h1>, <p>{2 + 2}</p> 8.)Inline Styles as Objects. 9.)Comments inside {/* */} 9.)No if/else Directly - Use Ternary or && forex ==> {isLoggedIn ? <DashBoard /> : <Shimmer />}

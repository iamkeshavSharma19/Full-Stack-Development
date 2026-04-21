//&Arrow Function === Arrow Function Component.
//&A normal plain javascript function which returns some piece of jsx is known as Function Based Component (FBC).

//& Q === What is JSX ???What are the rules to write JSX ?
//&1) JSX stands for Javascript XML
//&2) It is a syntax for javascript that allows you to write HTML-like code inside javascript files
//&3) It was introduced by Facebook [Meta] for React.

//~Rules for writing JSX ===
//~ 1.Returns Only One Root Element.
//~ 2.All Tags (including Self-Closing Tags) Must Be Properly closed.
//~ 3.Use CamelCase for Attributes (ex ==> onClick, onChange)
//~ 4.Javascript Expressions in {}
//~ 5.To write comments in JSX use {/* */}
//~ 6.Don't use if-else directly inside JSX instead use ternary or logical operators
//~ 7.Use className instead of class.
//~ 8.Use htmlFor instead of for in label tag.

//? Q.3 === What is a component in React?
//? A component in React is a reusable (self-contained) piece of code that returns some piece of JSX.

//?It is of 2 types ===

//? 1.Class Based Components (CBC) ===
//? 1)A class Based component is a Javascript class that extends React.Component.
//? 2) It has render() method to return JSX.
//? 3) It was the traditional way of writing React components before 2019.

//* Function Based Components (FBC) ===
//* 1.A function based component is a simple Javascript function which returns some piece of JSX.
//* 2.It is now the recommened and most popular way to write components in the modern React.

// import Card from "./Topic-1RulesOfJsx/Card";
import List from "./Topic-1RulesOfJsx/List";
import React from "react";
import Card from "./Topic-1RulesOfJsx/Card";
import Cards from "./Task_01Card/Cards";
Cards;

export const App = () => {
  return (
    <React.Fragment>
      {/* <Card />
      <List /> */}
      <Cards />
    </React.Fragment>
  );
};

export default App;

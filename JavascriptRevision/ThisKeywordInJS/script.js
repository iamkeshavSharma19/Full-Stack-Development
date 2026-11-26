"use strict";

console.log(this);

function x() {
  console.log(this); //undefined
}

x();
window.x();

//! this inside the object's method

const obj = {
  a: 10,

  x: function () {
    console.log(this);
  },
};

obj.x();

//!this inside DOM element === reference to the html element.

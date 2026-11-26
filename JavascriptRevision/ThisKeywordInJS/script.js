"use strict";

console.log(this);

function x() {
  console.log(this);//undefined
}

x();
window.x();


//! this inside the object's method


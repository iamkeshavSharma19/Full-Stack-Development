console.log(`Call, Apply And Bind In JS`);

const myName = {
  firstName: "Keshav",
  lastName: "Sharma",
};

const myName2 = {
  firstName: "Brock",
  lastName: "Lesnar",
};

const printFullName = function (hometown, state) {
  console.log(this);

  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state,
  );
};

printFullName.call(myName, "Ludhiana", "Punjab");
printFullName.call(myName2, "Missisaga", "Canada");

printFullName.apply(myName2, ["Missisaga", "Canada"]);

//?BIND IN JS

// bind method
let printName = printFullName.bind(myName, "Vancouver", "Canada");
console.log(printName);
printName();

const obj1 = {
  a: 10,
  // arrow function
  x: () => {
    console.log(this);
  },
};
obj1.x();

const obj2 = {
  a: 10,
  // enclosing lexical context
  x: function () {
    const y = () => {
      console.log(this); // obj2
    };
    y();
  },
};

obj2.x();

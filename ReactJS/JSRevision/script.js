import App from "./functions.js";
import { NavBar } from "./functions.js";

//?explicit return
const greet = () => {
  return "welcome";
};

console.log(greet());

//?implicit return
const sum = (n1, n2) => n1 + n2;
console.log(sum(10, 5));

//!function useState ==> It is basically an inbuilt function which is present in ReactJS
function useState(initialState) {
  return [initialState, () => {}];
}

const [state, setState] = useState("hello");
console.log(state);
console.log(setState);

let arr = [10, 20, 30, 40];
arr.forEach((ele, idx, arr) => {
  console.log(ele, idx, arr);
});

console.log(App());
console.log(NavBar());

console.log("hello");

let str = "Keshav";
let i = 0;
console.log(str.length - 1);
let j = str.length - 1;

while (i < j) {
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
  ++i;
  --j;
}

console.log(str);

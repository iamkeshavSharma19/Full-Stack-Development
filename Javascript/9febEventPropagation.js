// When event travels through our DOM Tree is called event propagation.

// 1. Bubbling phase.
// 2. Capturing phase.

// ! addEventListener("event", callbackFunc, useCapture = 0/1)

// ? 0 means bubbling phase (by default)
// ! 1 means capturing phase

// ? Bubbling phase => event travels through child towards parent
// ? Capturing phase => event travels through parent to child
const section = document.querySelector("section");
const article = document.querySelector("article");
const div = document.querySelector("div");

section.addEventListener(
  "click",
  () => {
    console.log("section");
    section.style.backgroundColor = "orange";
  },
  0,
);

article.addEventListener(
  "click",
  () => {
    console.log("article");
    article.style.backgroundColor = "yellow";
  },
  0,
);

div.addEventListener(
  "click",
  (e) => {
    console.log("div");
    div.style.backgroundColor = "red";
    // for stopping the event propagation for stopping the event from going from child to parent

    // use stopPropagation()
    e.stopPropagation();
  },
  0,
);

section.addEventListener(
  "click",
  () => {
    console.log("section");
    section.style.backgroundColor = "orange";
  },
  1,
);

article.addEventListener(
  "click",
  (e) => {
    console.log("article");
    article.style.backgroundColor = "yellow";
    e.stopPropagation();
  },
  1,
);

div.addEventListener(
  "click",
  (e) => {
    console.log("div");
    div.style.backgroundColor = "red";
    // for stopping the event propagation for stopping the event from going from child to parent

    // use stopPropagation()
    // e.stopPropagation();
  },
  1,
);

// stop propagation immediate ==>

div.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("hello div");
});



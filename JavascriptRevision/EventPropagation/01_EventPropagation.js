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
    console.log(`section`);
    section.style.backgroundColor = "orange";
  },
  0,
);

article.addEventListener(
  "click",
  (e) => {
    console.log(e);

    //! In JavaScript, event.stopPropagation() stops an event from moving up or down the DOM tree (bubbling or capturing), while event.stopImmediatePropagation() does that and prevents any remaining event listeners attached to the exact same element from running.

    e.stopImmediatePropagation();
    console.log(`article`);
    article.style.backgroundColor = "yellow";
  },
  0,
);

article.addEventListener(
  "click",
  (e) => {
    console.log(`Article clicked`);
  },
  0,
);

div.addEventListener(
  "click",
  () => {
    console.log(`div`);
    div.style.backgroundColor = "red";
  },
  0,
);

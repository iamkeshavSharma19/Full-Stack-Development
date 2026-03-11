// selecting all the divs
const allDivs = document.querySelectorAll("div");
console.log(allDivs);

allDivs.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.backgroundColor = el.textContent.toLowerCase();
  });

  el.addEventListener("mouseleave", () => {
    el.style.backgroundColor = "white";
  });
});



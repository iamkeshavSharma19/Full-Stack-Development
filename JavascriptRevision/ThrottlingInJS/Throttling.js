const inputTag = document.querySelector("input");

const span = document.querySelector(`h2 span`);

const callApi = (e) => {
  console.log(`API Call made - ${e.target.value}`);
};

inputTag.addEventListener("input", debouncedFunc);

document.addEventListener(`mousemove`, () => {
  span.innerText = ++span.innerText;
});

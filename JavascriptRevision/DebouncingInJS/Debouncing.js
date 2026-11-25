const inputElement = document.querySelector("input");

const handleInput = (e) => {
  console.log(e.target.value);
};

inputElement.addEventListener("input", handleInput);

const inputTag = document.querySelector("input");

const span = document.querySelector(`h2 span`);

const callApi = (e) => {
  console.log(`API Call made - ${e.target.value}`);
};

inputTag.addEventListener("input", callApi);

const updateNumber = throttle(() => {
  span.innerText = ++span.innerText;
}, 5000)

document.addEventListener(`mousemove`, updateNumber);


function throttle (func, delay) {
    return () => {

      func();

    }
}
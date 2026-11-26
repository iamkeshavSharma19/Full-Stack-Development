const inputTag = document.querySelector("input");

const span = document.querySelector(`h2 span`);

const callApi = (e) => {
  console.log(`API Call made - ${e.target.value}`);
};

//! IMPLEMENTING THROTTLING WITH INPUT TAG.
// const throttleCallAPI = (func, delay) => {

//   let timerId = null;


//   return (e) => {

//   if (timerId) return;

//    timerId = setTimeout(() => {
//       timerId = null;
//       func(e)
//     }, delay);
//   }

// }


const throttleFunc = throttle(callApi, 1000);





inputTag.addEventListener("input", throttleFunc);

const updateNumber = throttle(() => {
  span.innerText = ++span.innerText;
}, 2000)

document.addEventListener(`mousemove`, updateNumber);


function throttle (func, delay) {

  let timerId = null;

    return (...args) => {

    if (timerId) return;

    

    timerId = setTimeout(() => {
        timerId = null;
        func(...args);
      }, delay);

    }
}




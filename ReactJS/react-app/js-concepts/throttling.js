//! Throttling.
//? Throttling in javascript.
function throttledMsg(fn, delay = 2000) {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn(...args);
      flag = false;
    }

    setTimeout(() => {
      flag = true;
      console.log("Send another message");
    }, delay);
  };
}

function sendMsg(message) {
  console.log(`Sending... 🚀`, message);
}

const msgWithSlowMode = throttledMsg(sendMsg, 5000);

msgWithSlowMode("Hiii");
msgWithSlowMode("Big fan");
// msgWithSlowMode("Hello world");
// msgWithSlowMode("Learn React");
// msgWithSlowMode("Learn NodeJS");

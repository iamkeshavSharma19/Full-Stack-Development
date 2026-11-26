const inputTag = document.querySelector("input");

const callApi = (e) => {
  console.log(`API Call made - ${e.target.value}`);
};

//~Debounced Call API Function.

const debouncedCallApi = (func, wait) => {

  let timerId;

  return (e) => {

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(e);
    }, wait);
  }

}

const debouncedFunc = debouncedCallApi(callApi, 5000);

inputTag.addEventListener("input", debouncedFunc);

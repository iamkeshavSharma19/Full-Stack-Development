
const inputElement = document.querySelector("input");

const debounce = (func, wait) => {

  // console.log(func); === callApi func
  let timerId;

  return (e) => {
    //console.log(e);
    //?For Delaying the function call Here We have to put the setTimeOut.

    //!setTimeout function returns us a timerId.
    console.log(timerId);
    console.log(clearTimeout(timerId));
    
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(e);
    }, wait);
    console.log(timerId);
    
    // func(e);
  }

}

const callApi = (e) => {
  console.log(`Calling API`, e.target.value);
};


const debouncedCallApi = debounce(callApi, 2000);

console.log(debouncedCallApi);


inputElement.addEventListener("input", debouncedCallApi);



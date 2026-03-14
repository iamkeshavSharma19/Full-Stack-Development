const url = "https://httpbin.org/dela/30";

async function getTodos(url) {
  //?await method directly returns us the res object, which earlier used to come inside the Promise object returned by the fetch method
  try {
    let resObj = await fetch(url);
    let data = await resObj.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getTodos(url);

function sayHii() {
  console.log("Hiii");
}

sayHii();

const p1 = new Promise((resolve, reject) => {
  if (10  < 20) {
    resolve("Namaste Everyone!")
  }

  else {
    reject("Hello World")
  }
})

console.log(p1);

p1.then((data) => {
  console.log(data)
})

p1.catch((data) => {
  console.log(data)
})

p1.finally((data) => {
  console.log(`I am finally executed ${data}`)
})
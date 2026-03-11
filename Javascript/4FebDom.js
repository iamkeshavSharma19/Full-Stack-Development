// ! DOM Selectors are of 5 types, Used to target HTML Elements in javascript.

// ! 1) document.getElementById() => Returns the first element within node's descendants whose ID is elementId.

console.log(document);
const h2Tag = document.getElementById("head2");
console.log(h2Tag);
console.log(h2Tag.textContent);
console.log(h2Tag.innerHTML);
const h3Tags = document.getElementsByClassName("head3");
console.log(h3Tags); // ? HTMLCollection is not a pure array, it is impure array, we cannot use array method on it
console.log(h3Tags[1].textContent);

// ? If we want to check array is pure or not => Array.isArray() returns boolean.
console.log(Array.isArray(h3Tags));
// ! convert impure array to pure array Array.from() returns pure array
console.log(Array.from(h3Tags));

// ! 3) document.getElementByTagName()
const tagsCollection = document.getElementsByTagName("h5"); // []

const tags = document.getElementsByTagName("h3");
console.log(tagsCollection);
console.log(tags); // HTMLCollection

// ! 4) document.querySelector
const ele1 = document.querySelector("#head2");
console.log(ele1);

const ele2 = document.querySelector(".head3");
console.log(ele2);

const ele3 = document.querySelector("h3");
console.log(ele3);

const ele4 = document.querySelector("h3, .head3, #head2");

console.log(ele4); // ! id will be targeted, because priority of id is higher than class and tag (id > class > tag)

const ele5 = document.querySelectorAll(".head3");

console.log(ele5); // ! NodeList => we can use forEach array method in NodeList

// ? Similarities
// ? Both are impure array

// ? Difference between HTMLCollection and NodeList.
// ! Cannot use any of the array methods in HTMLCollection.
// ! HTML Collection is called LIVE COLLECTION.

// ! NODE LIST is called STATIC Collection

// ? Whenever we use getElementsByClassName or tagName we get HTMLCollection, Whenever we use querySelectorAll we get NodeList.


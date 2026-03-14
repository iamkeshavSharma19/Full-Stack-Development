// ! DOM Selectors are of 5 types, Used to target HTML Elements in javascript.

// ! 1) document.getElementById() => Returns the first element within node's descendants whose ID is elementId.

const div = document.querySelector(".div");
console.log(div);

console.log(document);
//~What is i pass that id which does'not exists in my real dom ?????
const h1Tag = document.getElementById("keshav"); //~null
console.log(h1Tag); //~null
const h2Tag = document.getElementById("head2");
console.log(h2Tag);
console.log(h2Tag.textContent);
console.log(h2Tag.innerHTML);

//! document.getElementByClassName
const h2SingleTag = document.getElementsByClassName("h2");
console.log(h2SingleTag);

const h3Tags = document.getElementsByClassName("head3");

//?document.getElementsByClassName always returns us a HTML Collection, HTML Collection is a impure array, it is not a pure array which means we cannot apply array methods on HTML Collection.it always returns us a HTML Collection, even if i passed single element or that element whose class does'not exist.or even if i pass an empty string it will always return me HTML collection i.e empty HTML Collection.Same thing goes for the document.getElementsByTagName().

console.log(h3Tags); // ? HTMLCollection is not a pure array, it is impure array, we cannot use array methods on it
console.log(h3Tags[1].textContent);

// ? If we want to check array is pure or not => Array.isArray() returns boolean.
console.log(Array.isArray(h3Tags));
// ! convert impure array to pure array Array.from() returns pure array
console.log(Array.from(h3Tags));
//!Array.isArray() method returns us a new Pure Array.
const pureArr = Array.from(h3Tags);
console.log(pureArr);
console.log(Array.isArray(pureArr));

// ! 3) document.getElementByTagName()
const tagsCollection = document.getElementsByTagName("h5"); // []

const tags = document.getElementsByTagName("h3");
console.log(tagsCollection);
console.log(tags); // HTMLCollection
console.log(Array.isArray(tags)); //false
//~Converting impure Array into the pure array
const pureArr2 = Array.from(tags);
console.log(Array.isArray(pureArr2));

// ! 4) document.querySelector ==> it will give me the error if I passed an empty string.

// const ele = document.querySelector(""); //!4FebDom.js:47 Uncaught SyntaxError: Failed to execute 'querySelector' on 'Document': The provided selector is empty.

//~What is i pass that selector which does'not exists in my real dom ?????

const ele = document.querySelector(".keshav");

console.log(ele); //~null

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

console.log(ele5.length);

const h3 = document.createElement("h3");
console.dir(h3);
h3.classList.add("head3");
console.log(h3);
div.appendChild(h3);

const ele6 = document.querySelectorAll(".head3");

console.log(ele6);
console.log(ele6.length);

//! Let me do the same work with document.getElementByClassName
const ele8 = document.getElementsByClassName("head3");

console.log(ele8);
console.log(ele8.length);

const h3Tag02 = document.createElement("h3");

h3Tag02.classList.add("head3");

div.appendChild(h3Tag02);
console.log(ele6.length);//NodeList => Static Collection
console.log(ele8.length);//HTMLCollection => Live Collection
// ? Similarities
// ? Both are impure array

// ? Difference between HTMLCollection and NodeList.
// ! Cannot use any of the array methods in HTMLCollection.
// ! HTML Collection is called LIVE COLLECTION.

// ! NODE LIST is called STATIC Collection

// ? Whenever we use getElementsByClassName or tagName we get HTMLCollection, Whenever we use querySelectorAll we get NodeList.

//? DOM Selectors are of 5 types, Used to target HTML Elements in Javascript.

//! 1) document.getElementById() === Returns the first element within node's descendants whose ID is elementId.It will return only one and the first element only.
const h2Tag = document.getElementById(`head2`);
console.log(h2Tag);
console.log(h2Tag.textContent);
console.log(h2Tag.innerHTML);

//~What if I Pass that id which does'not exist in my real dom, then in that case I will get null.Even If I pass empty string I will still get null.

const keshav = document.getElementById(`keshav`); //~null
console.log(keshav);

//! document.getElementByClassName
const h2SingleTag = document.getElementsByClassName(`h2`);

console.log(h2SingleTag);

//?document.getElementsByClassName always returns us a HTML Collection.HTML Collection is a impure Array.It is not a pure array.Which means we cannot apply array methods on the HTML Collection. even if i passed single element or that element whose class does'not exist.or even if i pass an empty string it will always return me HTML collection i.e empty HTML Collection.Same thing goes for the document.getElementsByTagName().

const demo1 = document.getElementsByClassName(`demo1`);

console.log(demo1); //Empty HTML Collection.

const demo2 = document.getElementsByClassName(``);
console.log(demo2); //Empty HTML Collection.

//& document.getElementsByTagName
const allSpans = document.getElementsByTagName(`span`);

console.log(allSpans);

// ? If we want to check array is pure or not => Array.isArray() returns boolean.

console.log(Array.isArray(allSpans)); //false

console.log(Array.isArray(h2SingleTag)); //false

// ! convert impure array to pure array Array.from() returns pure array.

//!Array.from() method returns us a new Pure Array.

const allSpansPure = Array.from(allSpans);
console.log(allSpans);
console.log(allSpansPure);
console.log(Array.isArray(allSpans)); //false
console.log(Array.isArray(allSpansPure)); //true

// ! 4) document.querySelector ==> it will give me the error if I passed an empty string.

//~What is i pass that selector which does'not exists in my real dom ?????

const ele = document.querySelector(".keshav");
console.log(ele); //!null

const ele1 = document.querySelector(`#head22`);

console.log(ele1);

const ele2 = document.querySelector(`.head3`);

console.log(ele2);

const ele3 = document.querySelector(`h3, .head3, #head22`);

console.log(ele3); // ! only id will be targeted, because priority of id is higher than class and tag (id > class > tag)

const ele5 = document.querySelectorAll(`.head4`);

console.log(ele5); // ! NodeList => we can use forEach array method in NodeList

console.log(ele5.length);

const div = document.querySelector(`#head4Parent`);
const h2 = document.createElement(`h2`);

h2.classList.add(`head4`);
div.appendChild(h2);

const ele6 = document.querySelectorAll(`.head4`);

console.log(ele6);
console.log(ele6.length); //NodeList === Static Collection.

//! Let me do the same work with document.getElementByClassName

const ele7 = document.getElementsByClassName(`head4`);

console.log(ele7);
console.log(ele7.length); //HTMLCollection === Live Collection.

const h2Ele = document.createElement(`h2`);

h2Ele.classList.add(`head4`);

h2Ele.textContent = `Head4 CLASS`;

div.appendChild(h2Ele);

console.log(ele7.length);
console.log(ele6.length);

// ? Similarities
// ? Both are impure array

// ? Difference between HTMLCollection and NodeList.
// ! Cannot use any of the array methods in HTMLCollection.
// ! HTML Collection is called LIVE COLLECTION.

// ! NODE LIST is called STATIC Collection

// ? Whenever we use getElementsByClassName or tagName we get HTMLCollection, Whenever we use querySelectorAll we get NodeList.

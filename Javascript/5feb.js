// ! example of static and live collection.
const mainContainer = document.querySelector("#table-container");
const collection = document.getElementsByTagName("div");
const list = document.querySelectorAll("div");

console.log("HTMLCollection -->", collection.length); // 3
console.log("NodeList -->", list.length); // 3

// ? creating html elements dynamically
// ! inside for loop
for (let i = 0; i < 5; i++) {
  // ! these all divs will be created after script tag.
  const divTag = document.createElement("div");
  divTag.textContent = "div 4";
  console.log(divTag);
  document.body.appendChild(divTag);
}

console.log("HTMLCollection -->", collection.length); // 8 (LIVE)
console.log("NodeList -->", list.length); // 3 (static)

// ? HTMLCollection ==> live collection
// ! NodeList ==> static collection

// ! DOM Manipulation => (creating a table tag)
const tableTag = document.createElement("table");
// ! Adding attributes
tableTag.border = "1";
tableTag.cellPadding = "5";
tableTag.cellSpacing = "0";

// ? creating elements in Javascript.
const trTag1 = document.createElement("tr");
const trTag2 = document.createElement("tr");
const trTag3 = document.createElement("tr");

const thTag1 = document.createElement("th");
const thTag2 = document.createElement("th");
const thTag3 = document.createElement("th");

const tdTag1 = document.createElement("td");
const tdTag2 = document.createElement("td");
const tdTag3 = document.createElement("td");
const tdTag4 = document.createElement("td");
const tdTag5 = document.createElement("td");
const tdTag6 = document.createElement("td");

// ? adding textContent.
thTag1.textContent = "ID";
thTag2.textContent = "FNAME";
thTag3.textContent = "LNAME";

tdTag1.textContent = "1";
tdTag2.textContent = "John";
tdTag3.textContent = "Cena";
tdTag4.textContent = "2";
tdTag5.textContent = "Brock";
tdTag6.textContent = "Lesnar";

// ! appendChild can only append one node at a time.
// ? append can append multiple nodes at the same time.

// ? appending as a child
trTag1.append(thTag1, thTag2, thTag3);
trTag2.append(tdTag1, tdTag2, tdTag3);
trTag3.append(tdTag4, tdTag5, tdTag6);

tableTag.append(trTag1, trTag2, trTag3);

console.log(tableTag);
mainContainer.appendChild(tableTag);



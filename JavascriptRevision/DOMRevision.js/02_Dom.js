const tableTag = document.createElement(`table`);

const div = document.querySelector(`#main-container`);

console.log(div);


tableTag.border = `1`;
tableTag.cellPadding = `5`;
tableTag.cellSpacing = `0`;

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


thTag1.textContent = "ID";
thTag2.textContent = "FNAME";
thTag3.textContent = "LNAME";

tdTag1.textContent = "1"
tdTag2.textContent = "Brock"
tdTag3.textContent = "Lesnar"


tdTag4.textContent = "2"
tdTag5.textContent = "Oba"
tdTag6.textContent = "Femi"


// ! appendChild can only append one node at a time.
// ? append can append multiple nodes at the same time.


//?appending as a child
trTag1.append(thTag1, thTag2, thTag3);
trTag2.append(tdTag1, tdTag2, tdTag3)
trTag3.append(tdTag4, tdTag5, tdTag6)

tableTag.append(trTag1, trTag2, trTag3);


div.appendChild(tableTag);


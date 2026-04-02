// DOM (Document Object Model) Manipulation
//--------------------------------------------------------------------------
// - Different ways to select the Elements
//--------------------------------------------------------------------------
// let domId = document.getElementById("domId");
// console.log(domId);

// let domClass = document.getElementsByClassName("domClass");
// console.log(domClass);

// let domTag = document.getElementsByTagName("h2");
// console.log(domTag);

// let domQueryTag = document.querySelector("h2");
// console.log(domQueryTag);

// let domQueryId = document.querySelector("#domId");
// console.log(domQueryId);

// let domQueryClass = document.querySelector(".domClass");
// console.dir(domQueryClass);

// let domQueryAll = document.querySelectorAll("h2");
// console.log(domQueryAll);

//--------------------------------------------------------------------------
// Using Properties & Methods : Setting content in the objects
//--------------------------------------------------------------------------

let h2 = document.querySelector(".domClass");
console.dir(h2);
console.log(h2);

// console.log(h2.innerText);
// h2.innerText = "Kaushal Hole";
// console.log(h2.innerHTML);
// h2.innerHTML = "Dom <i>Mani</i>";

h2.classList.add("green");
h2.classList.remove("green");
console.log(h2.classList.contains("green"));
h2.classList.toggle("green"); //On
h2.classList.toggle("green"); //Off

let para = document.createElement("p");
para.innerText = "Hello";
para.classList.add("green");

let body = document.querySelector("body");
body.appendChild(para);

body.append(para);



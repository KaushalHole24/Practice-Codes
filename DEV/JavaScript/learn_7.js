// -------------------------------------------
// API - Aplication Programming Interface
// -------------------------------------------
// When we send request to API it send us data in string format.

// let jsonData = '{"fact":"A cats hearing is much more sensitive than humans and dogs.","length":60}';

// let obj = JSON.parse(jsonData);
// console.log(obj.fact);

// -------------------------------------------
// Ajax - Asynchronous JavaScript and XML
// -------------------------------------------

// let url = "https://catfact.ninja/fact";

// -------------------------------------------
// Fetch with then and catch
// -------------------------------------------
// fetch(url)
//     .then((Response)=>{
//         // console.log(Response.json());
//         return Response.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err)=>{
//         console.log("Error: ",err);
//     })

// -------------------------------------------
// Fetch using async and await
// -------------------------------------------

// async function getFact(){
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);  
//     } catch (error) {
//         console.log(error);
//     }
// }

// -------------------------------------------
// Axious 
// -------------------------------------------

// let body = document.querySelector("body");
// let fact = document.createElement("p");
// body.append(fact);
// let btn = document.querySelector("#gen");

// async function getFact(){
//     try{
//         let result = await axios.get(url);
//         return result.data.fact;
//     }catch(err){
//         console.log("Error: ",err);  
//     }
// }

// btn.addEventListener("click", async ()=>{
//     let getfact = await getFact();
//     fact.innerText = getfact;
// })

// -------------------------------------------
// Axious - Sending headers
// -------------------------------------------

// let url2 = "https://icanhazdadjoke.com/";
// let config = { headers: { Accept: "application/json" }};

// async function getJoke(){
//     try{
//         let result = await axios.get(url2, config);
//         console.log(result.data.joke);
//     } catch(err){
//         console.log("Error: ",err);
//     }
// }

// -------------------------------------------
// 
// -------------------------------------------

// let getCountry = document.querySelector("#getCountry");
// let getCollege = document.querySelector("#getCollege");
// let body = document.querySelector("body");
// let ul = document.createElement("ul");
// body.append(ul);
// let country = "";

// getCollege.addEventListener("click", ()=>{
//     country = getCountry.value;
//     getColleges();
// });


// let url = "https://api.potterdb.com/v1/books";

// async function getColleges() {
//     try{
//         let res = await axios.get(url);
//         console.log(res);
//     } catch(err){
//         console.log("Error: ", err);
//     }
// }




let potterUrl = "https://api.potterdb.com/v1/books";
let books = [];
let select = document.querySelector("#bookSelect");
let btn = document.querySelector("#getDetails");
let output = document.querySelector("#output");

async function potterCall() {
    try {
        let result = await axios.get(potterUrl);
        return result.data.data;
    } catch (err) {
        console.log("Error: ", err);
    }
}

async function potterInfo() {
    books = await potterCall();

    books.forEach((book) => {
        let option = document.createElement("option");
        option.value = book.id;
        option.textContent = book.attributes.title;
        select.appendChild(option);
    });
}

potterInfo();

btn.addEventListener("click", () => {
    let selectedID = select.value;
    let selectedBook = books.find(book => book.id == selectedID);
    output.textContent = selectedBook.attributes.title;
});
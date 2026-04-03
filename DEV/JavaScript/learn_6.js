// ----------------------------------------
// CallBack Hell
// ----------------------------------------

let h1 = document.querySelector("#domId");
/*

function changeColor(color, delay, nextColor){
    setTimeout(()=>{
        h1.style.color = color;
        nextColor();
    }, delay);
}

changeColor("red",1000, ()=>{
    changeColor("orange", 1000, ()=>{
        changeColor("green",1000, ()=>{
            changeColor("purple",1000);
        })
    });
});
*/
// Callback nexting - Callback hell



// setTimeout(()=>{
//     h1.style.color = "red";
// },1000)

// setTimeout(()=>{
//     h1.style.color = "green";
// },2000)

// setTimeout(()=>{
//     h1.style.color = "pink";
// },3000)

// ----------------------------------------
// Promises , Async & Await --> To deal with callback hell
// ----------------------------------------
// Promises

// function savetoDb(data){
//     return new Promise((success, failure)=>{
//         let internetSpeed = Math.floor(Math.random() * 10)+1;
//         if(internetSpeed > 4){
//             success("Data was saved.");
//         } else {
//             failure("Weak Connection.");
//         }
//     });
// }

// let result = savetoDb("Kaushal Hole");
// result
//     .then(()=>{
//         console.log("Promise Resolved");
//     })
//     .catch(()=>{
//         console.log("Promise Rejected");
//     })

// ----------------------------------------
/*
function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1.style.color = color;
            resolve();
        },delay);
    });
}

changeColor("Red", 1000)
    .then(()=>{
        return changeColor("orange",1000);
    })
    .then(()=>{
        return changeColor("green", 1000);
    })
    .then(()=>{
        return changeColor("yellow",1000);
    })
    .catch(()=>{
        console.log("failed");
    })
*/
// ----------------------------------------
// Async & Await 

// function changeColor(color, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve();
//         },delay);
//     });
// }

// async function show(){
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);
//     await changeColor("purple",1000);
// }

// show();
 
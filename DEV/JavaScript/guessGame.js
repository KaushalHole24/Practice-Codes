let maxNum = prompt("Enter your number");
let randomNum = Math.floor(Math.random()*maxNum)+1;

let guess = prompt("Enter your guess");
while(true){
    if(guess == randomNum){
        console.log("You won..."+randomNum);
        break;
    } else if(guess == "quit"){
        console.log("Quiting game...");
        break;
    }
    guess = prompt("Your guess is wrong. Try again !");
}
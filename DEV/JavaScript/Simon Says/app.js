let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "purple", "green"];

let started = false;
let isMuted = false;

let h2 = document.querySelector("h2");
let currentLevelDisplay = document.querySelector("#current-level");
let highScoreDisplay = document.querySelector("#high-score");
let startBtn = document.querySelector("#start-btn");
let muteBtn = document.querySelector("#mute-btn");

let level = 0;
let highScore = 0;

startBtn.addEventListener("click", startGame);
document.addEventListener("keydown", startGame);

function playSound() {
    if(isMuted) return;
    
    let audio = new Audio('sound/clickSound.mp3');
    audio.play();
}

function GameSound() {
    if(isMuted) return;

    let audio = new Audio('sound/gameOver.mp3');
    audio.play();
}

muteBtn.addEventListener("click", () => {    
    isMuted = !isMuted;

    if (isMuted) {
        muteBtn.innerText = "🔇 Muted";
    } else {
        muteBtn.innerText = "🔊 Sound On";
    }
});

function startGame() {
    if (!started) {
        started = true;
        level = 0;
        gameSeq = [];
        userSeq = [];

        h2.innerText = "Watch the sequence...";
        startBtn.innerText = "Game Started";
        startBtn.disabled = true;

        levelUp();
    }
}

function btnFlash(btn) {
    playSound();
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash")
    }, 300)
}

function levelUp() {
    userSeq = [];
    level++;
    currentLevelDisplay.innerText = level;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
}

function checkSeq(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {

        if (level - 1 > highScore) {
            highScore = level - 1;
            if(highScore > highS){
                localStorage.setItem("highscore", JSON.stringify(highScore));
            highScoreDisplay.innerText = highScore;
            }
        }

        h2.innerHTML = `Game Over! <b>Your score was ${level - 1}</b> <br> Press any key to start.`;
        document.body.classList.add("game-over");
        GameSound();
        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 500);

        setTimeout(() => {
            reset();
        }, 500);
    }
}

function btnPress() {

    if(!started) return;
    
    let btn = this;
    btnFlash(btn);

    let btnColor = btn.getAttribute("id");
    userSeq.push(btnColor);

    checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    currentLevelDisplay.innerText = 0;
    startBtn.innerText = "Start Game";
    startBtn.disabled = false;
}

let highS = JSON.parse(localStorage.getItem("highscore")) || 0;
highScoreDisplay.innerText = highS;

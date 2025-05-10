
//ILK SEHIFE 
const startScreen = document.getElementById("startScreen");
const startGameBtn = document.getElementById("startGameBtn");
const cancelGameBtn = document.getElementById("cancelGameBtn");

startGameBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
});

cancelGameBtn.addEventListener("click", () => {
    window.close(); // Brauzer icazə verməzsə, alternativ:
    window.location.href = "about:blank";
});




//OYUN SEHIFESI
const playBtn = document.querySelector("#playBtn");
const resetBtn = document.querySelector("#resetBtn");


const pointEl1 = document.querySelector("#pointEl1");
const pointEl2 = document.querySelector("#pointEl2");

const statEl1 = document.querySelector("#statEl1");
const statEl2 = document.querySelector("#statEl2");

const imgEl1 = document.querySelector("#imgEl1");
const imgEl2 = document.querySelector("#imgEl2");

const gameMsg = document.querySelector("#gameMsg");
console.log(gameMsg);



const game = ["r", "p", "s"];

const images = {
    "r": "image/r.png",
    "p": "./image/p.png",
    "s": "./image/s.png",

}


let point1 = 0;
let point2 = 0;
let gameOver = false;



resetBtn.addEventListener("click", () => {
    location.reload();
})



const randomGame = () => {
    const randomNum = Math.random() * game.length;
    const randomIndex = Math.floor(randomNum);
    return game[randomIndex];
}


const showRender = (options) => {
    const {
        p1,
        p2,
        status1Text,
        status2Text,
        text1Color,
        text2Color,
        status1Img,
        status2Img
    } = options;
    point1 += p1;
    point2 += p2;


    pointEl1.innerHTML = point1;
    pointEl2.innerHTML = point2;

    statEl1.innerHTML = status1Text;
    statEl2.innerHTML = status2Text;

    statEl1.style.color = text1Color;
    statEl2.style.color = text2Color;

    imgEl1.src = status1Img;
    imgEl2.setAttribute("src", status2Img);

}



function playGame() {

    if (gameOver) return;


    const userMe = randomGame();
    const compMe = randomGame();

    const userImg = images[userMe];
    const compImg = images[compMe];

    if (userMe === compMe) {
        showRender({
            p1: 0,
            p2: 0,
            status1Text: "DRAW",
            status2Text: "DRAW",
            text1Color: "black",
            text2Color: "black",
            status1Img: userImg,
            status2Img: compImg
        })
    } else if ((userMe === "r" && compMe === "s")) {

        showRender({
            p1: 1,
            p2: 0,
            status1Text: "Win",
            status2Text: "Lose",
            text1Color: "green",
            text2Color: "red",
            status1Img: userImg,
            status2Img: compImg
        })

    } else if ((userMe === "p" && compMe === "r")) {

        showRender({
            p1: 1,
            p2: 0,
            status1Text: "Win",
            status2Text: "Lose",
            text1Color: "green",
            text2Color: "red",
            status1Img: userImg,
            status2Img: compImg
        })

    } else if ((userMe === "s" && compMe === "p")) {

        showRender({
            p1: 1,
            p2: 0,
            status1Text: "Win",
            status2Text: "Lose",
            text1Color: "green",
            text2Color: "red",
            status1Img: userImg,
            status2Img: compImg
        })

    } else {
        showRender({
            p1: 0,
            p2: 1,
            status1Text: "Lose",
            status2Text: "Win",
            text1Color: "red",
            text2Color: "green",
            status1Img: userImg,
            status2Img: compImg
        })
    }
    checkWinner();

}



function checkWinner() {
    if (point1 === 3 || point2 === 3) {
        gameOver = true;
        gameMsg.style.visibility = "visible";

        if (point1 === 3) {
            gameMsg.innerText = "🎉 Congratulations!";
            gameMsg.style.color = "green";
        } else {
            gameMsg.innerText = "😞 YOU LOSE";
            gameMsg.style.color = "red";
        }
    }
}


playBtn.addEventListener("click", () => {
    playGame()

})

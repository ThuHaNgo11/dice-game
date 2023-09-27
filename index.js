
let randomNum1 = Math.floor(Math.random() * 5 + 1)
let randomNum2 = Math.floor(Math.random() * 5 + 1)

const img1 = document.getElementsByClassName("img1")[0]

img1.setAttribute("src", `images/dice${randomNum1}.png`)

const img2 = document.getElementsByClassName("img2")[0]

img2.setAttribute("src", `images/dice${randomNum2}.png`)

const h1 = document.querySelector("h1")

if (randomNum1 > randomNum2) {
    h1.innerText = "🚩 Player 1 Wins!"
} else if (randomNum1 < randomNum2) {
    h1.innerText = "Player 2 Wins! 🚩"
} else {
    h1.innerText = "Draw!"
}


function refreshPage(){
    window.location.reload();
} 
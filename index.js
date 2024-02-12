let increaseH = document.getElementById("home-score")
let increaseG = document.getElementById("guest-score")
let scoresHome = 0
let scoreGuest = 0
function increaseHomeScoreOne(){
     scoresHome +=1
     increaseH.textContent =scoresHome
}
function increaseHomeScoreTwo(){
     scoresHome+=2
     increaseH.textContent =scoresHome
}
function increaseHomeScoreThree(){
     scoresHome+=3
     increaseH.textContent =scoresHome
}
function increaseGuestScoreOne(){
    scoreGuest+=1
    increaseG.textContent =scoreGuest
}
function increaseGuestScoreTwo(){
    scoreGuest+=2
    increaseG.textContent =scoreGuest
}
function increaseGuestScoreThree(){
    scoreGuest+=3
    increaseG.textContent =scoreGuest
}
function reset(){
    scoresHome=0
    increaseH.textContent =0
    scoreGuest=0
    increaseG.textContent =0
}
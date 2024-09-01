
const p1Counter = document.getElementById('addPlayer1')
const p2Counter = document.getElementById('addPlayer2')
const scoreButtons = document.getElementsByClassName ('scoreBtn')
const reset = document.getElementById('reset')
let p1Display = document.getElementById('p1Display')
let p2Display = document.getElementById('p2Display')
p1Score = 0
p2Score = 0
let isGameOver = false;
const select = document.getElementById("scoreKeeper")
let winner = ""
const winnerText = document.getElementById('statement')





window.onload = function (){
    ;
    for (let i = 1; i<=21; i++) {
        let option = document.createElement('option');
            option.text = i;
            option.value = i;
            select.add(option)
    }
};

// Add click listener to the p1 and p2 buttons that add 1 to that players total

function checkScore (p){
    const goal = document.getElementById('scoreKeeper').value
    if (p == goal){
        isGameOver = true
        

        if (p1Score == goal){
            winner = 1
            p1Display.style.color ="#fcba03"
            p2Display.style.color = "#fc1703"

        } else {
            winner = 2
            p2Display.style.color ="#fcba03"
            p1Display.style.color = "#fc1703"
            
        }
        winnerText.innerHTML = `GAME OVER! Player ${winner} Wins`

        p1Counter.disabled = true
        p2Counter.disabled = true
         }
        }



// Player 1 counter
    p1Counter.addEventListener('click', function() {
        p1Score++
        p1Display.innerHTML = p1Score
        checkScore(p1Score) 
                })
//  Player 2 counter           
        p2Counter.addEventListener('click', function() {
            p2Score++
            p2Display.innerHTML = p2Score
            console.log(p2Score)
            checkScore(p2Score)     
            })  
            
// Reset button
       reset.addEventListener('click', ()=>{
        location.reload()
       })     
            
 

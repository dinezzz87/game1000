let a = 1;
let b = 2;
let c;

c = a + b;
console.log(c);

document.querySelector("#submit").onclick = function(){
    let play1 = document.getElementById("player1").value;
    let play2 = document.getElementById("player2").value;
    let play3 = document.getElementById("player3").value;
    
    let player1 = Number(play1);
    let player2 = Number(play2);
    let player3 = Number(play3);

    let sum = player1 + player2 + player3;
    console.log(sum);
    if(sum < 120){
        alert("Проверьте введенные значения");
    }
        else {
    console.log(`Количесвто очков игорока: Таныч ${player1}`);
    console.log(`Количесвто очков игорока: Ден ${player2}`);
    console.log(`Количесвто очков игорока: Лёня ${player3}`);
    alert("Данные записаны");
    }
  }

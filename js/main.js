let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function(){
    SetGame();
}
function SetGame(){
    // set up the grid for the game board in html
    for (let i =0;i<9;i++){
        //<dive id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);

        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole,1000); // 2000 milliseconds = 1 seconds
    setInterval(setPlant,2000); // 5000 milliseconds = 2 seconds
}
function getRandomTile(){
    //math random --> (0-1)* 9 --> round down to (0-8) integers
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }
    if(currentMoleTile){
        currentMoleTile.innerHTML = ""; // remove the mole from the previous tile
    }

    let mole = document.createElement("img");
    mole.src = "../images/monty-mole.png";

    let num = getRandomTile();
    if(currentPlantTile && currentPlantTile.id == num){
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return;
    }
    if(currentPlantTile){
        currentPlantTile.innerHTML = ""; // remove the plant from the previous tile
    }

    let plant = document.createElement("img");
    plant.src = "../images/piranha-plant.png";

    let num = getRandomTile();
    if(currentMoleTile && currentMoleTile.id == num){
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}
function selectTile(){
    if(gameOver){
        return;
    }
    if (this == currentMoleTile){
        score+=10;
        document.getElementById("score").innerText = score.toString();//update the score
    }else if(this == currentPlantTile){
        document.getElementById("score").innerText = "Game over: " + score.toString();
        gameOver = true;
    }
}

/*----------------
    FUNCTIONS
----------------*/

//funzione per i numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*----------
    MENU
----------*/

let flagEasy = false;
let flagMedium = false;
let flagHard = false;

function startClick(){
    let menuChange = document.getElementById("startMenu");
    let levelChange = document.getElementById("gameLevel");
    menuChange.classList.add("d-none");

    levelChange.classList.remove("d-none");

    let gameDiff = document.getElementById("startMenu").value;

    const cellsContainer = document.querySelector("#cells-container");

    switch(gameDiff) {
        case 0:

            let bombs = [
                getRandomNumber(1, 100)
            ];

            do{
        
                //creo un numero casuale da 1 a 100
                let num = (getRandomNumber(1, 100));
            
                //flag booleano per il numero random
                let flagRandom = true;
            
                //flag booleano per la vittoria della partita
                flagWin = true;
            
                //controllo tutti gli elementi dell'array bombe e se il numero coincide con un elemento dell'array, flagRandom = false
                for(let i = 0; i < bombs.length; i++){
            
                    if(num == bombs[i]){
                        flagRandom = false;
                    }
            
                }
            
                //se flagRandom = true allora pusho il numero casuale nell'array
                if(flagRandom == true){
                    bombs.push(num);
                }
            
            } while(bombs.length < 16);

            console.log(bombs);

            let cells = [];
            cellsContainer.classList.add("cells-container-100");

            for(let i = 1; i <= 100; i++){

                let cell = document.createElement("div");
                cell.classList.add("cell");
                cell.innerHTML = i;
                cell.value = i;
                cellsContainer.append(cell);
                cells.push(cell);
            }

            let count = 0;

                for(let i = 0; i < 100; i++){

                    cells[i].addEventListener("click", function(){

                        let punteggio = document.getElementById("punteggio");

                        if(cells[i].classList.contains('cell-clicked') == true){
                            count--;
                            punteggio.innerHTML = count;
                        }

                        cells[i].classList.add("cell-clicked");
                        count++;
                        punteggio.innerHTML = count;

                        for(let j = 0; j < bombs.length; j++){
                            if(cells[i].value == bombs[j]){

                                for(let k = 0; k < cells.length; k++){
                                    for(let l = 0; l < bombs.length; l++){
                                        if(cells[k].value == bombs[l]){
                                            cells[k].classList.add("bg-color-purple");
                                        }
                                    }
                                }

                                count--;
                                cells[i].classList.remove("cell-clicked");
                                cells[i].classList.add("cell-bomb");
                                document.getElementById("win-loss-text").innerHTML = "HAI PERSO";
                                document.getElementById("win-loss-text").classList.add("color-red");
                                document.getElementById("cells-container").classList.add("pointer-event-none");

                                let restartBtn = document.getElementById("restart-btn");
                                restartBtn.classList.remove("d-none");
                                restartBtn.addEventListener("click", function(){
                                    window.location.reload();
                                });


                            }
                        }

                        if(count == 84){
                            document.getElementById("win-loss-text").innerHTML = "HAI VINTO";
                            document.getElementById("win-loss-text").classList.add("color-green");
                            document.getElementById("cells-container").classList.add("pointer-event-none");

                            let restartBtn = document.getElementById("restart-btn");
                                restartBtn.classList.remove("d-none");
                                restartBtn.addEventListener("click", function(){
                                window.location.reload();
                            });
                            
                        }

                        

                    });
                }

          break;
        case 1:

            let bombs80 = [
                getRandomNumber(1, 80)
            ];

            do{
        
                //creo un numero casuale da 1 a 80
                let num = (getRandomNumber(1, 80));
            
                //flag booleano per il numero random
                let flagRandom = true;
            
                //flag booleano per la vittoria della partita
                flagWin = true;
            
                //controllo tutti gli elementi dell'array bombe e se il numero coincide con un elemento dell'array, flagRandom = false
                for(let i = 0; i < bombs80.length; i++){
            
                    if(num == bombs80[i]){
                        flagRandom = false;
                    }
            
                }
            
                //se flagRandom = true allora pusho il numero casuale nell'array
                if(flagRandom == true){
                    bombs80.push(num);
                }
            
            } while(bombs80.length < 16);

            console.log(bombs80);

            let cells80 = [];
            cellsContainer.classList.add("cells-container-80");

            for(let i = 1; i <= 80; i++){

                let cell = document.createElement("div");
                cell.classList.add("cell80");
                cell.innerHTML = i;
                cell.value = i;
                cellsContainer.append(cell);
                cells80.push(cell);
            }

            let count80 = 0;

                for(let i = 0; i < 80; i++){

                    cells80[i].addEventListener("click", function(){

                        let punteggio = document.getElementById("punteggio");

                        if(cells80[i].classList.contains('cell-clicked') == true){
                            count80--;
                            punteggio.innerHTML = count80;
                        }

                        cells80[i].classList.add("cell-clicked");
                        count80++;
                        punteggio.innerHTML = count80;

                        for(let j = 0; j < bombs80.length; j++){
                            if(cells80[i].value == bombs80[j]){

                                for(let k = 0; k < cells80.length; k++){
                                    for(let l = 0; l < bombs80.length; l++){
                                        if(cells80[k].value == bombs80[l]){
                                            cells80[k].classList.add("bg-color-purple");
                                        }
                                    }
                                }

                                count80--;
                                cells80[i].classList.remove("cell-clicked");
                                cells80[i].classList.add("cell-bomb");
                                document.getElementById("win-loss-text").innerHTML = "HAI PERSO";
                                document.getElementById("win-loss-text").classList.add("color-red");
                                document.getElementById("cells-container").classList.add("pointer-event-none");

                                let restartBtn = document.getElementById("restart-btn");
                                restartBtn.classList.remove("d-none");
                                restartBtn.addEventListener("click", function(){
                                    window.location.reload();
                                });

                            }
                        }

                        if(count80 == 64){
                            document.getElementById("win-loss-text").innerHTML = "HAI VINTO";
                            document.getElementById("win-loss-text").classList.add("color-green");
                            document.getElementById("cells-container").classList.add("pointer-event-none");

                            let restartBtn = document.getElementById("restart-btn");
                                restartBtn.classList.remove("d-none");
                                restartBtn.addEventListener("click", function(){
                                window.location.reload();
                            });
                            
                        }

                        

                    });
                }

          break;
        case 2:
        
            let bombs50 = [
                getRandomNumber(1, 50)
            ];

            do{
        
                //creo un numero casuale da 1 a 50
                let num = (getRandomNumber(1, 50));
            
                //flag booleano per il numero random
                let flagRandom = true;
            
                //flag booleano per la vittoria della partita
                flagWin = true;
            
                //controllo tutti gli elementi dell'array bombe e se il numero coincide con un elemento dell'array, flagRandom = false
                for(let i = 0; i < bombs50.length; i++){
            
                    if(num == bombs50[i]){
                        flagRandom = false;
                    }
            
                }
            
                //se flagRandom = true allora pusho il numero casuale nell'array
                if(flagRandom == true){
                    bombs50.push(num);
                }
            
            } while(bombs50.length < 16);

            console.log(bombs50);

            let cells50 = [];
            cellsContainer.classList.add("cells-container-50");

            for(let i = 1; i <= 50; i++){

                let cell = document.createElement("div");
                cell.classList.add("cell-50");
                cell.innerHTML = i;
                cell.value = i;
                cellsContainer.append(cell);
                cells50.push(cell);
            }

            let count50 = 0;

                for(let i = 0; i < 50; i++){

                    cells50[i].addEventListener("click", function(){

                        let punteggio = document.getElementById("punteggio");

                        if(cells50[i].classList.contains('cell-clicked') == true){
                            count50--;
                            punteggio.innerHTML = count50;
                        }

                        cells50[i].classList.add("cell-clicked");
                        count50++;
                        punteggio.innerHTML = count50;

                        for(let j = 0; j < bombs50.length; j++){
                            if(cells50[i].value == bombs50[j]){

                                for(let k = 0; k < cells50.length; k++){
                                    for(let l = 0; l < bombs50.length; l++){
                                        if(cells50[k].value == bombs50[l]){
                                            cells50[k].classList.add("bg-color-purple");
                                        }
                                    }
                                }

                                count50--;
                                cells50[i].classList.remove("cell-clicked");
                                cells50[i].classList.add("cell-bomb");
                                document.getElementById("win-loss-text").innerHTML = "HAI PERSO";
                                document.getElementById("win-loss-text").classList.add("color-red");
                                document.getElementById("cells-container").classList.add("pointer-event-none");

                                let restartBtn = document.getElementById("restart-btn");
                                restartBtn.classList.remove("d-none");
                                restartBtn.addEventListener("click", function(){
                                    window.location.reload();
                                });


                            }
                        }

                        if(count50 == 34){
                            document.getElementById("win-loss-text").innerHTML = "HAI VINTO";
                            document.getElementById("win-loss-text").classList.add("color-green");
                            document.getElementById("cells-container").classList.add("pointer-event-none");

                            let restartBtn = document.getElementById("restart-btn");
                                restartBtn.classList.remove("d-none");
                                restartBtn.addEventListener("click", function(){
                                window.location.reload();
                            });
                            
                        }

                        

                    });
                }



          break;
      }

}

function gameDifficulty(){
    let startMenu = document.getElementById("startMenu");
    let facile = document.getElementById("easy");
    let medio = document.getElementById("medium");
    let difficile = document.getElementById("hard");

    facile.addEventListener("click", function(){
        value = 0;
        facile.classList.add("facile-active");
        medio.classList.remove("medio-active");
        difficile.classList.remove("difficile-active");
        startMenu.value = 0;
    });

    
    medio.addEventListener("click", function(){
        facile.classList.remove("facile-active");
        medio.classList.add("medio-active");
        difficile.classList.remove("difficile-active");
        startMenu.value = 1;
    });

    
    difficile.addEventListener("click", function(){
        facile.classList.remove("facile-active");
        medio.classList.remove("medio-active");
        difficile.classList.add("difficile-active");
        startMenu.value = 2;
    });
}




/*-------------
    MAIN
-------------*/

//chiedo all'utente il livello di difficolta (0 - 100) (1 - 80) (2 - 50)
//let levelDifficulty = 0;

/* do{
    levelDifficulty = Number(prompt("Inserisci il livello di difficoltà a cui vuoi giocare: (0 - 100 caselle), (1 - 80 caselle), (2 - 50 caselle) :"));
} while(isNaN(levelDifficulty) || levelDifficulty >= 3 || levelDifficulty < 0);


switch(levelDifficulty){
    case 0: 

        let bombs = [
            getRandomNumber(1, 100)
        ];
        
        let calledNumbers = [];
        
        //contatore del gioco
        let count = 0;
        
        //inserisco gli altri numeri random facendo in modo che non siano già presenti nell'array
        do{
        
            //creo un numero casuale da 1 a 100
            let num = (getRandomNumber(1, 100));
        
            //flag booleano per il numero random
            let flagRandom = true;
        
            //flag booleano per la vittoria della partita
            flagWin = true;
        
            //controllo tutti gli elementi dell'array bombe e se il numero coincide con un elemento dell'array, flagRandom = false
            for(let i = 0; i < bombs.length; i++){
        
                if(num == bombs[i]){
                    flagRandom = false;
                }
        
            }
        
            //se flagRandom = true allora pusho il numero casuale nell'array
            if(flagRandom == true){
                bombs.push(num);
            }
        
        } while(bombs.length < 16);
    
        //ciclo fino a che il contatore non arriva ad 84
        do{
            let choice = 0;
            //chiedo un numero all'utente e controllo se è un numero e se è compreso tra 1 e 100 altrimenti lo richiedo
            do{
                choice = Number(prompt(`${count+1}. Inserisci un numero da 1 a 100`));
            } while(isNaN(choice) || choice >= 101 || choice <= 0);
                
                //creo la variabile flagChoice che segnalerà se un numero è gia stato inserito o no, se cambia a false è gia stato inserito
            let flagChoice = true;

            for(let i = 0; i < calledNumbers.length; i++){
                if(choice == calledNumbers[i]){
                    flagChoice = false;
                    count--;
                }
            }

            //se il numero inserito dall'utente non è gia stato inserito in precedenza allora lo aggiungo all'array dei numeri inseriti
            if(flagChoice == true){
                calledNumbers.push(choice);
            }

            //controllo che il numero non corrisponda ad una bomba, se corrisponde al numero di una bomba allora flagWin = false
            for(let i = 0; i < bombs.length; i++){
                if(choice == bombs[i]){
                    flagWin = false;
                }
            }

            //se flagWin = false fermo il gioco perchè l'utente ha perso
            if(flagWin == false){
                break;
            }


            count++;
        }while(count < 84);

        //stampo le bombe
        console.log(`Bombe: ${bombs}`);

        //stampo i numeri inseriti dall'utente
        console.log(`Numeri inseriti dall'utente: ${calledNumbers}`);

        //stampo il punteggio del giocatore
        console.log(`Punteggio giocatore: ${count}`);

        //se flagWin = false allora stampo "Hai perso" altrimenti stampo "Hai vinto"
        if(flagWin == false){
            console.log("Hai perso!");
            alert("HAI PERSO!");
        } else {
            console.log("Hai vinto!");
            alert("HAI VINTO!");
        }

    break;
    
    case 1:

        let bombs80 = [
            getRandomNumber(1, 80)
        ];
        
        let calledNumbers80 = [];
        
        //contatore del gioco
        let count80 = 0;
        
        //inserisco gli altri numeri random facendo in modo che non siano già presenti nell'array
        do{
        
            //creo un numero casuale da 1 a 80
            let num = (getRandomNumber(1, 80));
        
            //flag booleano per il numero random
            let flagRandom = true;
        
            //flag booleano per la vittoria della partita
            flagWin = true;
        
            //controllo tutti gli elementi dell'array bombe e se il numero coincide con un elemento dell'array, flagRandom = false
            for(let i = 0; i < bombs80.length; i++){
        
                if(num == bombs80[i]){
                    flagRandom = false;
                }
        
            }
        
            //se flagRandom = true allora pusho il numero casuale nell'array
            if(flagRandom == true){
                bombs80.push(num);
            }
        
        } while(bombs80.length < 16);

        //ciclo fino a che il contatore non arriva ad 84
        do{
            let choice = 0;
            //chiedo un numero all'utente e controllo se è un numero e se è compreso tra 1 e 80 altrimenti lo richiedo
            do{
                choice = Number(prompt(`${count80+1}. Inserisci un numero da 1 a 80`));
            } while(isNaN(choice) || choice >= 81 || choice <= 0);
                
                //creo la variabile flagChoice che segnalerà se un numero è gia stato inserito o no, se cambia a false è gia stato inserito
            let flagChoice = true;

            for(let i = 0; i < calledNumbers80.length; i++){
                if(choice == calledNumbers80[i]){
                    flagChoice = false;
                    count80--;
                }
            }

            //se il numero inserito dall'utente non è gia stato inserito in precedenza allora lo aggiungo all'array dei numeri inseriti
            if(flagChoice == true){
                calledNumbers80.push(choice);
            }

            //controllo che il numero non corrisponda ad una bomba, se corrisponde al numero di una bomba allora flagWin = false
            for(let i = 0; i < bombs80.length; i++){
                if(choice == bombs80[i]){
                    flagWin = false;
                }
            }

            //se flagWin = false fermo il gioco perchè l'utente ha perso
            if(flagWin == false){
                break;
            }


            count80++;
        }while(count80 < 64);

        //stampo le bombe
        console.log(`Bombe: ${bombs80}`);

        //stampo i numeri inseriti dall'utente
        console.log(`Numeri inseriti dall'utente: ${calledNumbers80}`);

        //stampo il punteggio del giocatore
        console.log(`Punteggio giocatore: ${count80}`);

        //se flagWin = false allora stampo "Hai perso" altrimenti stampo "Hai vinto"
        if(flagWin == false){
            console.log("Hai perso!");
            alert("HAI PERSO!");
        } else {
            console.log("Hai vinto!");
            alert("HAI VINTO!");
        }

    break;

    case 2:

        let bombs50 = [
            getRandomNumber(1, 50)
        ];
        
        let calledNumbers50 = [];
        
        //contatore del gioco
        let count50 = 0;
        
        //inserisco gli altri numeri random facendo in modo che non siano già presenti nell'array
        do{
        
            //creo un numero casuale da 1 a 50
            let num = (getRandomNumber(1, 50));
        
            //flag booleano per il numero random
            let flagRandom = true;
        
            //flag booleano per la vittoria della partita
            flagWin = true;
        
            //controllo tutti gli elementi dell'array bombe e se il numero coincide con un elemento dell'array, flagRandom = false
            for(let i = 0; i < bombs50.length; i++){
        
                if(num == bombs50[i]){
                    flagRandom = false;
                }
        
            }
        
            //se flagRandom = true allora pusho il numero casuale nell'array
            if(flagRandom == true){
                bombs50.push(num);
            }
        
        } while(bombs50.length < 16);

        //ciclo fino a che il contatore non arriva ad 84
        do{
            let choice = 0;
            //chiedo un numero all'utente e controllo se è un numero e se è compreso tra 1 e 50 altrimenti lo richiedo
            do{
                choice = Number(prompt(`${count50+1}. Inserisci un numero da 1 a 50`));
            } while(isNaN(choice) || choice >= 51 || choice <= 0);
                
                //creo la variabile flagChoice che segnalerà se un numero è gia stato inserito o no, se cambia a false è gia stato inserito
            let flagChoice = true;

            for(let i = 0; i < calledNumbers50.length; i++){
                if(choice == calledNumbers50[i]){
                    flagChoice = false;
                    count50--;
                }
            }

            //se il numero inserito dall'utente non è gia stato inserito in precedenza allora lo aggiungo all'array dei numeri inseriti
            if(flagChoice == true){
                calledNumbers50.push(choice);
            }

            //controllo che il numero non corrisponda ad una bomba, se corrisponde al numero di una bomba allora flagWin = false
            for(let i = 0; i < bombs50.length; i++){
                if(choice == bombs50[i]){
                    flagWin = false;
                }
            }

            //se flagWin = false fermo il gioco perchè l'utente ha perso
            if(flagWin == false){
                break;
            }


            count50++;
        }while(count50 < 34);
    
        //stampo le bombe
        console.log(`Bombe: ${bombs50}`);

        //stampo i numeri inseriti dall'utente
        console.log(`Numeri inseriti dall'utente: ${calledNumbers50}`);

        //stampo il punteggio del giocatore
        console.log(`Punteggio giocatore: ${count50}`);

        //se flagWin = false allora stampo "Hai perso" altrimenti stampo "Hai vinto"
        if(flagWin == false){
            console.log("Hai perso!");
            alert("HAI PERSO!");
        } else {
            console.log("Hai vinto!");
            alert("HAI VINTO!");
        }

    break;
} */
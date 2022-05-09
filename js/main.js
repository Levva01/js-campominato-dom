/*----------------
    FUNCTIONS
----------------*/

//funzione per i numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*-------------
    MAIN
-------------*/

//chiedo all'utente il livello di difficolta (0 - 100) (1 - 80) (2 - 50)
let levelDifficulty = 0;

do{
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
}
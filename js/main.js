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

//creo un array di 16 numeri casuali tra 1 e 100, sarà l'array delle
//bombe

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
} else {
    console.log("Hai vinto!");
}
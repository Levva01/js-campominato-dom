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

const bombs = [
    getRandomNumber(1, 100)
];

//inserisco gli altri numeri random facendo in modo che non siano già presenti nell'array
do{

    let num = (getRandomNumber(1, 100));
    let flag = true;

    for(let i = 0; i < bombs.length; i++){

        if(num == bombs[i]){
            flag = false;
        }

    }

    if(flag == true){
        bombs.push(num);
    }

} while(bombs.length < 16);

console.log(bombs);
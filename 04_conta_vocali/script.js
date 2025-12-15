/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// function contaVocali(nome){
//     let contatore = 0;
    
//     for (let index = 0; index < nome.length; index++) {
//         if(nome[index] === "a" || nome[index] === "e" || nome[index] === "i" || nome[index] === "o" || nome[index] === "u" || nome[index] === "A" || nome[index] === "E" || nome[index] === "I" || nome[index] === "O" || nome[index] === "U" ){
//             contatore += 1;
//         }
        
//     }
//     return contatore
// }


const contaVocali = (nome) => {
    let contatore = 0;
    
    for (let index = 0; index < nome.length; index++) {
        if(nome[index] === "a" || nome[index] === "e" || nome[index] === "i" || nome[index] === "o" || nome[index] === "u" || nome[index] === "A" || nome[index] === "E" || nome[index] === "I" || nome[index] === "O" || nome[index] === "U" ){
            contatore += 1;
        }
        
    }
    return contatore
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
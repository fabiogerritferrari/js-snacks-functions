/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

// function selezionaSoloLettera (array , lettera){
//     let arrayLettera = [];

//     for (let index = 0; index < array.length; index++) {
//             if(array[index].includes(lettera) || array[index].includes(lettera.toUpperCase())){
//                 arrayLettera.push(array[index]);
//             } 
//         }
//     return arrayLettera
// }

const selezionaSoloLettera = (array , lettera) => {
    let arrayLettera = [];

    for (let index = 0; index < array.length; index++) {
            if(array[index].includes(lettera) || array[index].includes(lettera.toUpperCase())){
                arrayLettera.push(array[index]);
            } 
        }
    return arrayLettera
}


// Invoca la funzione qui e stampa il risultato in console

console.log(selezionaSoloLettera (names , "l"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
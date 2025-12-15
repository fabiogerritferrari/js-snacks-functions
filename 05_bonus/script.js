/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nomeUtente = 'Mario';


// Dichiara la funzione qui.

// function salutoEducato(nome , ora){

//     let saluto;

//     if(ora < 13){
//         saluto = "buongiorno" + " " + nome;
//     }else if (ora > 13 && ora < 17){
//         saluto = "buon pomeriggio" + " " + nome;
//     }else{
//         saluto = "buonasera" + " " + nome;
//     }
//     return saluto
// }

const salutoEducato = (nome , ora) => {

    let saluto;

    if(ora < 13){
        saluto = "buongiorno" + " " + nome;
    }else if (ora > 13 && ora < 17){
        saluto = "buon pomeriggio" + " " + nome;
    }else{
        saluto = "buonasera" + " " + nome;
    }
    return saluto
}


// Invoca la funzione qui e stampa il risultato in console

console.log(salutoEducato(nomeUtente , 15));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
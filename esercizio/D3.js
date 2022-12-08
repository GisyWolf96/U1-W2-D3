/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n1 = 2;
let n2 = 20;
if (n1 > n2) {
  console.log(n1, " è maggiore di ", n2);
} else {
  console.log(n2, " è maggiore di ", n1);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n3 = 2;
if (n3 !== 5) {
  console.log("Il numero inserito è diverso da 5");
} else {
  console.log("Il numero inserito è uguale a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let n4 = 3;
let risultato4 = n4 % 5;
if (risultato4 === parseInt) {
  console.log("Il numero inserito è divisibile per 5");
} else {
  console.log("il risultato inserito non è divisibile per 5");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n5 = 3;
let n6 = 5;
if (n5 === 8 || n6 === 8) {
  console.log("Un numero inserito è uguale a 8");
} else {
  console.log("Nessun numero inserito è uguale a 8");
}
if (n5 + n6 === 8 || n5 - n6 === 8) {
  console.log("La somma/sottrazione dei due numeri è 8");
} else {
  console.log("La somma/sottrazione dei due numeri è diversa 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 40;
const spedizione = 10;
if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita!!");
  console.log("Totale da pagare: ", totalShoppingCart);
} else {
  console.log("Non hai diritto alla spedizione gratuita!");
  console.log("Totale da pagare: ", totalShoppingCart + spedizione);
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let black = (totalShoppingCart / 100) * 20;
let totaleScontato = totalShoppingCart - black;
if (totaleScontato > 50) {
  console.log("Hai diritto alla spedizione gratuita!!");
  console.log("Totale da pagare: ", totaleScontato);
} else {
  console.log("Non hai diritto alla spedizione gratuita!");
  console.log("Totale da pagare: ", totaleScontato + spedizione);
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
/*let numeri = [20, 78, 5];
numeri.sort(function(a, b) {
    return a - b;
});
console.log(numeri);*/

/*a=2
b=4
c=6
if {
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 8;
if (typeof x === typeof "number") {
  console.log("Il valore inserito non è un numero");
} else {
  console.log("Il valore inserito è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n9 = 8;
let risultato9 = 7 % 2;
if (risultato9 > 0) {
  console.log("Numero dispari");
} else {
  console.log("Numero pari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

/* SCRIVI QUI LA TUA RISPOSTA 
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 4;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA*/
delete me.skills[2];
console.log(me.skills);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const arrayDiNumeri = [undefined];
console.log(arrayDiNumeri);
arrayDiNumeri[0] = 1;
arrayDiNumeri[1] = 2;
arrayDiNumeri[2] = 3;
arrayDiNumeri[3] = 4;
arrayDiNumeri[4] = 5;
arrayDiNumeri[5] = 6;
arrayDiNumeri[6] = 7;
arrayDiNumeri[7] = 8;
arrayDiNumeri[8] = 9;
arrayDiNumeri[9] = 10;

console.log(arrayDiNumeri);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myarray[9] = 100;
console.log(myarray);

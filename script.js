// RECAP JS :)

// VARIABILI
// una variabile è un contenitore per un valore
// si dichiara con le parole chiave let e const
let x = 10 // dichiarazione
x = 50 // riassegnazione del valore

const z = 'Stefano'
// z = 'Gianni' // errore

// SCOPE (visibilità)
if (true) {
  let justHere = 100
}

// console.log(justHere) // <-- errore, la variabile qui è invisibile

// tipi primitivi di valore di una variabile?
// string
// number
// boolean <- true/false
// undefined <- rappresenza un valore non ancora definito
// null <-- rappresenta l'ASSENZA DI UN VALORE, UN VALORE VUOTO

let boh // <-- valore undefined

// JS è un linguaggio DEBOLMENTE TIPIZZATO
let firstName = 'Stefano'
// firstName = 100 // <-- da non fare, pessima prassi cambiare il tipo di una variabile, piuttosto createne una nuova!

console.log(firstName) // 'Stefano'
console.log(typeof firstName) // 'string'

//
// principali operazioni su questi tipi di dato (metodi integrati)
const myString = 'Hello EPICODE!'
const newString = myString.slice(0, 5) // <- i primi 5 caratteri, quindi 'Hello'
const uppercasedNewString = newString.toUpperCase() // 'HELLO'

// tipi di dato NON primitivi
// ARRAY
// un array è una lista (serie) di valori
const myArray = [3, 4, 5, 6]
const stringArray = ['stefano', 'giancarlo', 'mike']
const mixedArray = ['giovanni', 50, true] // si può fare ma è poco usato

// cosa possiamo fare con gli array?
// inserire un elemento
myArray.push(7) // ora myArray è [3, 4, 5, 6, 7]
myArray.unshift(2) // ora myArray è [2, 3, 4, 5, 6, 7]

// eliminare valori
myArray.pop() // ora myArray è [2, 3, 4, 5, 6]
myArray.shift() // ora myArray è [3, 4, 5, 6]

myArray.splice(2, 1) // elimino il 5 -> [3, 4, 6]
console.log('myArray', myArray)

// lettura
// la lettura degli elementi in un array avviene tramite l'utilizzo degli INDICI
// gli indici indicano le posizioni degli elementi
// l'indice iniziale di un array è sempre 0
const element = stringArray[0] // 'stefano'
const element2 = stringArray[2] // 'mike'
const element3 = stringArray[3] // undefined

// OGGETTI
// un oggetto in JS è un tipo di dato complesso atto a contenere una serie di COPPIE chiave/valore
// in un oggetto per recuperare un valore non si utilizza la sua posizione, ma si accede alla sua CHIAVE
const myObject = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  'is-old': true,
  age: 100,
  skills: ['HTML', 'JS'],
  area: {
    country: 'Italy',
    region: 'FVG',
    cities: ['Trieste', 'Udine', 'Pordenone'],
  },
}

// da un oggetto posso estrarre un valore utilizzando il nome della sua chiave
// questa operazione di può eseguire tramite 2 tecniche:
// - dot notation
const test1 = myObject.lastName // 'Casasola'
const test2 = myObject.age // 100
// - square brackets notation
const test3 = myObject['firstName'] // 'Stefano'
const test4 = myObject['is-old'] // true

const keyName = 'skills'
const test5 = myObject.keyName // undefined
const test6 = myObject[keyName] // ['HTML', 'JS']

const region = myObject.area.region

const js = myObject.skills[1] // 'JS'
const udine = myObject.area.cities[1] // 'Udine'

// come creare delle COPIE di variabili

// tipi di dato primitivi
let a = 50
// devo crearne una copia...
let b = a
// b è 50

a = 100
// b è sempre 50

// tipi di dato complessi
let objA = { fido: 'Bau' }
let objB = objA

// questo potrebbe farmi pensare che objB è una copia separata di objA...
objB.fido = 'Miao'
console.log(objA.fido) // 'Miao' :(((
// perchè? perchè l'operatore = con le strutture dati complesse come oggetti e array NON CREA VERE COPIE!

let anotherObjA = { fido: 'Bau' }
let anotherObjB = { ...anotherObjA } // ... è lo SPREAD OPERATOR, quello che fa è copiare tutte le proprietà di un oggetto dentro un altro -> VERA COPIA!
// un altro modo per creare una copia è usare Object.assign() ---> let anotherObjB = Object.assign({}, anotherObjA)

anotherObjB.fido = 'Miao'
console.log(anotherObjA.fido) // 'Bau' :)

// -----

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

// LOGICA CONDIZIONALE
// IF / ELSE

let cartTotal = 40

const shippingCost = 5
const freeShippingThreshold = 50

let totalToPay // ?

if (cartTotal >= freeShippingThreshold) {
  totalToPay = cartTotal
} else {
  totalToPay = cartTotal + shippingCost
}

// ternary operator
const ternaryTotalToPay =
  cartTotal >= freeShippingThreshold ? cartTotal : cartTotal + shippingCost

// CICLI
// un ciclo è una direttiva che permette di eseguire una porzione di codice un numero determinato/indeterminato di volte
// for -> esegue un blocco di istruzioni per un numero PREFISSATO di volte
// while -> esegue un blocco di istruzioni fino a che la condizione fissata non diventa false

for (let i = 0; i < 10; i++) {
  // questo blocco verrà eseguito un numero determinato di volte (10)
  console.log('ciao', i)
}

const testArray = ['adriano', 'alessandro', 'alessia', 'alex']

for (let i = 0; i < testArray.length; i++) {
  // i sta assumendo la posizione di ogni indice valido all'interno dell'array
  console.log(testArray[i])
}

// con funzione freccia
testArray.forEach((currentElement) => {
  console.log(currentElement) // currentElement È testArray[i]
})

// con funzione normale
testArray.forEach(function (currentElement) {
  console.log(currentElement) // currentElement È testArray[i]
})

// altri metodi moderni degli array
// MAP

// map serve a TRASFORMARE un array in un altro array!
const upperCasedTestArray = testArray.map((currentElement) => {
  return currentElement.toUpperCase()
})
console.log(upperCasedTestArray) // ['ADRIANO', 'ALESSANDRO', 'ALESSIA', 'ALEX']

const nameLengthsArray = testArray.map((currentElement) => {
  return currentElement.length
})
// [7, 10, 7, 4]

const justInitialsArray = testArray.map((currentElement) => {
  // return currentElement.charAt(0)
  return currentElement.slice(0, 1).toUpperCase()
})
console.log(justInitialsArray)
// ['A', 'A', 'A', 'A']

// FILTER
// filter crea un nuovo array a partire da uno esistente, specificando una condizione che verrà testata su ogni elemento:
// se la condizione torna true, quell'elemento farà parte dell'array restituito dal filter, altrimenti quell'elemento
// non farà parte dell'array restituito da filter
const justNamesWith7Chars = testArray.filter((currentElement) => {
  // in filter qui dovete mettere una CONDIZIONE
  return currentElement.length === 7
})

// ['adriano', 'alessia']
console.log(justNamesWith7Chars)

const totalLengths = testArray.reduce((acc, currentElement) => {
  return acc + currentElement.length
  // 0 + 7
  // 7 + 10
  // 17 * 7
  // 24 + 4
}, 0) // qui ci va il valore INIZIALE di acc
console.log(totalLengths) // 28

// FIND
const found = testArray.find((currentElement) => {
  return currentElement.charAt(1) === 'l' // verifico che la SECONDA lettera della stringa sia 'l'
})
// 'alessandro'
console.log(found)

// FIND
const indexFound = testArray.findIndex((currentElement) => {
  return currentElement.charAt(1) === 'l' // verifico che la SECONDA lettera della stringa sia 'l'
})
// 1
console.log(indexFound)

// FUNZIONI
// una funzione è un blocco di codice che può venire richiamato successivamente quante volte si vuole
// un blocco di codice riutilizzabile

const bark = function () {
  // dichiarazione della funzione "bark"
  console.log('bau')
}

bark() // <-- INVOCAZIONE della funzione "bark"
bark() // <-- INVOCAZIONE della funzione "bark"

const greetings = function () {
  console.log('ciao, GianMaria!')
}

greetings() // ciao, GianMaria!

// per raggiungere un livello di personalizzazione maggiore, sarebbe bello
// permettere alla funzione di salutare chiunque! creiamo quindi una funzione
// con un PARAMETRO
const genericGreetings = function (nameToGreet = 'Mario') {
  // 'Mario' è il valore di default di nameToGreet
  console.log('ciao, ' + nameToGreet + '!')
}

// IN FORMA FRECCIA
const genericGreetingsArrow = (nameToGreet = 'Mario') => {
  // 'Mario' è il valore di default di nameToGreet
  console.log('ciao, ' + nameToGreet + '!')
}

// nameToGreet è un PARAMETRO
// i nomi dei parametri sono totalmente a piacere, usate il buonsenso
// un parametro serve a indicare un qualcosa di "generico", "variabile" all'interno di una funzione
// utilizzatelo nella funzione come se fosse un vero e proprio "dato"

genericGreetings('Luigi')
genericGreetings('Michela')
genericGreetings('Wendy')

let someName = 'Stefano'
genericGreetings(someName)

genericGreetings() // nameToGreet qui sarà undefined! ripiego sul valore di default 'Mario'

testArray.forEach((currentElement) => {
  genericGreetings(currentElement)
})

// valori di ritorno
// un valore di ritorno può venire inserito in una funzione
// invocando la funzione, è come se ottenessimo il suo valore di ritorno

const anotherGreetings = function () {
  return 'Ciao, GianCarlo!'
}

anotherGreetings() // come se avessi ottenuto 'Ciao, GianCarlo!'

console.log(anotherGreetings() + ' Benvenuto!')
console.log(typeof anotherGreetings())

console.log(anotherGreetings().toUpperCase())

const sum = function (l1, l2) {
  return l1 + l2
}

sum(2, 3) // è un numero! equivale al numero 5
console.log(sum(2, 3) + 100)

console.log(xx) // 'Ciao, GianCarlo!'

// DOM MANIPULATION
// DOM significa Document Object Model -> consiste nella rappresentazione in JS degli elementi della pagina

// UN'OPERAZIONE IN DUE PARTI:
// - selezione dell'elemento
// - modifica dell'elemento

// metodi più utilizzati per la selezione degli elementi
// - getElementById(idDaTrovare) -> tornerà l'elemento con quell'id, oppure null
// - getElementsByClassName(classeDaCercare) -> tornerà una HTMLCollection con tutti gli elementi con la suddetta classe, oppure
// una HTMLCollection vuota
// - getElementsByTagName(nomeTagDaCercare) -> tornerà una HTMLCollection con tutti gli elementi del suddetto tag, oppure
// una HTMLCollection vuota
// ORSI POLARI SECTION
// - querySelector(selettoreCSS) -> tornerà il primo match nella pagina del selettore CSS passato come parametro oppure null
// - querySelectorAll(selettoreCSS) -> tornerà una NodeList con tutti gli elementi che hanno matchato il selettore CSS, oppure
// una NodeList vuota

// per trasformare una HTMLCollection o una NodeList in un vero e proprio array potete utilizzare la dicitura
// const realArray = Array.from(laVostraHTMLCollection)

// modifica dell'elemento
// per ogni elemento trovato avete a disposizione il suo oggetto JS di rappresentazione
// tramite esso potete cambiarne la caratteristiche, dopo che la pagina ha finito di caricarsi
// proprietà e metodi famosi:
// - style -> cambia lo stile inline dell'elemento
// - classList() -> manipola le classi CSS dell'elemento
// - addEventListener() -> aggiunge un listener per un evento (es. click, scroll) sull'elemento in questione, con la possibilità di assegnare una funzione ogni volta che l'evento si triggera

// è possibile anche creare degli elementi VUOTI -> document.createElement(ilTuoTag)
// ed è possibile appenderli alla struttura esistente trovando con un metodo di selezione il suo futuro PADRE, l'elemento che
// lo conterrà e inserendolo al suo interno tramite elementoPadre.appendChild(elementoFiglio)

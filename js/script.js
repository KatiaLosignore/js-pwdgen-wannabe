console.log('JS OK');



// 1 - Prendere l'elemento dal DOM
// 2 - Chiedere all’utente il suo nome
// 3 - Salvarlo in una variabile
// 4 - Chiedere all’utente il suo cognome
// 5 - Salvarlo in variabile
// 6 - Chiedere all’utente il suo colore preferito
// 7 - Salvarlo in variabile
// 8 - Inserire la password nell' HTML






// Prendere l'elemento dal DOM
const targetElement = document.getElementById('target');
console.log(targetElement);


// Chiedere all'utente il suo nome e salvarlo in variabile
const firstName = prompt('Scrivi il tuo nome', 'nome');
console.log(firstName);

// Chiedere all'utente il suo cognome e salvarlo in variabile
const lastName = prompt('Scrivi il tuo cognome', 'cognome');
console.log(lastName);

// Chiedere all'utente il suo colore preferito e salvarlo in variabile
const color = prompt('Scrivi il tuo colore preferito', 'colorepreferito');
console.log(color);


// Creare la password
const password = firstName + lastName + color + "21";


// Inserisco la password nell' HTML
targetElement.innerText = password;
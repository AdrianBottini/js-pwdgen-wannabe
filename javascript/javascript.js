let nome = prompt("Come ti chiami?")
let cognome = prompt('come ti chiami di cognome?')
let colore = prompt('qual e il tuo colore preferito?')
document.getElementById('nome').innerHTML = nome;
document.getElementById('cognome').innerHTML = cognome;
document.getElementById('colore').innerHTML = colore;
document.getElementById ('informazioni').innerHTML = nome + cognome + colore + 22;
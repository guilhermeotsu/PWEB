const nome = prompt("Insira seu nome: ")

const n1 = prompt("Insira sua Nota 1: ")
const n2 = prompt("Insira sua Nota 2: ");
const n3 = prompt("Insira sua Nota 2: ");

alert(`${nome} sua média é ${((parseFloat(n1) + parseFloat(n2) + parseFloat(n2)) / 3).toFixed(2)}`)
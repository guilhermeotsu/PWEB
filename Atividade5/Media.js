const nome = prompt("Insira seu nome: ")

const n = []
const max = 3

for(let i = 0; i < max; i++) {
  n.push(prompt(`Insira sua Nota ${i + 1}: `))
}

const avg = n.reduce((avg, values, _, { length }) => (avg + values / length), 0)

alert(`${nome} sua média é ${avg}`)
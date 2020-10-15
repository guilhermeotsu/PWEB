let numbers = []

for(let i = 0; i < 3; i++) {
    const number = prompt(`Insira o numero ${i + 1}: `)

    numbers.push(number)
}

function maior(arr) {
    return Math.max.apply(Math, arr);
}

alert(`Maior número: ${maior(numbers)}`)
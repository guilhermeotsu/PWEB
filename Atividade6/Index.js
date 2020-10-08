init();

function init() {

  const input = parseInt(prompt("Escolha:\n\n1 - Pedra\n2 - Papel\n3 - Tesoura"))

  if(input > 4 || input < 1) {
    alert("Numero invalido!")
    return
  }

  const computer = (Math.floor(Math.random() * 3) + 1)

  // Empate
  if(input == computer) {
    alert(`Sua escolha: ${input}\nComputador: ${computer}\nEmpate!`)
    return
  }

  // Pedra > Tesoura
  switch (input) { 
    case 1:
      switch (computer) {
        case 2 : {
          alert(`Sua escolha: Pedra\nComputador: Papel\nVoce perder!`)
          return
        }
        case 3: {
          alert(`Sua escolha: Pedra\nComputador: Tesoura\nVoce ganhou!`)
          return
        }
      }

    case 2:
      switch (computer) {
        case 1: {
          alert(`Sua escolha: Papel\nComputador: Pedra\nVoce ganhou!`)
          return
        }
        case 3: {
          alert(`Sua escolha: Papel\nComputador: Tesoura\nVoce perdeu!`)
          return
        }
      }

    case 3: 
      switch (computer) {
        case 1: {
          alert(`Sua escolha: Tesoura\nComputador: Pedra\nVoce perdeu!`)
          return
        }
        case 2: {
          alert(`Sua escolha: Tesoura\nComputador: Papel\nVoce Ganhou!`)
          return
        }
      }
  }
    
}
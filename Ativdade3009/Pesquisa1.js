const randomNumber = (min, max) => (Math.floor(Math.random() * max) + min)

let peoples = []

for(let i = 0; i < 45; i++) {
  peoples.push(
    { 
      idade: randomNumber(10, 60), 
      sexo: i % 2 === 0 ? 'F' : 'M',
      opiniao: randomNumber(1, 4) 
    })
}

const media = peoples.reduce((avg, item, _, { length }) => (avg + item.idade / length), 0).toFixed(0)

const idades = peoples.map(p => p.idade)

const maisVelha = Math.max.apply(Math, idades)

const maisNova = Math.min.apply(Math, idades)

const opinioes = peoples.map(p => p.opiniao)

const pessoasPessimo = opinioes.filter(p => p === 1).length

const porcentagem = ((100 * opinioes.filter(p => p === 4 || p === 3).length) / 45).toFixed(1) + '%'

const homens = peoples.map(p => p.sexo).filter(p => p === 'M').length

const mulheres = peoples.map(p => p.sexo).filter(p => p === 'F').length

alert(
`Média das pessoas: ${media}
Mais velha: ${maisVelha}
Mais nova: ${maisNova}
Quantidade de pessoas que responderam péssimo: ${pessoasPessimo}
Porcentagem de pessoas que responderam ótimo e bom: ${porcentagem}
Numero de mulheres: ${mulheres}
Numero de homens: ${homens}`
)




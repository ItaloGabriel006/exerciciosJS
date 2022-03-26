// Fazer a média das três notas e colocar numa variável que é um array de objetos,
// EX: 
// mediasFinais = [
//     {   
//         nome: "João",
//         media: 6,
//         situacao: "aprovado"
//     }
// ]
// Depois exibir individualmente num log o nome do aluno, média e situação

let nameJ = "João"
let nameA = "Ana"
let nameF = "Fábio"

const joao = [18.5] // 6.1
const ana = [20.7] // 6.8
const fabio = [27.5] // 9.1



const mediaJoao = joao.map(num => num / 3)
console.log(parseInt(mediaJoao));

const mediaAna = ana.map(num => num / 3)
console.log(parseInt(mediaAna));

const mediaFabio = fabio.map(num => num / 3)
console.log(parseInt(mediaFabio));

if (mediaJoao >= 7 && mediaJoao <= 10) {
    console.log("Parabéns " + nameJ + " Você está Aprovado!")
} else(mediaJoao <= 6 && mediaJoao >= 0); {
    console.log(nameJ + ", Infelizmente você foi Reprovado!")
}

if (mediaAna >= 7 && mediaAna <= 10) {
    console.log("Parabéns " + nameA + " Você está Aprovada!")
} else(mediaAna <= 6 && mediaJoao >= 0); {
    console.log(nameA + ", Infelizmente você foi Reprovada!")
}
if (mediaFabio >= 7 && mediaFabio <= 10) {
    console.log("Parabéns " + nameF + ", Você está Aprovado!")
}

mediasFinais = [{
    nome: "João",
    media: parseInt(mediaJoao),
    situacao: "Reprovado!"
}, {
    nome: "Ana",
    media: parseInt(mediaAna),
    situacao: "Reprovada!"
}, {
    nome: "Fabio",
    media: parseInt(mediaFabio),
    situacao: "Aprovado!"
}]

console.log(mediasFinais)
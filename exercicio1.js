const joao = [3, 6.5, 9]
const ana = [5.7, 10, 5]
const fabio = [8, 9.5, 10]


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



let nota = 11
let aprovado = nota >= 7 && nota <= 10
let reprovado = nota <= 6 && nota > 0

let notaFinal

if (aprovado) {
    notaFinal = "Aluno(a) Aprovado(a)!"
} else if (reprovado) {
    notaFinal = "Aluno(a) Reprovado(a)!"
} else {
    notaFinal = "Nota Inválida"
}

console.log(notaFinal)
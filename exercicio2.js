const joao = [3, 6.5, 9] // 6.1
const ana = [5.7, 10, 5] // 6.9 
const fabio = [8, 9.5, 10] // 9.1


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

mediasFinais = [{
    nome: "joao",
    media: 6.1,
    situacao: "reprovado"
}, {
    nome: "ana",
    media: 6.9,
    situacao: "reprovada"
}, {
    nome: "fabio",
    media: 9.1,
    situacao: "aprovado!"
}]

console.log(mediasFinais)
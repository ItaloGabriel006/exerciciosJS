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

let notasJoao = [10, 9, 3]
let notasMaria = [9, 9, 9]
const notasFinais = []

function fazerMedia(arrayDeNotas) {
    const valorInicial = 0
    const somaNotas = arrayDeNotas.reduce((estadoAnterior, estadoAtual) => estadoAnterior + estadoAtual, valorInicial)
    const fazerCalculo = somaNotas / arrayDeNotas.length
    const formatarNumero = fazerCalculo.toFixed(0)
    return formatarNumero
}

function montarObj(nomeAluno, mediaFinal) {
    const situacao = mediaFinal >= 7 ? 'Aprovado' : 'Reprovado'
    const finalObj = {
        aluno: nomeAluno,
        media: mediaFinal,
        situacao,
    }
    notasFinais.push(finalObj)
    return `${nomeAluno} adicionado ao array de notas finais`
}

const mediaJoao = fazerMedia(notasJoao)
const mediaMaria = fazerMedia(notasMaria)

montarObj('joao', mediaJoao)
montarObj('maria', mediaMaria)

notasFinais.map((aluno) => console.log(aluno))
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
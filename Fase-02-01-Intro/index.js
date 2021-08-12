//Calcula media de notas

const aluno01 = "Joca"
const notaAluno01 = 9.8

const aluno02 = 'Maria'
const notaAluno02 = 3

const aluno03 = `Agnaldo`  //Template String
const notaAluno03 = 2

const mediaNotas = (notaAluno01 + notaAluno02 + notaAluno03) / 3

console.log(`A media dos três alunos e igual a ${mediaNotas}`)

if(mediaNotas >= 5) {
    console.log('Parabéns! Você está aprovados.');
} else {
    console.log('Infelizmente você não alcançou a média.');
}   



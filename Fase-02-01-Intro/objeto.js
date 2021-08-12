/* Objetos em JavaScript são como constantes.
A diferença é que na atribuição recebe uma notação JSON dentro de chaves
*/

const aluno01 = {
    nome: "Sergio",
    idade: 49,
    estadoCivil: "Casado",
    nota: 9.9
}

console.log(`O aluno ${aluno01.nome} tem ${aluno01.idade} anos, é ${aluno01.estadoCivil} e tirou ${aluno01.nota} na matéria.`);
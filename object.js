function novoAluno(n,notaA,notaB){

    return { 
        nome: n,
        nota1: notaA,
        nota2: notaB,
        media: function (){
            return (this.nota1 + this.nota2)/2
        }
    }

}


var turma = [
    novoAluno("João",9,9),
    novoAluno("Marcia",10,10),
    novoAluno("Luis",6,8),
    novoAluno("Pedro",5,4)
]

for (var aluno of turma){
   console.log(aluno.nome + " - " + aluno.media())
}



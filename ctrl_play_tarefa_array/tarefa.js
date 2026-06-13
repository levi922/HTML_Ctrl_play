var filmes = ["Tron: Legacy", "Exterminador do futuro", "Interestelar", "Oppenheimer", "Backrooms"]
console.log(filmes.shift())
console.log(filmes.pop())

let nota = Number(prompt("Digite a nota do aluno: "));
if (nota < 6){
    document.write("Aluno reprovado");
}
else{
    document.write("Aluno aprovado");
}

var num = 1;
while(num<=10){
    console.log(num++)
}
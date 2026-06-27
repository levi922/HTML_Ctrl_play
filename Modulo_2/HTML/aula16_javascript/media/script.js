function calc(){
    let nomaAluno = document.getElementById("nome").value;

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3)/3;
    document.getElementById("resultado").innerHTML = "<h3>Resultado</h3>"+
    "Aluno: <strong>" + nomaAluno + "</strong><br>" +
    "Nota1: " + nota1 + "<br>" +
    "Nota2: " + nota2 + "<br>" +
    "Nota3: " + nota3 + "<br>" +
    "Média Final: <strong>" + media.toFixed(2) + "</strong>"
}
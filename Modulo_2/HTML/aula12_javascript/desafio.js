// function botao(){
//     var nome1 = prompt("Nome da pessoa:");
//     var nome2 = prompt("Nome da segunda:");
//     alert(nome1 + " e " + nome2 + " um dia se encontraram sem querer")
// }

// function imc(){
//     let peso = Number(prompt("Seu peso em Kg: "));
//     let altura = Number(prompt("Sua altura em metros: "));
//     let imc = peso/(altura**2);
//     alert("Seu IMC: " + imc.toFixed(2));
// }

// function temp(){
//     var celcius = Number(prompt("Graus em Celcius para converter em Farenheit:"));
//     var temp = (9/5*celcius) + 32;
//     alert("Temperatura média: \n" + celcius + " ºC\n" + temp.toFixed(1) + "ºF");
// }

function media(){
    var nota1 = Number(prompt("primeira nota do aluno: "));
    var nota2 = Number(prompt("segunda nota do aluno: "));
    var nota3 = Number(prompt("terceira nota do aluno: "));
    var media = (nota1+nota2+nota3)/3;
    alert("Média do alnuo: "+ media.toFixed(2));
}
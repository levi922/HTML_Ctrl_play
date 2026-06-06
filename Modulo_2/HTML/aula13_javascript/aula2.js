/*var series = ["the boys", "jujutsu kaisen", "stranger things"]
var medalhadePrata = series.shift()
document.write(medalhadePrata)
series.unshift("    cavaleiro da lua")
document.write(series)*/

var numero = 0;
var resultado = 0;

while(numero!= 1){
    resultado += numero;
    numero = Number(prompt("digite o numero para somar, ou digite 0 para terminar e exibir o resultado:"));
}
document.write(resultado)
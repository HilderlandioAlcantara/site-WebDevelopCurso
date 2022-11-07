// primitive Values
// (Strings , NUmber, Boolean)
//

let name = "JC Dedex"
console.log(name)
console.log(typeof name)

let age = 29 
//funções Construção tipos variável
age = String(age)
console.log(age)
console.log(typeof age)

let num = 1;
let num29 = 5
let num3 = "2"

let numFloat = 1.0 ; //float
console.log(num, numFloat)

//variable scope(hosting) = elevar

{
    var num5 = 2
    console.log(num5)
    {
        let num5 =3
        console.log(num5)
    }
    console.log(num5)
}
//variaveis constaNTES ex: const pi = 3.14

let num1 = 10
let num2 = 20
let total = num1 + num2

console.log(`a soma de ${num1}e ${num2} é igual a ${total}` )

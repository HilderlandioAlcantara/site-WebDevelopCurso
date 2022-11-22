var aluno = window.prompt('digite o nome do aluno')

var nota = Number(window.prompt('digite a primeira nota'))

var nota2 =Number(window.prompt('digite a segunda nota')) 

function muFunction() {
return  (nota + nota2) / 2
}
console.log(muFunction)

document.write('sua média é :  ' + muFunction())

const media = muFunction(nota, nota2)
let mensagem
if (media >= 7) {
    mensagem = "aproved"
} else {
    mensagem = 'estuda ozoório'
}
window.alert(`o aluno  ${aluno} ficou com a média ${media} ... ${mensagem}`)
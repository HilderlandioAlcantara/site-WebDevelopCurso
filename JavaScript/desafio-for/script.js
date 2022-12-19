let aluno =  window.prompt('nome do aluno')
let nota1 = Number(window.prompt('digite a primeira nota'))

let nota2 = Number(window.prompt('digite a primeira nota')) 

function calcMedia(){
    
    return (nota1 + nota2)/2

}
//console.log(calcMedia())
//document.write(calcMedia())


 function abcConvert(media) {
    return toString(media)
}

function situacaoEstud(notaABC) {
    let notaLetra = 0
   if ((media >= 7 && media < 8)) {
        notaLetra = 'C'
        console.log(notaLetra)
   }if (media >=8  && media <9) {
        notaLetra = 'B'
   }if (media >= 9 && media <= 10) {
        notaLetra = 'B'
   }
     
}
     let media = (calcMedia())


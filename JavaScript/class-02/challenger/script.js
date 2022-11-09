

const n1 = Number(prompt("insira um numero " ))
const n2 = Number(prompt('insira outro numero '))

const soma = n1 + n2
const sub = n1 - n2
const mul = n1 * n2
const divi = n1 / n2
const rest = n1 % n2
const exp = n1 ** n2
const raiz = n1 **(1/ n2)

document.write(`a  soma de ${n1} e ${n2} = ${soma} <br>`)
document.write(`a  sub de ${n1} e ${n2} = ${sub} <br>`)
document.write(`a  mult de ${n1} e ${n2} = ${mul} <br>`)
document.write(`a  divi de ${n1} e ${n2} = ${divi.toFixed(2)} <br>`)
document.write(`a  resto de ${n1} e ${n2} = ${rest} <br>`)
document.write(`a  potencia de ${n1} e ${n2} = ${exp} <br>`)
document.write(`a  raiz quad de ${n1} e ${n2} = ${raiz.toFixed(2)} <br>`)
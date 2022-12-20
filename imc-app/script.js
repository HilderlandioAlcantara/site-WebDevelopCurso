const calcule = document.querySelector('.CalculaButton')
console.log(calcule);

calcule.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicou')
    const weight = Number(document.querySelector('#weight').value)
    const height = Number(document.querySelector('#height').value)
    const imc = (weight / (height/100) **2).toFixed(2) 
    console.log(weight);
    console.log(height);
    console.log(imc);

    if(height && weight){
    let situation = ''
    if (imc < 18.5){
        situation = 'Magreza'
    }else if(imc >= 18.5 && imc < 24.9){
        situation = 'Peso normal'
    }else if(imc >= 24.9 && imc < 29.9){
        situation = 'Sobrepeso'
    }else if(imc >= 29.9 && imc < 34.9){
        situation = 'Obesidade I'
    }else if(imc >= 34.9 && imc < 39.9){
        situation = 'Obesidade II'
    }else if(imc >= 39.9){
        situation = 'Obesidade III'
    }
    const result = document.querySelectorAll('.result')
    result.forEach((result)=> {
        result.innerHTML = `Seu IMC é ${imc} ${situation}`
        
    })
    
    
    const containerModal = document.querySelector('.containerModal')
    containerModal.style.display = 'grid'

    
}else{
    alert('por favor digitar peso e altura')
}
})
const closeButton = document.querySelector('.closeButton')
closeButton.addEventListener('click', ()=>{
    const containerModal = document.querySelector('.containerModal')
    containerModal.style.display = 'none'
})

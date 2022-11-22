// funcao nomeada

// function myTest(){
// console.log('TEstando função')
// }
// myTest()

// //               parametros
// function myTest(test){
//     console.log(test)
//     }
//     myTest("testando funcoes")

//     //--------------------------

//     function somar(n1, n2){
//         return n1 + n2

//     }
//     console.log(somar(20,30)
//     )
//============================
// annonymous functions


// let func = function (n1, n2){
//     let somar = n1 + n2
//     return somar

// }
// console.log(somar(70,30)
// )

//===================
// Arrow Function

// let fun = (n1, n2) => n1 + n2
// console.log(somar(70,30)
// )

//========Constructor===========

function Car(brandName, motorPower) {
    this.brand = brandName
    this.motor = motorPower
    //this.walk = () => console.log('Running ...')
}

    const uno = new Car('Fiat', 'v8')
    const camaro = new Car('chev', 'v6')
    const mustang = new Car('ford', 'v8')
    console.log(uno.brand)
    console.log(uno.motor)
    //console.log(uno.walk)
    console.log(camaro.brand)
    console.log(camaro.motor)
    console.log(mustang.brand)
    console.log(mustang.motor)




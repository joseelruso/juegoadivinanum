let numAzar=Math.floor(Math.random()*100)+1


let numEntrada=document.getElementById("numeroEntrada")

let mensaje=document.getElementById("mensaje")
let intento=document.getElementById("intento")

let intentos=0

function chekearResultado() {
    intentos ++
    intento.textContent= intentos
    let numIngresado=parseInt(numEntrada.value)
console.log(numIngresado)
    if (numIngresado < 1 || numIngresado > 100 || isNaN (numIngresado)){
        mensaje.textContent='introduce un numero valido entre 1 y 100'
        mensaje.style.color='blue';
        return /// return para salir de la funcion
    }
    if (numIngresado === numAzar ){
        mensaje.textContent= 'felicitaciones , has acertado el número';
        mensaje.style.color='green';
        numEntrada.disabled= true;
    }else if (numIngresado < numAzar) {
        mensaje.textContent= '¡Mas alto! el número es mas alto!';
        mensaje.style.color='red';
       
    }else 
    mensaje.textContent= '¡Mas bajo! el número es mas bajo!';
    mensaje.style.color='red';
    
    
}
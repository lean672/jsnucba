// Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function parYpar(numero) {if (numero % 2===0 ) {
    console.log(numero + " el numero es par ")
} else {
    console.log(numero + " es un numero impar ")
}}
parYpar(13)

// Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function menorYmayor(numeroUno,numeroDos) {if (numeroUno < numeroDos) {
   console.log(" el numero" + numeroDos + " es mas grande que el " + numeroUno ) 
}  else if (numeroUno > numeroDos) {
    console.log("el numero" + numeroUno + " es mas grande que el " + numeroDos )
} else {
console.log(" los numeros son iguales ")
}}
menorYmayor (25,25)

// Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplos(numeroMultiplo) {if (numeroMultiplo % 5===0 ) {
    console.log(" el numero es multiplo de 5" )
} else {
    console.log(" el numero no es multiplo de 5 ")
}}
multiplos (16)

// Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function numeroEscalera(escalera) { for (let index = 0; index <= escalera ; index++) {
    console.log( index );
    
}}
numeroEscalera(20)

// Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function palabra(palabra, numero) {
    for (let index = 0; index < numero ; index++) {
       console.log({palabra})
        
    }
}
palabra("hola", 5)

// - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array

function imprimirArray(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index])
        
    }
}
imprimirArray(["leandro","lautaro","mateo","fernando" ])

// Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0"

function printNumbersInArray(array) {
    array.splice(4, 1)
    for (let index = 0; index < array.length; index++){
      console.log(array[index])
    }
  }
  const ARRAY = [
    'hola-1',
    'hola-2',
    'hola-3',
    'hola-4',
    'hola-5',
    'hola-6',
    'hola-7',
    'hola-8',
    'hola-9',
    'hola-10',
  ]
  printNumbersInArray(ARRAY)
  
//   Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const arrayNumero = [1,2,4,5,6,7,8,9,10,11]
function arrayNumeros(array, numero)  {   
     for (let index = 0; index < array.length; index++) {
        let numeroMultiplicado = array[index] * numero
        console.log(numeroMultiplicado)
     }
    
    
}
arrayNumeros(arrayNumero, 2 ) 
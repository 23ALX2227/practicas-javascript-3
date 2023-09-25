//-----------------------------------------------For of vs for in:------------------------------------------

// for of:
// Iteramos un elemento iterable ( recorremos ): Ej: Array / string
// Es mas o menos lo mismo que un ejemplo de for comun que le saca el valor segun el índice ordenado:

        // let miArray = [1,2,3,4,5]
        
        // for(ele of miArray){
        //   console.log(ele)
        // }

// for in:
// Iteramos propiedades enumerables de un objeto.
// En cada iteración, el bucle devuelve el nombre de la propiedad:

        // let miObjeto = {
        //     nombre:"carlos",
        //     edad:23,
        // }

        // for(propiedad in miObjeto){
        //   console.log(miObjeto[propiedad])
        // }

// -------------------------------- miObjeto.edad


// -------------------------------------------Reconocer tipos de valores-------------------------------------
// typeof reconoce : "number" , "object", "string", "boolean", "undefined"...

//                       0            1       2         3         4 5
        // let miArray = ["hola",{nombre:"pepe"},9,{nombre:"Carlos"},5,7]

        // function separador(miArray){
          
        //   let listaNumeros = []
          
        //   for(let i = 0 ; i < miArray.length; i++){
        //     //      "number"
        //     if(typeof miArray[i] === "number"){
        //       listaNumeros.push(miArray[i])
        //     }
 
        //   }          
          
        //   return listaNumeros
        // }
        
        // separador(miArray)



// --------------------------------------
// forma de encontrar :"array" ...

        // let miArray = ["hola",{nombre:"pepe"},9,{nombre:"Carlos"},5,7,["hola","chau"], [1,2,3]]
        
        // function separador(miArray){
          
        //   let listaArrays = []
          
        //   for(let i = 0 ; i < miArray.length; i++){
        //     if(Array.isArray(miArray[i])){
        //       listaArrays.push(miArray[i])
        //     }
            
            
        //   }
          
        //   return listaArrays
        // }
        // separador(miArray)

// --------------------------------------
// typeof : Cuando quiero capturar solamente los objetos literales discriminando los arrays:

        // let miArray = ["hola",{nombre:"pepe"},9,{nombre:"Carlos"},5,7,["hola","chau"]]

        // function separador(miArray){
          
        //   let listaObjetos = []
          
        //   for(let i = 0 ; i < miArray.length; i++){
        // // opc1
        // //       if(typeof miArray[i] === "object" ){
        // // opc2
        // if( typeof miArray[i] === "object" &&  !(Array.isArray(miArray[i]))   ){
        //       listaObjetos.push(miArray[i])
        //     }
        //   }
          
        //   return listaObjetos
        // }

        // console.log(separador(miArray))


// -----------------------------------------Fin reconocimiento de types------------------------------


// ----------------------------------Métodos------------------------------



// -------------MAP >>>

//Devuelve la misma cantidad de elementos que le mandamos de un array pero con modificaciones.
// y no, no funciona con objetos.

// Primer ejemplo con números--------------------------------:

        // let miArray = [4,9,1,20]

        //             0 1 2  3

// "ele" de "elemento" es el unico argumento obligatorio en el map.Los otros son indx y array

           //[8,18,2,40]
        // let miArrayMapeado = miArray.map(function(ele){

        //   return ele*2

        // })

        // console.log(miArrayMapeado)

//Segundo ejemplo con palabras------------------------------- + varios métodos:

//Ej: dando vueltas todas las palabras de un array:

        // let miArray2 = ["Es","una","frase"]

        // // ["sE","anu","esarf"]
        // let  miArray2Mapeado    = miArray2.map(function(ele){
         
        //   return ele.split("").reverse().join("")
        // })
        // console.log(miArray2Mapeado)

        // Que hacen los métodos?
        // "Es" > split("")
        // ["E","s"] > reverse
        // ["s","E"] > join("")
        //  "sE"
        
//     let stringEjemplo = "Hola como estas"
//     console.log(stringEjemplo.split("o"))
        
        // Ejemplo split con string especifico:

        // let string = "Hola como estas"
        // let stringSplited = string.split("a")
        // console.log(stringSplited)
        
        // Ejemplo join con string específico:

        // let string = ["Hola","como","estas"]
        // let arrayJoined = string.join(" ")
        // console.log(arrayJoined)
        

// -------------REDUCE >>>

// Para que nos sirve? Tenemos un array lleno de números y los queremos sumar todos y devolver el resultado.
//Argumentos de la función: acumulador y elemento son obligatorios.

        // let miArray = [5,4,6,7]
        //    //acumulador 22
        // let miArrayReducido = miArray.reduce(function(acm,ele){
        //   return acm + ele
        // },0)

        // console.log(miArrayReducido)


//Ej con multiplicación ( ver valor inicial):

        // let miArray = [5,4,6,7]

        // let miArrayReducido = miArray.reduce(function(acm,ele,index,array){
        //   return acm * ele
        // },1)

        // console.log(miArrayReducido)


//Ej con strings :

        // let miTercerArray = ["Es ","otra ","frase"]
        
        // let miArrayReducido3 = miTercerArray.reduce(function(acm,ele){
        //   return acm + ele
        // },"el resultado es : ")
        // console.log(miArrayReducido3)

//Como concateno sin tener que agregar los espacios a mano a los strings de un array?

        // let miCuartoArray = ["Esta","es","la","última","frase"]
        // let cuartoArrayTodoJunto = miCuartoArray.join(" ")
        // console.log(cuartoArrayTodoJunto)

// ----------------------------------------------------------


// -------------FILTER >>>
// Argumentos elemento,index,array / solo element obligatorio / return true o return ele funciona.
// Ej con números:

//         let array = [4,9,12,22,2,11,3,55]
// //          [12,22,11]
//         let arrayFiltrado = array.filter(function(ele){
          
//           if(ele > 10){
//             return ele
//           }
          
//         })
//         console.log(arrayFiltrado)

// Ej con palabras:

let arrayPalabras = ["Hola","como","va","todo"]
let arrayPalabrasFiltrado = arrayPalabras.filter(function(ele){
  if(ele.length > 3){
    return ele
  }
})
console.log(arrayPalabrasFiltrado)





// ------------------------------FIN-------------------------------

// Querés conocer más métodos y con que tipos de datos los podes usar ?

// Métodos para Arrays:

// .concat(): une dos o más arrays y devuelve un nuevo array resultante.
// .filter(): crea un nuevo array con todos los elementos que cumplan con una condición especificada en una función.
// .map(): crea un nuevo array con los resultados de una función aplicada a cada elemento del array original.
// .reduce(): aplica una función acumuladora a cada elemento del array, reduciéndolo a un solo valor.
// .sort(): ordena los elementos del array alfabéticamente o numéricamente.
// .splice(): añade o elimina elementos de un array en una posición específica.
// .pop(): quita el último elemento de un array.
// .push(): añade lo que le des por parámetro al final del array.
// .shift(): añade lo que le des por parámetro al principio.
// .unshift(): quita el primer elemento de un array.


// Métodos para Objetos:

// .keys(): devuelve un array con las claves de las propiedades de un objeto.
// .values(): devuelve un array con los valores de las propiedades de un objeto.
// .entries(): devuelve un array con pares [clave, valor] de las propiedades de un objeto.
// .hasOwnProperty(): devuelve true si el objeto tiene una propiedad con la clave especificada.


// Métodos para Strings:

// .charAt(): devuelve el carácter en la posición especificada de una cadena.
// .concat(): une dos o más cadenas y devuelve una nueva cadena resultante.
// .indexOf(): devuelve la posición de la primera aparición de un carácter o una subcadena en una cadena.
// .replace(): reemplaza una subcadena con otra subcadena especificada.
// .slice(): devuelve una parte de una cadena especificada por un índice de inicio y un índice de final.
// .split(): divide una cadena en un array de subcadenas separadas por un delimitador especificado.
// Además de los arrays, objetos y strings, otros tipos de datos en JavaScript también pueden tener métodos, como los números (toFixed(), toPrecision(), toString(), etc.), las fechas (getFullYear(), getMonth(), getDate(), etc.) y las expresiones regulares (test(), exec(), etc.).
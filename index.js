const { randomInt } = require("crypto");

//Se define la dimension las matrices. Ejemplo: matriz de 3x3
const nxn = randomInt(2, 5);

//Se crean las matrices
function crearMatrizBidimencional(paramNxN) {
  const array = [];
  for (let i = 0; i < paramNxN; i++) {
    array[i] = [];
    for (let j = 0; j < paramNxN; j++) {
      array[i][j] = randomInt(1, 100);
    }
  }
  return array;
}

//Se crea la tercera Matriz teniendo en cuenta que la primera y la segunda deben ser del mismo tamaño. La cual almacenara el resultado de la multiplicacion de las dos matrices
function CrearMatriz3(matriz1, matriz2) {
  const matriz = [];
  for (let i = 0; i < matriz1; i++) {
    matriz[i] = [];
    for (let j = 0; j < matriz2; j++) {
      matriz[i][j] = 0;
    }
  }
  return matriz;
}

//Se guarda en una constante el resultado de la creacion de la primer  matriz
const matriz1 = crearMatrizBidimencional(nxn);

//Se guarda en una constante el resultado de la creacion de la segunda  matriz
const matriz2 = crearMatrizBidimencional(nxn);

console.log(matriz1.length, matriz2[1].length);
//Se guarda en una constante el resultado de la creacion de la tercera  matriz
const matriz3 = CrearMatriz3(matriz1.length, matriz2[0].length);

//Se guarda en una constante el resultado de la multiplicacion de las matrices
const Resultado = multiplicacionMatrices(matriz1, matriz2, matriz3);

//Se crea la funcion que realiza la multiplicacion de las matrices
function multiplicacionMatrices(paramArray1, paramArray2, paramArray3) {
  for (let i = 0; i < paramArray1.length; i++) {
    for (let j = 0; j < paramArray1[i].length; j++) {
      for (let k = 0; k < paramArray1[i].length; k++) {
        paramArray3[i][j] += paramArray1[i][k] * paramArray2[k][j];
      }
    }
  }
  return paramArray3;
}

//Se imprimen las dos matrices a operar y el resultado de la multiplicacion de las mismas
console.log(
  "--------------------------MULTIPLICACION DE MATRICES-----------------------------"
);
console.log("Matriz 1");
console.table(matriz1);
console.log("-------------------------------------------------------");
console.log("Matriz 2");
console.table(matriz2);
console.log("-------------------------------------------------------");
console.log("Resultado: Matriz 3");
console.table(Resultado);
console.log("-------------------------------------------------------");

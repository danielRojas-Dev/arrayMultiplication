const { randomInt } = require("crypto");

const unoDiez  = randomInt(1, 5)


const unoCien = randomInt(1, 5)




function fill2DimensionsArray(paramUnoDiez, paramUnoCien) {
    const array = []
    for(let i = 0; i < paramUnoDiez; i++){
        array[i] = []
        for(let j = 0; j < paramUnoCien; j++){
            array[i][j] = randomInt(1, 100)
        }
    }
    return array
}

const array1 = fill2DimensionsArray(unoDiez, unoCien);
const array2 = fill2DimensionsArray(unoCien, unoDiez);

console.log('array 1');
console.table(array1)
console.log('array 2');
console.table( array2);

function multiplicationaArray(paramArray1, paramArray2) {
    for(let i = 0; i < paramArray1.length; i++){
        for(let j = 0; j < paramArray1[i].length; j++){
            paramArray2[j][i] = paramArray1[i][j] * paramArray2[j][i]
        }
    }
    return paramArray2
}

console.log('array 3');
const matriz3 = multiplicationaArray(array1, array2);
console.table(matriz3);


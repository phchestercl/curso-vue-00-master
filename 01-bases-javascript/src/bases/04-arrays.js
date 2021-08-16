'use strict'
const arreglo = [1, 2, 3, 4]
arreglo.push(5)

console.log(arreglo)
const arrelgo2 = arreglo
arrelgo2.push(6)
console.log(arrelgo2)

const arreglo3 = [...arreglo]

console.log(arreglo3)
arreglo3.push(7)
console.log(arreglo3)

const arrelgo4 = arrelgo2.map((n) => {
    return n * 2
})

console.log(arrelgo4)
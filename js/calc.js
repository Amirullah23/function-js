let a = prompt('first number')
let b = prompt('second number')

let digitA = parseInt(a)
let digitB = parseInt(b)

const resultAddition = digitA + digitB
const resultSubstraction = digitA - digitB
const resultMultiplication = digitA * digitB
const resultDivison = digitA / digitB

console.log("First number " + digitA)
console.log("second number " + digitB)

console.log(`${digitA} plus ${digitB} is :` + resultAddition)
console.log(`${digitA} min ${digitB} is :` + resultSubstraction)
console.log(`${digitA} * ${digitB} is :` + resultMultiplication)
console.log(`${digitA} / ${digitB} is :` + resultDivison)
//Operators

//Arithmetic operators
var a=2
var b=4
console.log('a+b=',a+b)
console.log('b-a=',b-a)
console.log('b/a=',b/a)
console.log('b*a=',b*a)
console.log('b**a=',b**a)
console.log('b%a=',b%a)

//Assignment operators
console.log('b',a)
b+=4
console.log('b+=4',b)
b++
console.log('b++',b)
b-=4
console.log('b-=4',b)
b--
console.log('b--',b)

var c=4
console.warn(c++)
console.log(c)
// console.warn(++c)
// console.log(c)


//Comparison operators
var d = 10
var e = 2
var f = '10'

console.log(d > e)
console.log(d < e)
console.log(d >= e)
console.log(d <= e)
console.log(d == e)

console.warn(d == f)
console.warn(d === f)

// Logical operators

console.log('true && true ', true && true)
console.log('true && false', true && false)
console.log('false && true', false && true)
console.log('false && false', false && false)

console.log('true || true ', true || true)
console.log('true || false', true || false)
console.log('false || true', false || true)
console.log('false || false', false || false) 
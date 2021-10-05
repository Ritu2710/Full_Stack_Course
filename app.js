// function greet(Name='riya',age='45'){
//     console.log(Name,age)
//     // console.log('Hello world')
//     // console.log('Hey ' + Name + " Your age is " +age)
// }
// greet()


 function add(a = 0, b = 0) {
     console.log('declaration')
        var sum = a + b
        return sum
 }


 console.log(add(10, 20))



    var add = function (a = 0, b = 0) {
        console.log('expression')
        var sum = a + b
        return sum
    }

    console.log(add(10, 20))

//arrow function


    const greet = name => 'h1 ' + name



    console.log(greet('Prabakaram'))


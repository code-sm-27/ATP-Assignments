// Closure in JS

// A function can be stored in a variable
// A function can be sent as arg to another function
// A function can return another function

function count()
{
    let counter=0
    // counter++
    // return counter
    return function(){
        counter++
        return counter
    }
}

let x = count()
console.log(x())
console.log(x())
console.log(x())


// Rest Parameters in JS
function getSum(b,...a){   //rest Parameter
    return a.reduce((x,y)=>x+y)
}
console.log(getSum(10,20))
console.log(getSum(10,20,30))
console.log(getSum(10,20,30,40,50,60))
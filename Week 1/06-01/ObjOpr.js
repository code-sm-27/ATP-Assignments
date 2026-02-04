//Mutable
//All references are mutable


//Immutable
//Primitives are immutable
/*
let x = 10
x = x+1
console.log(x)


let emp = {
    eno: 1,
    ename: 'sm'
}

//Adding new property(dynamic)
emp.city = 'hyderabad'
//Update a property
emp.eno = 2
//delete a prop
delete emp.city

//freeze an Object
Object.freeze(emp)

//return keys
console.log(Object.keys(emp))
//return values
console.log(Object.values(emp))


//Unpack Object(destructuring)

let test = 
{
    a:10,
    b:20,
    c:30
}

let {a,b,c} = test

a = 14
console.log(a)



// Complex Object

let student = 
{
    sno:100, 
    name:"sm",
    marks:[90,94,91],
    address:{
        city:'Hyderabad',
        pin: 402402
    },
    getData:function()
    {
        console.log(this.marks[0])
        console.log(this.address.city)

    },
    getAverage:function()
    {
        let res = 0
        for(i in this.marks){ res += this.marks[i] }
        res = res / this.marks.length
        console.log(res)
    }

}
student.getAverage()

*/

// Assignment 2

let st = {
    marks:
    {
    maths: 78,
    physics: 65,
    chemistry: 82,
    english: 55
    },
    getTotal:function()
    {
    let res = 0
    for(i in this.marks) { res = res + marks[i]}
    return res
    },
    getAverage:function()
    {
        return this.getTotal()/4
    },
    getMax:function()
    {
        return Math.max(Object.values(this.marks))
    }
    };
console.log(st.getTotal())


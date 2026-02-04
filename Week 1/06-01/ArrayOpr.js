/*let skills = ['html','java','c','python']

//Acessing Elements(destructuring)

//Inserting
//at Start
skills.unshift('anuglar','java')

// at Last
skills.push('c#')

//in beteen
//splice(index, delete count, elememts)
skills.splice(2,0,'c++')

//Delete
//at start
skills.shift()

//at end
skills.pop()

//in between
skills.splice(1,1)



let marks = [90,50,43,89,64]

//Function to extract marks greater than 70 and pack them into an array and return it

function extract(marks)
{
    let res = []; for(i in marks) {if(marks[i]>70){res.push(marks[i])}}; console.log(res);
}
extract(marks)

let res1 = marks.filter(i=>i>70)
let res2 = marks.filter(i=>i>30 && i<90)
console.log(res2)


//map for modification


let res3 = salaries.map(function(element){
    return element>50
})

console.log(res3)

//reduce(aggregation)

let res4 = salaries.reduce((x,y)=>x+y)
console.log(res4)

let min = salaries.reduce((x,y)=>x<y?x:y)
console.log(min)

//find element

let salaries = [100,200,200,200,200,300]
let res5 = salaries.findIndex(i => i===200)
console.log(res5)
*/
let st = 
[
    {sno: 1, name: "Shiva",age:22},
    {sno: 2, name: "Mani", age:23},
    {sno: 3, name: "Sai", age:26},
]

let res1 = st.filter(i => i.age <20)
console.log(res1)

//Find sum of ages of all students
let res2 = st.reduce((i,j)=>i+j.age, 0)
console.log(res2)
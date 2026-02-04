//Array(Ordered)
/*
let marks = [99,96,97]
let names = ["Shiva","Mani","Sai"]
console.log(marks.at(-2))
console.log(names[0])
*/

//Iterate

/*for(let index =0;index < marks.length; index++)
    {
        console.log(marks[index])
    } 
*/

// for-of loop
/*
for(let v of marks)
{
    console.log(v)
}
*/

//Write a fun that receives marks array as arg and returns the min element
/*
let res = Number.MAX_VALUE
for(let i of marks)
{
    if(i < res) {res = i}
}

console.log(res)
*/


function check(skills,skillName)
{
    res = -1
    for(let i = 0;i<skills.length;i++)
    {
        if(skills[i] == skillName) {res = i}
    }
    if(res == -1) {return "Skill Not Found"} else {return res}
}
console.log(check(['html','css','java','python'],'js'))

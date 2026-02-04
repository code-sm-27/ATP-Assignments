let isLoggedIn = true
let isProfileComplete = false

let msg1 = ""
let msg2 = ""
if (!(isLoggedIn))
{
    msg1 = "Please Login"
}
else
{
    if(!(isProfileComplete))
    {
        msg2 = "Complete your Profile"
    }
    else
    {
        msg2 = "Welcome Back!"
    }
}

if (msg1 != ""){console.log(msg1)}
console.log(msg2)
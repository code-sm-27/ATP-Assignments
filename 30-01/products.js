//import express module
import exp from "express";
//create server
const app = exp();

//create a custom middleware
function middleware1(res,req,next){
    console.log("middleware executed");
    //send res 
    //res.json({res from middleware})
}
//to execute every incoming req
app.use(middleware1)
let users=[];
//define port number
app.listen(3000, () =>
  console.log("HTTP Server is listening on port 3000..")
);
//body parseing middleware
app.use(exp.json())
//create http server
app.get("/users", (req, res) => {
  res.status(200).json({ message:"all users",payload:users});//message,payload
});
// post request (create user api)
app.post("/users", (req, res) => {
 let newUser=req.body;
  //insert new users to users array
  users.push(newUser);
  res.status(200).json({ message: "User Created", payload: newUser });
});
// put request (update user api)
app.put("/users/:id", (req, res) => {
  //get modified user from req body
  //find the user by id and update the user details
  //if user not found send user not found message
  //if user found update the user details and send success message
  //send res as "user modified"
  let modifiedUser=req.body;
  let userIndex=users.findIndex(userObj=>userObj.id===modifiedUser.id);
    if(userIndex===-1){     
       return res.status(404).json({message:"user not found"});
    }
    let deletedUser=users.splice(userIndex,1,modifiedUser);
    res.status(200).json({message:"user modified",payload:modifiedUser});  

  /*let newUserx=req.body;
  const { id, name, age } = req.body;
  const userid = users.find(u => u.id === id);
  if(!userid){
     res.json({ message: "user not found" });
  }
  else{
    userid.name=newUserx.name
    userid.age=newUserx.age
    res.json({ message: "User Modified", payload: userid });

  }

 */


});

app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    let userid=Number(req.params.id);
    //read user by id from users array
    let user=users.find(userObj=>userObj.id===userid);
    //send response
    if(!user){
      return res.status(404).json({message:"user not found"});
    }
    res.status(200).json({message:"user found",payload:user})
});
// delete request (delete user api)
app.delete("/users/:id", (req, res) => {
  let userid=Number(req.params.id);
  let userIndex=users.findIndex(userObj=>userObj.id===userid);
  if(userIndex===-1){
    return res.status(404).json({message:"user not found"});
  }
  const DeletedUser=users.splice(userIndex,1);
  res.status(200).json({message:"user deleted",payload:DeletedUser});
});
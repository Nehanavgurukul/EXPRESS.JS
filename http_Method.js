const express = require("express");
const app = express();
const port = 5005;
const http = require ("http");
const students = require("./students.js");
app.use(express.json());




app.get("/",(req,res)=>{                                                // this api is without id ,just want to see data
  res.send(students)
})

app.get("/api/get/:id", function (req,res){                             // this api is for id ,here will do through id 
  const id = req.params.id
  for (var i = 0; i<=students.length; i++){
        const name_id = students[i]["id"]
        if(name_id == id ){
            res.send(students[i]);
        };
  };
});





app.post("/api/post/", function (req,res){
  if(!req.body.email){
    console.log("here is 400 error")
    res.status(400)
    return res.json({error : "email is require..."})
  }else if(!req.body.first_name){
    res.status(400)
    return res.json({erroe:"first_name is reuqire..."})
  }else if(!req.body.last_name){
    res.status(400)
  return res.json({error:"last_name is require..."})
  }else if(!req.body.gender){
    res.status(400)
    return res.json({error:"gender is require..."})
  }
  const user = {
    id:students.length + 1,
    first_name: req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    gender:req.body.gender
  }

  students.push(user);
  res.json(user);
});






app.put("/api/put/:id", function (req,res){
  let id = req.params.id
  let first_name = req.body.first_name
  let last_name = req.body.last_name
  let email = req.body.email
  let gender = req.body.gender


  let index = students.findIndex((student) => {
        return (student.id == Number.parseInt(id));
  })

  if(index >= 0){
    let std = students[index]
    std.first_name = first_name
    std.last_name = last_name
    std.email = email
    std.gender = gender
    res.json(std)
  }else{
    res.status(404)
  }
});



app.delete("/api/student/:id", function (req,res){
      let id = req.params.id
      let index = students.findIndex((student) => {
        return (student.id == Number.parseInt(id));
      })

      if(index >= 0){
        let std = students[index]
        students.splice(index , 1)
        res.json(std)
    
      }else{
        res.status(404)
      }
});


app.listen(port, function (req, res){
  console.log(`server is running at port no ,${port}`);
});
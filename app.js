const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https = require("https");
const app= express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");

});
app.post("/",function(req,res){
  const first=req.body.fname;
  const last=req.body.lname;
  const email=req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: first,
          LNAME: last
        }
      }
    ]
  }
const jsonData=JSON.stringify(data);

  const url="https://us17.api.mailchimp.com/3.0/lists/02f3670d59"
   const options = {
    method: "post",
    auth: "Esha:c349d9438846e3617cf7442bda4ee103-us17"
  }
const request = https.request(url,options,function(response){
  console.log(response)
    response.on("data",function(data){
      if(response.statusCode===200){
          res.JSON(__dirname+"/success.html");
      }
      else{
          res.JSON(__dirname+"/failure.html");
      }
      console.log(JSON.parse(data));
    })
  })
  request.write(jsonData);
  request.end();
});

app.post("/failure",function(req,res){
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("server running on port 3000");
});


//API key
//c349d9438846e3617cf7442bda4ee103-us17
//AUDIENCE KEY
//02f3670d59
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https = require("https");
const app= express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");

});
app.post("/",function(req,res){
  const first=req.body.fname;
  const last=req.body.lname;
  const email=req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: first,
          LNAME: last
        }
      }
    ]
  }
const jsonData=JSON.stringify(data);

  const url="https://us17.api.mailchimp.com/3.0/lists/02f3670d59"
   const options = {
    method: "post",
    auth: "Esha:c349d9438846e3617cf7442bda4ee103-us17"
  }
const request = https.request(url,options,function(response){
  console.log(response)
    response.on("data",function(data){
      if(response.statusCode===200){
          res.JSON(__dirname+"/success.html");
      }
      else{
          res.JSON(__dirname+"/failure.html");
      }
      console.log(JSON.parse(data));
    })
  })
  request.write(jsonData);
  request.end();
});

app.post("/failure",function(req,res){
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("server running on port 3000");
});


//API key
//c349d9438846e3617cf7442bda4ee103-us17
//AUDIENCE KEY
//02f3670d59const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https = require("https");
const app= express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");

});
app.post("/",function(req,res){
  const first=req.body.fname;
  const last=req.body.lname;
  const email=req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: first,
          LNAME: last
        }
      }
    ]
  }
const jsonData=JSON.stringify(data);

  const url="https://us17.api.mailchimp.com/3.0/lists/02f3670d59"
   const options = {
    method: "post",
    auth: "Esha:c349d9438846e3617cf7442bda4ee103-us17"
  }
const request = https.request(url,options,function(response){
  console.log(response)
    response.on("data",function(data){
      if(response.statusCode===200){
          res.JSON(__dirname+"/success.html");
      }
      else{
          res.JSON(__dirname+"/failure.html");
      }
      console.log(JSON.parse(data));
    })
  })
  request.write(jsonData);
  request.end();
});

app.post("/failure",function(req,res){
  res.redirect("/");
})




//API key
//c349d9438846e3617cf7442bda4ee103-us17
//AUDIENCE KEY
//02f3670d59
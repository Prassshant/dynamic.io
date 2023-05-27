const express = require('express');
//requireing hbs
const hbs=require("hbs")
const app = express();

const port = 5000;

// connecting to database
const mongoose=require("mongoose")

const bodyParser=require("body-parser");
// reuireing routes from main js
const routes=require('./routes/main');
const Detail=require("./models/Detail");
const Slider=require("./models/Slider");
const Service=require("./models/Service");
const Gallery=require("./models/Gallery");
// to pass the body in url by using
app.use(bodyParser.urlencoded({
  extended:true
}));


app.use('/static',express.static("public"));


app.use('',routes);
// template engine
app.set("view engine","hbs");
app.set("views","views");
hbs.registerPartials("views/partials");

// app.get("/contact", (request, response) => {
//     response.send("<h1>Hello, world!</h1>");
//   });

// db connection
mongoose.connect('mongodb://127.0.0.1/Dynamicwebsite', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log('Error:', err));
  // Gallery.create({
  //   imageUrl:"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg",


  // });
  //  Service.create([
  // {
  //   icon:"fa-solid fa-bomb",
  //   title:"Provide Best Course",
  //   description:"we provide courses that helps our student inlearning and in placement",
  //   linkText:"https://www.learnwithme.com",
  //   link:"Service",
  //   link:"check",
    
  // },
  // {
    
  //     icon:"fa-solid fa-arrow-right",
  //     title:"Provide Best Course",
  //     description:"we provide courses that helps our student inlearning and in placement",
  //     linkText:"https://www.learnwithme.com",
  //     link:"Service",
      
      
    
  // },
  // {
  //   icon:"fa-solid fa-arrow-right",
  //   title:"Provide Best Course",
  //   description:"we provide courses that helps our student inlearning and in placement",
  //   linkText:"https://www.learnwithme.com",
  //   link:"learn",
    
    
  // },


  //  ]);
  
    
  //     {
  //       label:"Gallery",
  //       url:"/gallery",
        
        
  //     },// Detail.create({
  //   brandName:"Info Techninal Solution",
  //   brandIconUrl:"https://cdn-icons-png.flaticon.com/128/10775/10775247.png",
  //   links:[
  //     {
  //       label:"Home",
  //       url:"/home",
        
        
  //     },
  //     {
  //       label:"Contact Us",
  //       url:"/contact us",
        
        
  //     },
  //     {
  //       label:"Service",
  //       url:"/service",
        
        
  //     },
  //     {
  //       label:"About",
  //       url:"/about",
        
        
  //     },
      

  //   ]
//   // })
//   Slider.create([
//     {
//       title:"Learn java in very easy manner",
//       subTitle:"java is cool",
//       imageUrl:"https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0&h=180",

//   },
//   {
//     title:"Learn python  in very easy manner",
//     subTitle:"java is hot",
//     imageUrl:"https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0&h=180",

// },
// {
//   title:"Learn javascript in very easy manner",
//   subTitle:"javascript is bone freezing",
//   imageUrl:"https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0&h=180",

// },

// ]);

 
app.listen(port, () => {
    console.log("Server running on port " + port);
  });

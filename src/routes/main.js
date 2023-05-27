const express=require('express');
const{route}=require('express/lib/application');


const Detail =require("../models/Detail");
const Slider=require("../models/Slider");
const Contact=require("../models/contact")
const Service=require("../models/Service");
const Gallery=require("../models/Gallery");
// using hbs to render
const routes=express.Router()
routes.get("/", async (req,res)=> {
    const details= await Detail.findOne({"_id":"646be02727d218b51d5c3899"})
    const slides= await Slider.find()
    const services = await Service.find()
    res. render("index",{
        details:details,
        slides:slides,
        services:services,
    });
});




routes.get("/gallery",async (req,res)=> { const details= await Detail.findOne({"_id":"646be02727d218b51d5c3899"})
const photos=await Gallery.find()
res. render("gallery",{
    details:details,
    photos:photos,

});

});

routes.post("/process-contact-form",async(request,response)=> {
    console.log('form is submited')
    console.log(request.body)
    //save the data to db
    //created model
    try{
        const data= await Contact.create(request.body)
        console.log(data)
        response.redirect("/")

    } 
    catch(e){
        console.log(e)
        response.redirect("/")

    }
});

module.exports=routes;
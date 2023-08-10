const express = require("express")
const { route } = require("express/lib/application")

const routes = express.Router()

const Detail = require("../models/Details")
const Slider = require("../models/Slider")
const Service = require("../models/Services")
const Contact = require("../models/Contact")

routes.get("/", async (req, res) =>{
  const details = await  Detail.findOne({"_id" : "64cb2da47595da78e75f635a"})
  const slides = await Slider.find()
  const services = await Service.find()
  // console.log("details : ", details)
  // console.log("slider" , slides)
  

  res.render("index", {
    details : details,
    slides : slides,
    services: services
  })
})

routes.get("/gallery", async (req, res) =>{
  const details = await  Detail.findOne({"_id": "64cb2da47595da78e75f635a"})
  res.render("gallary", {
    details : details
  })
})

// proces contact form
routes.post("/process-contact-form", async (request, response) =>{
  console.log("form is submitted")
  // console.log(request.body)
  // save data to db
  try{
    const data = await Contact.create(request.body)
    // console.log(data)
    response.redirect("/")
  }
  catch(e){
    console.log(e)
    response.redirect("/")
  }
})


module.exports = routes;

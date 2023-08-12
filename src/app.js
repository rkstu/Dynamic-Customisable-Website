const express = require("express")
const hbs = require("hbs")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Detail = require("./models/Details")
const Slider = require("./models/Slider")
const Service = require("./models/Services")
const routes = require("./routes/main")


app.use(bodyParser.urlencoded({
  extended: true
}))
app.use("/static", express.static('public'))
app.use("", routes)

// tamplate engine
app.set('view engine', 'hbs')
app.set('views', "views")
hbs.registerPartials("views/partials")

// db connection
mongoose.connect("mongodb+srv://@@@@@@@:123567@cluster0.r7drk.mongodb.net/Dynamic_website", ()=>{
  // console.log("DB connected")

})


app.listen(process.env.PORT | 5556, () => {
  // console.log("Server started");
})

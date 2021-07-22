require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const busRouter = require("./controllers/bus.controller");
const Bus = require("./models/bus.model");

const app = express();

app.use(express.json());

const connect = ()=>{
    // return mongoose.connect("mongodb://127.0.0.1:27017/project", {
    return mongoose.connect(`mongodb+srv://goibibo:${process.env.ATLAS_PASSWORD}@cluster0.s5bzz.mongodb.net/project?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

app.get("/", async(req, res)=>{
    res.send({data: "hello"});
})

app.use("/bus", busRouter);

app.listen(2244, async()=>{
    await connect();
    console.log("Listening at 2244");
})

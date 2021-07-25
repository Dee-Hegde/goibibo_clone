const express = require("express");
const busRouter = express.Router();

const Bus = require("../models/bus.model.js");

busRouter.get("/", async(req, res)=>{
    console.log("sending bus data");
    const temp = await Bus.find().lean().exec();
    res.send({data: temp});
})

busRouter.post("/:id", async(req, res)=>{
    try {
        console.log("patching bus data");
        const temp = await Bus.findById(req.params.id).lean().exec(); // need the actual id of the bus
        let seats_arr = temp.seats;
        console.log(seats_arr);
    
        let u_cost = temp.seats[0].cost;
        let l_cost = temp.seats[temp.seats.length-1].cost;
    
        console.log("u_cost", u_cost);
        console.log("l_cost", l_cost);
    
        let seat_arr_len = req.body; // array of booked seats
    
        for(let i=0; i<3; i++){
            for(let j=0; j<seats_arr.length; j++){
                if(seats_arr[j].pos==seat_arr_len[i]){
                    seats_arr[j] = {
                        pos: seat_arr_len[i],
                        status: true,
                        cost: 900
                    }
                }
            }
        }
    
        const output = await Bus.findByIdAndUpdate(req.params.id, {seats: seats_arr});
        res.send({data: output}); 
    } catch (e) {
        res.send({message: "something went wrong"});
    }
})

module.exports = busRouter;

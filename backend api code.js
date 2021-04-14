const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/stockDB",{useNewUrlParser: true});

const stockSchema= new mongoose.Schema({
    name: String,
    symbol:String,
    marketcap: String,
    currentPrice: String 
});

const Stock = mongoose.model("Stock",stockSchema);


app.route("/")
    .get((req, res)=>{
        Stock.find({}, (err, foundItem) => {
            if(! err){
                res.send(foundItem)
            }
            else{
                res.send(err);
            }
        })
    })

    .post((req, res)=> {
        console.log(req);
        const newStock = new Stock({
            name: req.body.name,
            symbol: req.body.symbol,
            marketcap: req.body.marketcap,
            currentPrice: req.body.currentPrice
        })
    
        newStock.save((err) => {
            if(!err){
                res.send("sent successfully")
            }
            else{
                res.send("error");
            }
        })
    }) 




app.listen(3001, () => {
    console.log("server started");
  })
  
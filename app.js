var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    request = require("request");

    app.use(bodyParser.urlencoded({extended:true}));
    app.set("view engine", "ejs");
    app.use(express.static(__dirname+ "/public"));

    //INDEX route
    app.get("/", function(req, res){
        res.render("index");
    });

    //portfoio route
    app.get("/portfolio", function(req, res) {
        res.render("portfolio");
    });

    //skills route
    app.get("/skills", function(req, res){
        res.render("skills");
    });

    //contact route
    app.get("/contact", function(req, res){
        res.render("contact");
    })

    app.listen(process.env.PORT||3000, process.env.IP, function(){
        console.log("Portfolio server has started!");
    });
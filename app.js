const express = require("express");
const bodyParser = require("body-parser");
 
const { urlencoded } = require("body-parser");
const app = express();
// var item="";
let items = ["BuyFood", "CookFood", "EatFood"];
let workitems = [];
app.set("view engine", "ejs");
// app.use("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
    let today = new Date();
    // var current=today.getDate();
    // var current=today.getDay();
    // var day="";
    // if(current===6 || current===0)
    // {
    //     // res.write("<h1>Yay it's the weekend!</h1> ");
    //     day="Weekend";
    //     // res.sendFile(__dirname+"/weekend.html");
    //     // res.render("list",{kindofday:day});
    // }
    // else{
    //     // res.write("<p>It's not the weekend </p>")
    //     // res.write("<h1>Boo! I have to work</h1>");
    //     // res.send();
    //     day="WeekDay";
    //     // res.sendFile(__dirname + "/weekday.html");
    //     // res.render("list",{kindofday:day});
    // }
    // switch(current){
    //     case 0:
    //         day="Sunday";
    //         break;
    //         case 1:
    //             day="Monday";
    //         break;
    //         case 2:
    //             day="Tuesday";
    //         break;
    //         case 3:
    //             day="Wednesday";
    //         break;
    //         case 4:
    //             day="Thursday";
    //         break;
    //         case 5:
    //             day="Friday";
    //         break;
    //         case 6:
    //             day="Saturday";
    //         break;
    //         default:console.log("Error! Curren day is "+day);
    // }
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    res.render("list", { kindofday: day, newListItems: items });
});
app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workitems.push(item);
        res.redirect("/work");
    }
    else
    {items.push(item);
    // console.log(item);
    // res.render("list",{newListItem:item});
    res.redirect("/");}
});
app.get("/work", function (req, res) {
    res.render("list", { kindofday: "Work List", newListItems: workitems });
});
app.get("/about",function(req,res){
res.render("about");
});
// app.post("/work",function(req,res){
//  item=req.body.newItem;
// workitems.push(item);
// res.redirect("/work");
// });
app.listen(3000, function () {
    console.log("Server started on port 3000!");
});
import express from "express";
import bodyParser from "body-parser"


const app = express();
const port = 2000;
let todos = [];

const d = new Date(); const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]; 
let dayName = weekday[d.getDay()]; 
let date = d.getDate(); 
let monthName = month[d.getMonth()];
var fulldate = dayName + "," + " " + date + " " + monthName;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs", {todo: todos, date: fulldate});
});

app.post("/", (req,res) => {
    let newItem = req.body.items;
    todos.push(newItem);
    console.log(todos);
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`server is running on port ${port}.`);
});




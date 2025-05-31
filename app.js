let express = require("express")
const { books } = require("./database/connection")
const bookRoute = require("./routes/bookRoute")
let app = express()

require("./database/connection")
app.use(express.json())
//compulsory in all projects
// app.get("/",(req,res)=>{
//     res.json({
//         name: "Munal",
//         address : "nepal"
//     })
// });


// app.get("/about",function(req,res){
//     res.json({
//         name: "This is about page"
        
//     })
// });
// app.post("/register",function(req,res){
//     res.json({
//         name:"registered successfully"
//     })
// });  

//crud operation

postgresql://postgres.aumlxnrdhaxqvmcqfjol:hahahehehuhu123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

app.use("",bookRoute)

app.listen(4000,function(){
    console.log("server/backend/node project has started at port 3000")
})
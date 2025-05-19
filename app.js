let express = require("express")
let app = express()

require("./database/connection")
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
app.get("/books", function(req,res){
    //logic to fetch book from database goes here..

    res.json({
        message : "Books fetched successfully"
    })
})

app.post("/books", function(req,res){
    //logic to add book to database goes here..

    res.json({
        message : "Books added successfully"
    })
})

app.delete("/books/:id", function(req,res){
    res.json({
        message: "Book deleted successfully"
    })

})

app.patch("/books/:id", function(req,res){
    res.json({
        message: "Book updated successfully"
    })

})
postgresql://postgres.aumlxnrdhaxqvmcqfjol:hahahehehuhu123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

app.listen(4000,function(){
    console.log("server/backend/node project has started at port 3000")
})
const { books } = require("../database/connection")


exports.fetchbooks = async function(req,res){
    //logic to fetch book from database goes here..
    const datas = await books.findAll()
    res.json({
        message : "Books fetched successfully",
        datas
    })
}

exports.addBook = async function(req,res){
    //logic to add book to database goes here..
    const {bookName,bookPrice,bookAuthor,bookGenre} = req.body
    await books.create({
        bookName : bookName,
        bookPrice : bookPrice,
        bookAuthor,
        bookGenre
         // columnName : value
    })

    res.json({
        message : "Books added successfully"
    })
}

exports.deletebook =  function(req,res){
    res.json({
        message: "Book deleted successfully"
    })

}

exports.editbook = function(req,res){
    res.json({
        message: "Book updated successfully"
    })

}
// module.export{} //yesari ni export garnu milxa

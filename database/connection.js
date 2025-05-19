
// database connection code
const {Sequelize, DataTypes} = require("sequelize")

// const sequelize = require("sequelize")
// const sequelize = sequelize.sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.aumlxnrdhaxqvmcqfjol:hahahehehuhu123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

// to check if connected or not
sequelize.authenticate()
.then(()=>{
    console.log("authenticated vayo,connected vayo")
})
.catch((err)=>{
    console.log("error aayo" + err)
})

const db ={}
db.sequelize = "sequelize"
db.sequelize = "sequelize"

//code for exporting
module.exports = db
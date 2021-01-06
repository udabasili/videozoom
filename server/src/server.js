const { PORT } = require("./config");
const app = require("./loader/app");
const db = require("./loader/db");
db.on('error', console.error.bind(console,"Mongoose error raised"))
console.log(PORT)
app.listen(5000,function(){
    db.once('open', function(){
        console.log("Database running")
    })
    console.log('Server running')
})
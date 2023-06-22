const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
    usenewUrlParser : true 
}).then(db => console.log(db,"is Connected"))
.catch(error => console.log(error))
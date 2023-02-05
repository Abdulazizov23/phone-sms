const mongoose = require('mongoose')

const connectDB = async () => {
     await mongoose.connect(process.env.MongoDB_URL, {useNewUrlParser: true})
    .then(()=>{
        console.log(`MongoDB Connected`)
    }).catch((err)=>{
        console.log("err connection database")
    })
}

module.exports = connectDB
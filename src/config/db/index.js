
const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/education');
        console.log('success')
    } catch (error) {
        console.log('fasle')
    }
    
}
module.exports= {connect}
module.exports= {
    mutipleMongooseToOject: function(mongooses){
        return mongooses.map(mongoose=> mongoose.toObject())
    } ,
    mongooseToOject: function(mongooses){
        return mongooses ? mongooses.toObject() : mongooses
    }

}
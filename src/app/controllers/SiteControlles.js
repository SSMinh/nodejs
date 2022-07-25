const Course = require('../models/Course')
const {mutipleMongooseToOject} =require('../../until/mongoose')
class SiteControllers {
  //get
  index(req, res, next) {
    Course.find({}) 
    .then(courses=>{
     
    return  res.render('home', {courses : mutipleMongooseToOject(courses)})
    }
    )
    .catch(next)
    // return res.render('home');
  }
  search(req, res) {
    return res.render('search');
  }
}

module.exports = new SiteControllers();

const Course = require('../models/Course')
const {mongooseToOject} =require('../../until/mongoose')
class CoursesControllers {
  //get
  show(req, res,next) {
    Course.findOne({slug: req.params.slug})
    .then(course=>{
      res.render('./courses/show',{course: mongooseToOject(course)})
    })
    .catch(next)
  }
  create(req, res,next) {
      res.render('./courses/create')
 
}
  //post
    store(req, res,next) {
      const fromData = req.body
      fromData.img=`https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
      const course = new Course(fromData)
      course.save()
      .then(()=> res.redirect('/'))
      .catch(err=> console.log('err ' ,err))
      
      
}}

module.exports = new CoursesControllers();

class NewControllers {
    //get
index (req, res) {
        return res.render('news')       
      }
show (req, res) {
        return res.render('news')       
      }
      
}

module.exports= new NewControllers
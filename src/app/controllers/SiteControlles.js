class NewControllers {
    //get
index (req, res) {
        return res.render('home')       
      }
search (req, res) {
        return res.render('search')       
      }
      
}

module.exports= new NewControllers
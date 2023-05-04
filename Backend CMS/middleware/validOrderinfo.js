module.exports = function(req, res, next) {
    const { pickup,drop,weight,typeofGood } = req.body;
  

  
    if (req.path === "/register") {

      if (![pickup,drop,weight,typeofGood].every(Boolean)) {
        return res.json("Missing Credentials");
      } 
    }
  
    next();
  };
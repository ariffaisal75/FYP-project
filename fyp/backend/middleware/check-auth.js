 const jwt = require("jsonwebtoken");

 module.exports = (req,res,next)=>{
   try{
    const token = req.headers.authorization.split(" ")[1];
    const decodeToken=jwt.verify(token,"secret_this_should_be_longer");
    req.userData = {username:decodeToken.username,userId:decodeToken.userId}
    // console.log(req.userData);
    next();
   }catch(error){
     console.log(error);
     res.status(401).json({message: "You are not authenticated !"})
   }

 };

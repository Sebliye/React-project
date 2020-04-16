const User=require('../models/model.user');
const jwtManger=require('../Jwt/jwtManager');
//
exports.PostSignUp=(req,res,next)=>{
//console.log(req.body.firstname);
const user= new User(req.body);
 User.findOne({email:req.body.email})
     .then(userdb=>{
      if(userdb){
           //how do we display this console.log('user exists');
                 res.json('user exists');
      }else{
       user.save().then((result) => res.json(result)).catch((err) => res.json(err));
     }
     })
    //  const token=jwtManger.generate(user.toJSON());
    //  res.json({data:token,status:'sucess'})
}
exports.getLoginPage=(req,res,next)=>{    
     const emails=req.body.email;
     const passwords=req.body.password;
     User.findOne({email:emails})
     .then(userdb=>{
              if(!userdb){
               res.json({status: 'invalid user'});
               return;
              }
          if(emails===userdb.email&&passwords===userdb.password){
                 const token=jwtManger.generate(userdb.toJSON());
                 res.json({data:token,status:'sucess'});
          }else{
               res.json({status: 'invalid user'});
          }
     })
}

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
     const email=req.body.email;
     const password=req.body.password;
     User.findOne({email:email,password:password})
     .then(userdb=>{
          console.log(userdb.role)
          if(email===userdb.email&&password===userdb.password){
               if(userdb.role==='admin'){
                 const data={};
                 data.id=userdb.id,
                 data.email=userdb.email
                 const token=jwtManger.generate(data);
                 res.json({data:token,status:'sucess'})
                 console.log('sucess you are admin user')
               }else{
                    //this is for testing
                    console.log('this is customer')
               }
          }
     })
}

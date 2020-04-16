const Product = require('../models/model.product');
const Comment = require('../models/model.comment');
const User = require('../models/model.user');

const jwtManager = require('../Jwt/jwtManager');

  exports.getAllProducts = (req, res, next) => {    
    Product.find().then((data)=> { //console.log(avgRateForEachPrd(data));
     // res.json(avgRateForEachPrd(data))
     res.json(data);
    } ).catch(e=>res.json(e));  
  };

  exports.getProduct = (req, res, next) => {  
    Product.findById(req.params.productId).then((data) => res.json(data));
  };

  exports.postProduct = (req, res, next) => {            
   //console.log(req.body);
      new Product(req.body).save().then(r=>res.json(r));
  };

  exports.postComment = (req, res, next) => {
 
      let data = jwtManager.verify(req.headers.authorization);
      let uid = data._id;
     // console.log(uid);
    new Comment(req.body.comment).save().then(cmt=>{       
      Product.findById(req.body.pid).then(prd=>{      // console.log(prd);
          const uidIndex = prd.comments.findIndex(obj=>obj.userId == uid);
          if(uidIndex<0){               //new comment
            let tempCArr = []; tempCArr.push({ cid: cmt._id});
            prd.comments.push({      
              userId: uid,
     //         rate: req.body.rate,
              userComments: tempCArr
            });
            prd.save();                  //save product            
          }else{                        //to give many comment
            let userComment = prd.comments[uidIndex];    
    //        userComment.rate = req.body.rate;            
            userComment.userComments = userComment.userComments.push({ cid: cmt._id});      
            prd.comments[uidIndex] = userComment;
            Product.updateOne({_id: req.body.pid},{ $set: { comments: prd.comments } })           //save product
            .then(p=>res.json(p)).catch(p=>res.json(p));                   
          }
      })
      res.json(cmt)
    }).catch(e=>res.json(e));
   }

  exports.getAllComments = (req, res, next) => {
    Product.findById(req.params.pid)
    .then(prd=>{      

     let arr = prd.comments.map(cArr=>{                      //it hold rate, uids and cids
        let cids = cArr.userComments.map(c=>c.cid);
        return (
          { uid: cArr.userId, rate: cArr.rate, cid: cids}
        )
      })
      
      let uids = arr.map(u=>u.uid);
       User.find({_id: {$in: uids}})
           .then(users=>{
                let arrIndex = 0, rateArr=0;
                let userFLNameRate = users.map(u=>{
                   return getAllComments(arr[arrIndex++].cid)
                  .then(comments=>{
                    return ({firstname: u.firstname, lastname: u.lastname, rate: arr[rateArr++].rate,  comment:comments})
                  });
                  
                  });
                  //userFLNameRate[0].then(a=>console.log(a));
              Promise.all(userFLNameRate.map(neededObj=>neededObj.then(obj=>obj)))
                     .then(resolve=>{
                       res.json(resolve);
                      });    
           });

    });  
  };

  exports.rateOnly =(req,res,next)=>{

    let data = jwtManager.verify(req.headers.authorization);
    let uid = data._id;
    //console.log(uid);
        Product.findById(req.body.pid)
          .then(prd=>{
            const uidIndex = prd.comments.findIndex(obj=>obj.userId == uid);
            if(uidIndex<0){               //new comment
              prd.comments.push({
                userId: uid,
                rate: req.body.rate
              }); 
              prd.save();                  //save product
              res.json(prd.comments);
            }else{   
              let userComment = prd.comments[uidIndex];
              userComment.rate = req.body.rate; 
              prd.comments[uidIndex] = userComment;
              prd.save();
              res.json(prd.comments[uidIndex]);
            }
            
          });
  }

  function getAllComments(cids){   
   return Comment.find({_id: {$in: cids}});
  }

//   function avgRateForEachPrd(prdArr){
//     let temp= null;
// //console.log(prdArr);
//      temp = prdArr.map(prd=>{  return prd;

//        let sumRate = prd.comments.map(comment=>comment.rate).reduce((a,b)=>a+b);
//        let avgRates = sumRate/prd.comments.length;
//        let retu = { product: prd, avgRate: Math.floor(avgRates) };
//       // console.log(retu);
     
//     // return prd;
       
//     });
    
//     console.log( temp);
//      return temp;
//   }
       

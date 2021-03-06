const jwtManager = require('./jwtManager');
 
class UaaMiddleware {
        authenticate(req, res, next) { 
        
        // if (req.url === '/login' || req.url === '/sign-up' || req.url === '/' || req.url === '/prd' || req.url == '/cmt/:pid') {  
        //             next();
        //             return;
        //      }

        if(req.url === '/cmt'  || req.url === '/rate'  || req.url  ===  '/save-prd'){
          const header = req.headers.authorization;
         // console.log(header);   
          if (!header) {
          return res.json({ status:'auth_error' });
                  } else {
          const data = jwtManager.verify(header);
        //  console.log(data);
                      if (!data) {
                       return res.json({ status:'auth_error' });
                      }
                    next();
                  }
        next();
        }else{
          next();
          return;
        }
      
            }
}
module.exports = new UaaMiddleware();


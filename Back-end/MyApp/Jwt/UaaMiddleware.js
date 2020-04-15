const jwtManager = require('./jwtManager');
 
class UaaMiddleware {
        authenticate(req, res, next) {
        
        if (req.url === '/login' || req.url === '/sign-up' || req.url === '/' || req.url === '/prd') {  
                    next();
                    return;
             }
        const header = req.headers.authorization;
        console.log(header);   
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
            }
}
module.exports = new UaaMiddleware();


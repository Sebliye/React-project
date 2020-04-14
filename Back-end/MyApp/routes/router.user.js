const express=require('express');
const userController=require('../controllers/controller.user');
const router=express.Router();
 
router.post('/sign-up',userController.PostSignUp);
router.post('/login',userController.getLoginPage);
//router.get('/logout',userController.getLogOut);
module.exports=router;
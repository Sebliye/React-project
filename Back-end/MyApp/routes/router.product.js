const express = require('express');

const productController = require('../controllers/controller.product');
const userController = require('../controllers/controller.user');

const router = express.Router();

router.get('/prd', productController.getAllProducts);
router.get('/prd/:productId', productController.getProduct);
router.post('/prd',productController.postProduct); 

router.post('/cmt',productController.postComment);
router.get('/cmt', productController.getAllComments);

router.post('/user', userController.PostSignUp);

module.exports = router;
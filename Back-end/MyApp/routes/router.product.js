const express = require('express');

const productController = require('../controllers/controller.product');

const router = express.Router();

router.get('/prd', productController.getAllProducts);
router.get('/prd/:productId', productController.getProduct);
router.post('/prd',productController.postProduct); 

router.post('/cmt',productController.postComment);
router.get('/cmt/:pid', productController.getAllComments);

router.post('/rate', productController.rateOnly);

module.exports = router;
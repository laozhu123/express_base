'use strict';

import express from 'express';
import Shop from '../controller/shopping/shop'
import Food from '../controller/shopping/food'
import Check from '../middlewares/check'
import Category from '../controller/shopping/category'

const router = express.Router();

router.post('/addshop', Check.checkAdmin, Shop.addShop);
router.post('/updateshop', Check.checkAdmin, Shop.updateshop);
router.post('/addfood', Check.checkAdmin, Food.addFood);
router.get('/restaurants', Shop.getRestaurants);
router.get('/restaurants/count', Shop.getShopCount);
router.get('/v2/restaurant/category', Category.getCategories);
router.get('/getcategory/:restaurant_id', Food.getCategory);
export default router
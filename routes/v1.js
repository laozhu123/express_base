'use strict';

import express from 'express'
import CityHandle from '../controller/v1/cities'
import Address from '../controller/v1/address'
import User from '../controller/v2/user'
import BaseComponent from '../prototype/baseComponent'
const baseHandle = new BaseComponent();
const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.get('/cities/:id', CityHandle.getCityById);
router.get('/exactaddress', CityHandle.getExactAddress);
router.get('/users/:user_id/addresses', Address.getAddress);
router.post('/users/:user_id/addresses', Address.addAddress);
router.get('/addresse/:address_id', Address.getAddAddressById);
router.delete('/users/:user_id/addresses/:address_id', Address.deleteAddress);
router.get('/user/city/count', User.getUserCity);
router.get('/users/count', User.getUserCount)
 
export default router

'use strict';

import v1 from './v1'
import admin from './admin'
import shopping from './shopping'
import statis from './statis'
import bos from './bos'

export default app => {
	// app.get('/', (req, res, next) => {
	// 	res.redirect('/');
  // });
  app.use('/v1', v1);
	app.use('/admin', admin);
  app.use('/shopping', shopping);
  app.use('/statis', statis);
  app.use('/bos', bos);
}
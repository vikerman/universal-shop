import 'zone.js/dist/zone-node';
import 'reflect-metadata';

// tslint:disable-next-line:no-any
(global as any).__domino_frozen__ = false;

// tslint:disable:no-require-imports needed because domino has no typings.
const domino = require('domino');

// Setup global class types that are needed since devmode sources don't
// down-level decorators which point to these values during runtime.
// TODO(viks): Remove when https://github.com/angular/angular/issues/23133 is
// fixed.
// tslint:disable:no-any
for (const type in domino.impl) {
  if (domino.impl.hasOwnProperty(type)) {
    (global as any)[type] = domino.impl[type];
  }
}
// tslint:enable:no-any

import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as compression from 'compression';
import * as express from 'express';
import * as os from 'os';
import {join} from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
app.use(compression());

const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  // TODO: Set this as a global variable till the proper token is provided.
  const hostname = 'localhost';
  const baseUrl = `http://${hostname}:${PORT}`;
  (global as any)['HTTP_BASE_URL'] = baseUrl;

  console.log(`Node Express server listening on ${baseUrl}`);
});

global.expect = require('expect');

const jsdom = require('jsdom');
const path = require('path');
const fs = require('fs');

before(function(done) {
  const src = path.resolve(__dirname, '..', 'index.js');
  const babelResult = require('babel-core').transformFileSync(src, {
    presets: ['es2015']
  });
  const html = path.resolve(__dirname, '..', 'index.html');

  global.srcCode = fs.readFileSync(src, 'utf8');

  jsdom.env(html, [], { src: babelResult.code }, (err, window) => {
    if (err) {
      return done(err);
    }

    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });

    return done();
  });
}); 

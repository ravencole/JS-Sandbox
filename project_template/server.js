// console.log(__dirname)

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../../webpack/webpack.config.dev';
import open from 'open';

const app      = express(),
      project  = process.argv[2],
      quite    = process.argv[3],
      webpackConfig = config(project),
      compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, `/index.html`));
});

app.listen(8080, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`${'http://localhost'}:${8080}`)
  }
});
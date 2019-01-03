var path = require('path');

var jsSources = [
  './scripts/resources.js',
  './scripts/sounds.js',
  './scripts/enemy.js',
  './scripts/item.js',
  './scripts/obstacle.js',
  './scripts/player.js',
  './scripts/handleInput.js',
  './scripts/levelBuilder.js',
  './scripts/uiBuilder.js',
  './scripts/engine.js'
];

module.exports = {
  entry: jsSources,
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'main.bundle.js'
  }
};

const postCSSPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins:[
    postCSSPresetEnv({
      browsers:'last 30 version'
    })
  ]
}
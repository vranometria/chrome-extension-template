const path = require('path');

module.exports = {
  // モードの設定
  mode: 'production',

  // エントリーポイントの設定
  entry: [
      `./src/index.js`
  ],
  
  devtool: 'cheap-module-source-map',

  // ファイルの出力設定
  output: {
    // 出力するファイル名
    filename: "bundle.js",

    //  出力先のパス
    path: path.join(__dirname, '/dist')
  }
};
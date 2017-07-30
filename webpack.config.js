module.exports = {
  entry: './src/index.js', // webpack이 번들링을 시작할 경로

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build/`
    
    // filename: webpack이 하나의 파일로 묶어서 저장할 이름
    // path:     webpack이 번들링 결과를 저장할 경로
  },

  devServer: {
    compress: true,
    contentBase: `${__dirname}/public/`,
    
    // compress:    gzip 압축 사용 여부
    // contentBase: 서버 시작시 사용할 폴더 경로 (정적 파일을 사용할때 필요함)
    // host:        사용할 호스트, 외부에서도 서버 엑세스 허용할 경우 "0.0.0.0", 내부에서만 허용할 경우 "localhost"
    // port:        서버에 사용할 포트
    // inline:      코드 수정시 서버에 실시간 반영 여부 (전체 재로딩, Live Reloading)
    // hot:         코드 수정시 서버에 실시간 반영 여부 (부분 재로딩, Hot Module Replacement)

    /*
      - hot, inline 둘다 true 경우 부분 재로딩 먼저하고 실패 할 경우 전체 페이지를 재로딩 한다.
        또한 webpack 공식 문서에서는 hot을 사용할때 inline도 같이 사용하는걸 추천하고 있다.

      - webpack.config.js에 설정을 해도 작동 안하는 경우가 있는데 그럴때는 CLI에 설정해 주면 된다.
        "scripts": {
          "start": "webpack-dev-server --open --host 0.0.0.0 --port 15800 --inline --hot"
        }
    */
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'react']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}

// 익스프레스 모듈을 읽어 들입니다.
const express = require('express')

// 객체 생성
const app = express()
const portNo = 3000

// 접근이 있을 때
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 서버를 실행
app.listen(portNo, () => {
  console.log('서버 실행 완료: ', `http://localhost:${portNo}`)
})
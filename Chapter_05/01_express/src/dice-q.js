
// 익스프레스 모듈을 읽어 들입니다.
const express = require('express')

// 객체 생성
const app = express()
const portNo = 3000

// 매개변수가 추가되어 있다면, req.query 를 사용해서 추출 가능하다.
app.get('/', (req, res) => {
  if (!req.query.q) {
    res.send(
      '<p><a href="?q=6">6면체 주사위</a><br />' +
      '<a href="?q=12">12면체 주사위</a></p>')
  } else {
    const q = parseInt(req.query.q, 10)
    res.send(
      '주사위의 값은...' + dice(q))
  }
})

function dice(n) {
  return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})
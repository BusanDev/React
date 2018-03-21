
// 익스프레스 모듈을 읽어 들입니다.
const express = require('express')

// 객체 생성
const app = express()
const portNo = 3000

// 루트에 접근할 때
app.get('/', (req, res) => {
  res.send(
    '<p><a href="/dice/6">6면체 주사위</a><br />' +
    '<a href="/dice/12">12면체 주사위</a></p>'
  )
})
// 주사위 페이지에 접근할 때 --- (※1)
app.get('/dice/:num', (req, res) => {
  res.send(
    '<p>주사위의 값은...' + dice(req.params.num) +
    '<br /><a href="/">뒤로</a></p>'
  )
})

function dice(n) {
  return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})
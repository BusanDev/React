
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
// 콜론(:)을 이용하면 path variable 을 사용할 수 있다.
// 값을 사용할 때에는 req.params 를 사용하여 추출한다.
app.get('/dice/:num', (req, res) => {
  res.send(
    '<p>주사위의 값은...' + dice(req.params.num) +
    '<br /><a href="/">뒤로</a></p>'
  )
})

// 라우트 경로를 정규표현식 매칭으로
app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/');
});

function dice(n) {
  return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})
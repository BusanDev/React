// --------------------------------------------------------
// 게시판 애플리케이션의 웹 서버
// --------------------------------------------------------

// 데이터베이스와 연결하기 위해 NeDB 모듈을 불러들입니다.
const NeDB = require('nedb')

// 해당 경로를 쉽게 조립하기 위해 path 모듈을 불러들입니다.
const path = require('path')

// 새 DB를 생성합니다.
const db = new NeDB({
  filename: path.join(__dirname, 'bbs.db'),
  autoload: true
})

// DB 접속이 완료되면 로그를 출력합니다.
db.loadDatabase((err) => {
  console.log('DB 접속 완료')
})

// 서버를 실행하기 위해 express 모듈을 불러들입니다.
const express = require('express')

// express모듈을 통해 서버 인스턴스를 생성합니다.
const app = express()

// 포트번호를 설정합니다.
const portNo = 3001

// 서버를 실행합니다. listen 이라는 메소드는 요청을 기다리는 상태로 만들어줍니다.
app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})

// public 디렉터리를 정적 resource 로 사용하겠다고 설정합니다.
app.use('/public', express.static('./public'))

// 최상위 페이지에 접속하면 /public으로 리다이렉트합니다.
app.get('/', (req, res) => {
  res.redirect(302, '/public')
})

// API를 정의합니다.
// 게시글 목록을 불러오는 API 입니다.
app.get('/api/getItems', (req, res) => {

  // 데이터베이스에 저장돼 있는 데이터를 시간 순서로 정렬해서 응답합니다.
  db.find({}).sort({stime: 1}).exec( (err, data) => {
    if (err) {
      sendJSON(res, false, {logs: [], msg: err})
      return
    }
    console.log(data)
    sendJSON(res, true, {logs: data})
  })
})

// 게시글 작성 API 입니다. 의문 왜 post가 아니라 get 메소드를 사용하였을까?
app.get('/api/write', (req, res) => {

  const q = req.query
  // URL 매개변수로 받은 값을 DB에 저장합니다.
  db.insert({
    name: q.name,
    body: q.body,
    stime: (new Date()).getTime()
  }, (err, doc) => {
    if (err) {
      console.error(err)
      sendJSON(res, false, {msg: err})
      return
    }
    sendJSON(res, true, {id: doc._id})
  })
})

function sendJSON (res, result, obj) {
  obj['result'] = result
  res.json(obj)
}
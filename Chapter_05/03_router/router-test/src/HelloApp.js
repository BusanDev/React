import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// <Router> 컴포넌트를 사용해 어떤 경로일 때 어떤 컴포넌트를 출력할지 지정합니다.
const HelloApp = () => (
  <Router>
    <div style={{margin: 20}}>
      <Route exact path='/' component={Home} />
      <Route path='/ko' component={HelloKorean} />
      <Route path='/ja' component={HelloJapanese} />
      <Route path='/en' component={HelloEnglish} />
    </div>
  </Router>
)

// 홈 화면에 출력할 컴포넌트를 정의합니다.
const Home = () => (
  <div>
    <h1>Hello App</h1>
    <p>언어를 선택해주세요.</p>
    <ul>
      <li><a href='/ko'>한국어</a></li>
      <li><a href='/ja'>일본어</a></li>
      <li><a href='/en'>영어</a></li>
    </ul>
  </div>
)

// 한국어 출력 컴포넌트를 정의합니다.
const HelloKorean = () => (
  <div>
    <h1>안녕하세요</h1>
    <p><a href='/'>뒤로가기</a></p>
  </div>
)

// 일본어 출력 컴포넌트를 정의합니다.
const HelloJapanese = () => (
  <div>
    <h1>こんにちは</h1>
    <p><a href='/'>戻る</a></p>
  </div>
)

// 영어 출력 컴포넌트를 정의합니다.
const HelloEnglish = () => (
  <div>
    <h1>Hello</h1>
    <p><a href='/'>Back</a></p>
  </div>
)

export default HelloApp
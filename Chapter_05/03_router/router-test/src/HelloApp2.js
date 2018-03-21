import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// <Router> 컴포넌트를 사용해 어떤 경로일 때 어떤 컴포넌트를 출력할지 지정합니다.
// 반복되는 Header 와 Footer를 적절한 위치에 넣습니다.
const HelloApp2 = () => (
  <Router>
    <div style={{margin: 20}}>
      <HelloHeader />
      <div>
        <Route exact path='/' component={HelloKorean} />
        <Route path='/ko' component={HelloKorean} />
        <Route path='/ja' component={HelloJapanese} />
        <Route path='/en' component={HelloEnglish} />
      </div>
      <HelloFooter />
    </div>
  </Router>
)

// 스타일을 정의합니다.
const styleHeader = {
  backgroundColor: 'orange',
  color: 'white',
  padding: 8
}

// 고정 헤더를 정의합니다. --- (※2)
const HelloHeader = () => (
  <div>
    <h3 style={styleHeader}>HelloApp v2</h3>
    <p>
      [<a href='/ko'>한국어</a>]
      [<a href='/ja'>일본어</a>]
      [<a href='/en'>영어</a>]
    </p>
  </div>
)

// 고정 푸터를 정의합니다.
const HelloFooter = () => (
  <div style={styleHeader}>
    인사를 다양한 언어로 출력하는 애플리케이션입니다.
  </div>
)

// 한국어 출력 컴포넌트를 정의합니다. --- (※3)
const HelloKorean = () => (
  <div><h1>안녕하세요</h1></div>
)

// 일본어 출력 컴포넌트를 정의합니다. --- (※4)
const HelloJapanese = () => (
  <div><h1>こんにちは</h1></div>
)

// 영어 출력 컴포넌트를 정의합니다. --- (※5)
const HelloEnglish = () => (
  <div><h1>Hello</h1></div>
)


export default HelloApp2
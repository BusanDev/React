import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloApp from './HelloApp'
// import HelloApp2 from './HelloApp2'
import registerServiceWorker from './registerServiceWorker';

// HelloApp
ReactDOM.render(
  <HelloApp />,
  document.getElementById('root')
);

// HelloApp2
// ReactDOM.render(
//   <HelloApp2 />,
//   document.getElementById('root')
// );

registerServiceWorker();

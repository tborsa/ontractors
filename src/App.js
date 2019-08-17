import React from 'react';
import logo from './logo.svg';
import Menu from './Menu';
import ScrollBody from './ScrollBody';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu theme="clear"></Menu>
      <Menu theme="light"></Menu>
      <Menu theme="dark"></Menu>
      <ScrollBody></ScrollBody>
      <div className="scroller"><span>{'<'}</span>SCROLL</div>
    </div>
  );
}

export default App;

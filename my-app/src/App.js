import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Goodbye from './Goodbye'




class App extends React.Component {

  render() {
    return (
      
      <>
      <h1>Can you see me now?</h1>
      
      <Welcome name="Brie"/>
      <Goodbye name="ReactJS" title="learning"/>
      </>
    )
  }
}
export default App;

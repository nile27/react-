import {Component} from 'react';
import './App.css';
import ScrollBox from './ScrollBox';

class App extends Component{
  render(){
    return (
      <>
      <ScrollBox ref = {(ref) => this.scrollBox = ref}/>
      <button onClick={() => this.scrollBox.ScrollToBottom()}> 맨 밑으로</button>
      </>
      
    );
  }
  
}

export default App;

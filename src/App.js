import MyComponent from '/MyComponent'

const App = () => {
  return(
  <MyComponent name = "react" favoriteNumber = {1}>리액트 
    </MyComponent>
    )
}
//<MyComponent name = 'react'/> props 설정

export default App

/*
클래스형
import { Component } from 'react';
import  MyComponent  from './MyComponent';

class App extends Component{
  render(){
    return (<MyComponent name = "React" favoriteNumber ={1}> 리액트</MyComponent>)
  }
  
}
  
export default App;
 */
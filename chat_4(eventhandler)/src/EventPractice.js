import { Component } from "react";

class EventPractice extends Component{
  state = {
    username: '',
    message : ''
  }

// 변할 input값을 기록
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value // 객체 안에 key를 []로 감싸면 그 안의 값이 실제 값의 key값으로 사용됨
    })
  }
 // input값을 알림창으로 알린 후 input안의 값을 비워 준다. 
  handleClick = () => {
    alert(this.state.username + ':'+ this.state.message)
    this.setState({
      username: '',
      message: ''
    })
  }
  // Enter를 눌렀을 때 발생되는 메서드
  handleKeyPress = (e) => {
    if(e.key === 'Enter') this.handleClick();
  }


  render(){
    return(
      <div>
        <h1>이벤트 연습</h1>
        <input
          type = 'text'
          name = 'username'
          placeholder= "유저 이름"
          value = {this.state.username}
          onChange={this.handleChange}
        ></input>

        <input
          type = 'text'
          name = 'message'
          placeholder= "아무거나 입력 하시오."
          value = {this.state.message}
          onChange={this.handleChange}
          onKeyPress = {this.handleKeyPress}
        ></input>
        
        <button onClick={this.handleClick}
        >확인</button>
      </div>
    )
    
  }
}

export default EventPractice
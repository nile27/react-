import { Component } from "react";

class Counter extends Component{
  constructor(props){
    
    super(props); 
    //state 초기값 설정
    this.state = {
      number:0,
      fixedNumber: 0 
    }
  }

  render(){
    const{ number, fixedNumber } = this.state; 


    return (
      <>
      <h1>{number}</h1>
      <h2>바뀌지 않는 값: {fixedNumber}</h2>
      <button
        onClick={() => {
        //this.setState를 사용하여 state에 새로운 값을 넣는다.
     	   this.setState({number: number+1},
		//callback 함수 등록하여 작업을 처리할 수가 있다.
		() =>{
           console.log("state 호출");
           console.log(this.state)
           })
	    }}
      >
        +1
      </button>
      </>
    )
  }
}
export default Counter
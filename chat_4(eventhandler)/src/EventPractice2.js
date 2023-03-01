import { useState } from "react";

const EventPractice2 = () =>{
  
  // 2가지만 사용 할 경우
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);

  // const onClick = () => {
  //   alert(username + ':' + message)
  //   setMessage('')
  //   setUsername('')
  // }

  // const onKeyPress = e => {
  //   if(e.key === 'Enter') onClick()
  // }
  // input의 개수를 여러개 사용 할 수가 있음
  const [form, setForm] = useState({
    username: '',
    message : ''
  })
  const {username,message} = form;
  const onChange = (e) =>{
    const nextForm = {
      ...form,    //기존의 form 내용을 이자리에 복사한 후
      [e.target.name]: e.target.value // 원하는 값으로 덮어 씌우기
    }

    setForm(nextForm);
  }

  const onClick = () => {
      alert(username + ':' + message)
      setForm({
        username: '',
        message: ''
      })
    }
  const onKeyPress = e => {
      if(e.key === 'Enter') onClick()
    }

  


  return(
    <>
    <h1>이벤트 연습 2(함수형)</h1>
    <input
      type ='text'
      name = 'username'
      placeholder= "유저 이름"
      value={username}
      onChange = {onChange}
      ></input>
      <input
      type ='text'
      name = 'message'
      placeholder= "메세지"
      value={message}
      onChange = {onChange}
      onKeyPress = {onKeyPress}
      ></input>

      <button onClick = {onClick}> Click me</button>

    </>
  )
}
export default EventPractice2
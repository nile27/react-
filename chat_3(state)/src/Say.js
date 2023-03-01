import { useState } from "react";

const Say = () =>{
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세여');
  const onClickLeave = () => setMessage('Bye');

  const [color , setColor] = useState('black')
  return (
    <>
      <button onClick = {onClickEnter}>입장</button>
      <button onClick = {onClickLeave}>퇴장</button>
      <h1 style = {{color}}>{message}</h1>

      <button style = {{color : 'red'}} onClick = {() => setColor('red')}>red</button>
      <button style = {{color : 'green'}} onClick = {() => setColor('green')}>green</button>
      <button style = {{color : 'blue'}} onClick = {() => setColor('blue')}>blue</button>
    </>
  );
};

export default Say

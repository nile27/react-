import {Component} from 'react'
import './validation.css'

class ValidationSample extends Component{
  state = {
    password: '', 
    clicked: false,
    validated: false
  }

  handleChange = (e) =>{
    this.setState({
      password: e.target.value
    })
  }

  handleBtnClick = () =>{
    this.setState ( {
      clicked : true,
      validated: this.state.password === '0000'
    })
    this.input.focus()
  }

  render(){
    return(
      <>
      <input
      ref = {(ref) => this.input=ref} 
      type = "password"
      value = {this.state.password}
      onChange = {this.handleChange}
      className = {this.state.clicked ? (this.state.validated ? 'success': 'failure'):'' }
      >
      </input>
      <button onClick={(this.handleBtnClick)}>검증</button>
      </>
    )
  }
}

export default ValidationSample
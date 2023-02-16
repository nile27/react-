import PropTypes from 'prop-types';// propTypes 불러오기

const MyComponent = ({name,favoriteNumber,children}) =>{
  return( <div> 안녕하세요, 제 이름은 {name}입니다.< br/> 
                children 값은 {children}<br/>
    			      좋아하는 숫자는 {favoriteNumber}</div>
  )

}
/**
 * 비구조화가 아닌 경우
 * {name} = {props.name}
 * {children} = {props.children}
 * {favoriteNumber} = {props.favoriteNumber}
 * 
 * chlidren은 <MyComponent> 태그의 사이에 (리액트)를 넘겨준다.
 */
    
MyComponent.defaultProps = {
  name : "기본 이름"
};
/**
 * defaultProps
 * props을 넘겨주지 않고 props을 선언할 떄의 기본 값을 나타낸다.
 */
MyComponent.propTypes = {
  name: PropTypes.string(),
  favoriteNumber : PropTypes.number.isRequired
}

export default MyComponent;

/**
 * propTypes를 통해 넘겨받는 props의 타입을 지정해주고 만일 다를 경우 에러를 발생시킨다.
 * propTypes는 'prop-types'를 불러줘야한다.
 * isRequired는 필수로 받아야하는 props를 지정해준다. 만일 위 처럼 favoriteNumber가 넘겨지지 않으면 에러를 발생시킨다.
 */

/* 클래스 형 
import { Component } from "react";
import PropsTypes from "prop-types";

class MyComponent extends Component{
  static defaultProps = {
    name: '기본 이름'
  };

  static propTypes = {
    name: PropsTypes.string,
    favoriteNumber : PropsTypes.number.isRequired
}


  render(){
  const {name, favoriteNumber, children } = this.props;
  return(
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}
    </div>
  )}
  
}

export default MyComponent;
*/
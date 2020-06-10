/*import React from "react";
import { observer } from 'mobx-react';
import UserStore from './stores/UserStore';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import "./App.css";

class App extends React.Component{

  async componentDidMount() {

    try {

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if(result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
          
    }

    catch(e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;

    }
  }

  async doLogout() {

    try {

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if(result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
          
    }

    catch(e) {
      console.log(e)

    }
  }

render(){

  if(UserStore.loading){
    return (
      <div className="app">
        <div className='container'>
          Loading, please wait...
        </div>
       </div>

    );

  }

  else {

    if(UserStore.isLoggedIn){
      return (
        <div className="app">
          <div className='container'>
            Welcome {UserStore.username}

            <SubmitButton
            text={'Log out'}
            disabled={false}
            onClick={ () => this.doLogout()}
            />
          </div>
         </div>
  
      );
    }

    return (
      <div className="app">
         <div className='container'>
          <LoginForm />
         </div>
      </div>
    );

  }

  }

} 
export default observer(App);*/
import React from "react";
import "./App.scss";
import { Login, Register } from "./login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  changeState() {
    //ES6 Object Destructuring
    const { isLogginActive } = this.state;
  
    //We togglet component classes depending on the current active state 
    if (isLogginActive) {
      //Right side for login
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      //Left side for Register 
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    //Of course we need to toggel the isLogginActive by inversing it's previous state 
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            containerRef={ref => (this.rightSide = ref)} onClick={this.changeState.bind(this)}/>
          
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
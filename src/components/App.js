import React from 'react'
import '../styles/App.css';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //       name:"Jhon Doe",
  //       enrollmentNo: "12345678", 
  //       age: 34
  //   };

  // }
  // onIncrementClickHandler=()=> {
  //   this.setState({age:this.state.age+1});
  //           };
  state = {
    name: "John Doe",
    enrollmentNo: "12345678",
    age: 34
  };

  handleClick = () => {
    this.setState(prevState => ({ age: prevState.age + 1 }));
  };

            render(){
              const { name, enrollmentNo, age } = this.state;

                return(
// {/* <div class="ClassBasedComponent">
// <h1>Hello, my name is {this.state.name}</h1>
//                 <p>I am {this.state.age} years old and my enrollment no is {this.state.enrollmentNo}</p>
//                 <button onClick={this.onIncrementClickHandler}>Age Increment</button>
// </div> */}
<div>
        <h1>Hello, my name is {name}</h1>
        <p>I am {age} years old and my enrollment no is {enrollmentNo}</p>
        <button onClick={this.handleClick}>Increase Age</button>
      </div>
                );
            }
}


export default App;

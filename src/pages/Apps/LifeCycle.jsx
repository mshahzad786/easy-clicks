import React from "react";

export default class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "shahzad",
      counter: 0
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then(json => {
          this.setState({
            name: json.title
          })
        })
        .catch(err => console.log(err))
      }
      
      shouldComponentUpdate(){
        if(this.state.counter < 1){
            return false;
  
        }
        else{
            return true
        }
    }
// static getDrivedStateFromProps(props, state){
//     console.log(props, state)
//     return{

//         name: state.name
//     };
// }


  render() {
    return (
      <div>
        <h1>Life Cycle</h1>
        <h1>{this.state.name}</h1>
        <h1> Count :  {this.state.counter} </h1>
            <button onClick={()=> this.setState({counter: this.state.counter -1})}> - </button>
            <button onClick={()=> this.setState({counter: this.state.counter +1})}>  + </button>
      </div>
    );
  }
}

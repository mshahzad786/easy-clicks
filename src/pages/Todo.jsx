import React from "react";
import { render } from "react-dom";




export default class Todo extends React.Component{
    constructor(){
        super()
        this.state = {
            value: "",
            todos: []

        }
    }


add = () => {
    if(this.state.value !== ""){
        this.state.todos.push(this.state.value)
        this.setState({
            todos: this.state.todos,
            value: ""
        })
        console.log(this.state.todos)
    }
}

editTodo = () =>{
    console.log("Edit",)
    

}

deleteTodo = (index) =>{
    console.log("Sahi", index)
    this.state.todos.splice(index, 1)
    this.setState({
        todos: this.state.todos
    })
}



render(){

    return(
        <div>
            <h1 className="heading" >Todo Application</h1>

            <input value={this.state.value} onChange={(e)=>{
                this.setState({
                    value: e.target.value
                })
            }} type="text" placeholder="Enter value"/>
            <button onClick={() => this.add()} >Add</button>

            
            <div>
                <ul>
                    {this.state.todos.map((v,i)=>{
                        return <li key={i}> {v}<button onClick={()=> this.deleteTodo(i)} >Delete</button>
                        {}<button onChange={(e)=> this.editTodo(i) }>Edit</button> </li>
                               
                    })}
                </ul>
            </div>
        </div>
    )
  }

}
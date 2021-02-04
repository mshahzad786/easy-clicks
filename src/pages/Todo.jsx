import React from "react";
import { render } from "react-dom";
import "../App.css"




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

editTodo = (e, value    ) =>{ 
    this.setState({
        value: e.target.value
    })  
    
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
            <h6>Use For Class Components & State </h6>
            <h1 className="heading" >Todo Application</h1>


            <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only">Password</label>
          <input type="text" className="form-control" id="input" value={this.state.value} onChange={(e)=>{
                this.setState({
                    value: e.target.value
                })
            }} type="text" placeholder="Enter value" />
        </div>
        <button type="button" className="btn btn-primary mb-2" onClick={() => this.add()} >Add</button>
      </form>
            

            {/* <input value={this.state.value} onChange={(e)=>{
                this.setState({
                    value: e.target.value
                })
            }} type="text" placeholder="Enter value"/>
            <button type="button" class="btn btn-outline-primary" onClick={() => this.add()} >Add</button> */}

            
            <div>
                <ul>
                    {this.state.todos.map((v,i)=>{
                        return <li key={i}> {v}<button type="button" class="btn btn-outline-danger" onClick={()=> this.deleteTodo(i)} >Delete</button>
                        {}<button type="button" class="btn btn-outline-success" onChange={()=> this.editTodo() }>Edit</button></li>
                        
                        
                    })}
                </ul>
            </div>
        </div>
    )
  }

}
import React from "react";
import { render } from "react-dom";




// =====> normal
// export default class Todoo extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             todos: [],
//             value: ""

//         }
//     }

// add = () => {
//     if(this.state.value !== ""){
//         this.state.todos.push(this.state.value)
//         this.setState({
//             todos: this.state.todos,
//             value: ""
//         })
//         console.log(this.state.todos)
//     }
// }

// editTodo = (index) =>{
//     var update_value = prompt("Edit this")
//     this.state.todos[index] = update_value
//     this.setState({
//         todos: this.state.todos,
//         value: ""
//     })
    
// }

// deleteTodo = (index) =>{
//     console.log("Sahi", index)
//     this.state.todos.splice(index, 1)
//     this.setState({
//         todos: this.state.todos
//     })
// }

// render(){

//     return(
//         <div>
//             <h1 className="heading" >Todo Application</h1>

//             <input value={this.state.value} onChange={(e)=>{
//                 this.setState({
//                     value: e.target.value
//                 })
//             }} type="text" placeholder="Enter value"/>
//             {/* <button onClick={() => this.add()} >Add</button> */}
//             <button onClick={() => this.add()}  type="button" className="btn btn-outline-primary">Add</button>

            
//             <div>
//                 <ul>
//                     {this.state.todos.map((v,i)=>{
//                         return <li key={i}> {v}
//                         {/* <button onClick={()=> this.deleteTodo(i)} >Delete</button> */}
//                         <button type="button" className="btn btn-success"onClick={()=> this.editTodo(i) }>Edit</button>
//                         <button type="button" className="btn btn-danger"onClick={()=> this.deleteTodo(i)} >Delete</button>
                    
                    
//                         {}
//                         {/* <button onChange={(e)=> this.editTodo(i) }>Edit</button>  */}
//                         </li>
                               
//                     })}
//                 </ul>
//             </div>
            
//         </div>
//     )
//   }

// }
// =====> normal

// =====> Use Todo Object
export default class Todoo extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: [{title: "Bhahzad", edit: false}, {title: "Bilal", edit: false}],
            value: ""

        }
    }

add = () => {
    if(this.state.value !== ""){
        let obj = {title:this.state.value }
        this.setState({
           todos: [...this.state.todos, obj],
            value: ""
        })
        
    }
}

editTodo = (index,val) =>{

    this.state.todos[index].edit = true
    this.setState({
        todos: this.state.todos,
        value: ""
    })

    // var update_value = prompt("Edit this")
    // this.state.todos[index] = update_value
    // this.setState({
    //     todos: this.state.todos,
    //     value: ""
    // })
    
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
            {/* <button onClick={() => this.add()} >Add</button> */}
            <button onClick={() => this.add()}  type="button" className="btn btn-outline-primary">Add</button>

            
            <div>
                <ul>
                    {this.state.todos.map((v,i)=>{
                        return <li key={i}> {v.edit? <input type="text"/> : v.title }
                        {/* <button onClick={()=> this.deleteTodo(i)} >Delete</button> */}
                        {v.edit?
                        <button type="button" className="btn btn-success"onClick={()=> this.editTodo(i.v.title) }>Edit</button> 
                        :
                        <button type="button" className="btn btn-success"onClick={()=> this.editTodo(i.v.title) }>Edit</button> 
                         }
                        <button type="button" className="btn btn-danger"onClick={()=> this.deleteTodo(i)} >Delete</button>
                    
                    
                        {}
                        {/* <button onChange={(e)=> this.editTodo(i) }>Edit</button>  */}
                        </li>
                               
                    })}
                </ul>
            </div>
            
        </div>
    )
  }

}
// =====> Use Todo Object
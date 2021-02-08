import React from "react";
import "../App.css"




// =====> normal
<<<<<<< HEAD
class Todo extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: [],
=======
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
>>>>>>> dc5f1668b3ad6002de58a472cd0832db1a7cac88
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

<<<<<<< HEAD
editTodo = (index) =>{
    var update_value = prompt("Edit this")
    this.state.todos[index] = update_value
    this.setState({
        todos: this.state.todos,
        value: ""
    })
=======
<<<<<<< HEAD
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
=======
editTodo = (e, value    ) =>{ 
    this.setState({
        value: e.target.value
    })  
>>>>>>> f496b3009005ef256ae80b2449bcb06bb4900438
>>>>>>> dc5f1668b3ad6002de58a472cd0832db1a7cac88
    
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
<<<<<<< HEAD
                        return <li key={i}> {v}
                        {/* <button onClick={()=> this.deleteTodo(i)} >Delete</button> */}
                        <button type="button" className="btn btn-success"onClick={()=> this.editTodo(i) }>Edit</button>
                        <button type="button" className="btn btn-danger"onClick={()=> this.deleteTodo(i)} >Delete</button>
=======
<<<<<<< HEAD
                        return <li key={i}> {v.edit? <input type="text"/> : v.title }
=======
<<<<<<< HEAD
                        return <li key={i}> {v}<button type="button" class="btn btn-outline-danger" onClick={()=> this.deleteTodo(i)} >Delete</button>
                        {}<button type="button" class="btn btn-outline-success" onChange={()=> this.editTodo() }>Edit</button></li>
                        
                        
=======
                        return <li key={i}> {v}<button type="button" className="btn btn-danger"onClick={()=> this.deleteTodo(i)} >Delete</button>
>>>>>>> f496b3009005ef256ae80b2449bcb06bb4900438
                        {/* <button onClick={()=> this.deleteTodo(i)} >Delete</button> */}
                        {v.edit?
                        <button type="button" className="btn btn-success"onClick={()=> this.editTodo(i.v.title) }>Edit</button> 
                        :
                        <button type="button" className="btn btn-success"onClick={()=> this.editTodo(i.v.title) }>Edit</button> 
                         }
                        <button type="button" className="btn btn-danger"onClick={()=> this.deleteTodo(i)} >Delete</button>
                    
                    
>>>>>>> dc5f1668b3ad6002de58a472cd0832db1a7cac88
                        {}
                        </li>
                               
                    })}
                </ul>
            </div>
            
        </div>
    );
  }

}
<<<<<<< HEAD
export default function ToDo(){
    return(
        <div> 
            <Todo/>
        </div>
    )

}


// =====> normal

// =====> Use Todo Object
// export default class Todoo extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             todos: [{title: "Bhahzad", edit: false}, {title: "Bilal", edit: false}],
//             value: ""

//         }
//     }

// add = () => {
//     if(this.state.value !== ""){
//         let obj = {title:this.state.value }
//         this.setState({
//            todos: [...this.state.todos, obj],
//             value: ""
//         })
        
//     }
// }


// editTodo = (index,val) =>{

//     this.state.todos[index].edit = true
//     this.setState({
//         todos: this.state.todos,
//         value: ""
//     })

//     // var update_value = prompt("Edit this")
//     // this.state.todos[index] = update_value
//     // this.setState({
//     //     todos: this.state.todos,
//     //     value: ""
//     // })

// editTodo = (e, value    ) =>{ 
//     this.setState({
//         value: e.target.value
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
//             <h6>Use For Class Components & State </h6>
//             <h1 className="heading" >Todo Application</h1>


//             <form className="form-inline">
//         <div className="form-group mx-sm-3 mb-2">
//           <label htmlFor="inputPassword2" className="sr-only">Password</label>
//           <input type="text" className="form-control" id="input" value={this.state.value} onChange={(e)=>{
//                 this.setState({
//                     value: e.target.value
//                 })
//             }} type="text" placeholder="Enter value" />
//         </div>
//         <button type="button" className="btn btn-primary mb-2" onClick={() => this.add()} >Add</button>
//       </form>
            

//             {/* <input value={this.state.value} onChange={(e)=>{
//                 this.setState({
//                     value: e.target.value
//                 })
//             }} type="text" placeholder="Enter value"/>

//             <button type="button" class="btn btn-outline-primary" onClick={() => this.add()} >Add</button> */}

//             {/* <button onClick={() => this.add()} >Add</button> */}
//             <button onClick={() => this.add()}  type="button" className="btn btn-outline-primary">Add</button>


            
//             <div>
//                 <ul>
//                     {this.state.todos.map((v,i)=>{

//                         return <li key={i}> {v.edit? <input type="text"/> : v.title }


//                         return <li key={i}> {v}<button type="button" class="btn btn-outline-danger" onClick={()=> this.deleteTodo(i)} >Delete</button>
//                         {}<button type="button" class="btn btn-outline-success" onChange={()=> this.editTodo() }>Edit</button></li>
                        
                        

//                         return <li key={i}> {v}<button type="button" className="btn btn-danger"onClick={()=> this.deleteTodo(i)} >Delete</button>
//                         {/* <button onClick={()=> this.deleteTodo(i)} >Delete</button> */}
//                         {v.edit?
//                         <button type="button" className="btn btn-success"onClick={()=> this.editTodo(i.v.title) }>update</button> 
//                         :
//                         <button type="button" className="btn btn-success"onClick={()=> this.editTodo(i.v.title) }>Edit</button> 
//                          }
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
=======
>>>>>>> dc5f1668b3ad6002de58a472cd0832db1a7cac88
// =====> Use Todo Object
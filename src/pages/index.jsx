import React from "react";
import {Link} from "react-router-dom";
import Bg from "./../images/home page/home.png"
import TodoCC from "./../images/apps images/Todo Class Component.gif"
import {connect} from 'react-redux'






function Home(props) {


  return (
    
    
    <div>

      <h1> This Is Home </h1>
      {/* <div> */}

      {/* <h1> {props.name} </h1>  */}

      {/* <img src={Bg} alt="" width="500" /> */}
      

      {/* <button onClick ={()=> props.updateName() } >click me</button> */}
      {/* </div> */}
    </div>




  )
}

// const mapStateToProps = (state) => {
//   console.log("State ==>", state )
//     return {
//         name: state.name,
//         email: state.email
//       }
// }

// const mapDispatchToProps =(dispatch) =>{
//   return{
//     updateName: () => dispatch({type : "UPDATE_NAME",name : "Omama Muhammad Tahir"})
//   }

// }

export default 
// connect(mapStateToProps, mapDispatchToProps)
(Home);


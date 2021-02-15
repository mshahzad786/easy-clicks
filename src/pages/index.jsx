import React from "react";
import { BrowserRouter as Link} from "react-router-dom";
import Bg from "./../images/home page/home.png"
import TodoCC from "./../images/apps images/Todo Class Component.gif"
import {connect} from 'react-redux'





function Home(props) {


  return (


    <div>
      {/* <h1> This Is Home </h1> */}
      <h1> {props.name} </h1>

      {/* <img src={Bg} alt="" width="500" /> */}
      <div>

        <Link to="./Todo">

       <button type="button" className="btn btn-light"><img src={TodoCC} alt="" width="200" /></button>
        </Link>
       <h6>TodoApp Class Component</h6>
      </div>

      <button onClick ={()=> props.updateName() } >click me</button>

    </div>

  )
}

const mapStateToProps = (state) => {
  console.log("State ==>", state )
    return {
        name: state.name,
        email: state.email
      }
}

const mapDispatchToProps =(dispatch) =>{
  return{
    updateName: () => dispatch({type : "UPDATE_NAME",name : "Omama Muhammad Tahir"})
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


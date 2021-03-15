import React from "react";
import ContainedButtons from "./buttons"
import PrimarySearchAppBar from "./nav"
import {FaFacebook} from 'react-icons/fa'
import { blue } from "@material-ui/core/colors";





function Icons() {

    return (
      <div>
        <h1>Icons</h1>
        <PrimarySearchAppBar/>
        <ContainedButtons/>
        <FaFacebook size={100} color="blue" />

           
      </div>
            

    )
   
}




export default Icons;

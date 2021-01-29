import React from "react";
import { Link } from "react-router-dom";


function Submit() {

    return (
        <Link to="./">
            {/* <button type="submit">Home</button> */}
            {/* <button type="button" className="btn btn-danger"><Link to="./">Home</Link></button> */}
            <button type="button" className="btn btn-outline-primary">Home</button>
            <Link to="./contact">
                {/* <button type="submit">Contact</button> */}
            {/* <button type="button" className="btn btn-warning"><Link to="./contact">Contact</Link></button> */}
            <button type="button" className="btn btn-outline-primary">Contact</button>
            </Link>
            <Link to="./about">
            {/* <button type="button" className="btn btn-success"><Link to="./about">About</Link></button> */}
            <button type="button" className="btn btn-outline-primary">About</button>
                {/* <button type="submit">About</button> */}
            </Link>
        </Link>

    )
   
}




export default Submit;

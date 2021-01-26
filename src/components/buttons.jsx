import React from "react";
import { Link } from "react-router-dom";


function Submit() {

    return (
        <Link to="./">
            <button type="submit">Home</button>
            <Link to="./contact">
                <button type="submit">Contact</button>
            </Link>
            <Link to="./about">
                <button type="submit">About</button>
            </Link>
        </Link>

    )
    //   <div class="btn-group">
    //         <button type="button" class="btn btn-danger"><Link to="./">Home</Link></button>
    //         <button type="button" class="btn btn-warning"><Link to="./contact">Contact</Link></button>
    //         <button type="button" class="btn btn-success"><Link to="./about">About</Link></button>
    //     </div>

}



export default Submit;

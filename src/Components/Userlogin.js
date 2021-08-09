import React from 'react'
import { useHistory} from "react-router-dom";

export default function Userlogin() {
    const history = useHistory();

    return (
        <div>
            <h1>Welcome user user</h1>
            <br></br>
            <br></br>
            <button  className="btn btn-dark "onClick={() => history.push("/")}>Signout</button>
        </div>
    )
}

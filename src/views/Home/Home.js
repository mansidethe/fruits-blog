import React from "react";
import { Link } from 'react-router-dom'
import "./Home.css"

function Home(){
    return(
<div>
    <h1> Home</h1>
    <Link to="/post">Posts</Link>
</div>

    )
}

export default Home
import React from "react";
import "./PreviewPostCard.css"
import { Link } from 'react-router-dom'
import blogData from '../../Config/blog-data.json'


function PreviewPostCard({id, title, image}){
    return(
       
        <div className="preview-post-card">
                        
        <img src={image} className="fruit-image"/>
    <h1 className='card-title'>{title}</h1>
    
    <Link to={`/post/read/${id} `} className="link">Read More...</Link>
    </div>
    
    )
}

export default PreviewPostCard
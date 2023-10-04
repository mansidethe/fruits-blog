import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from "./../../Config/blog-data.json"
import "./ReadPost.css"

function ReadPost(image){
    const {id}=useParams()

const [post, setPost]=useState({})

useEffect(()=>{
    blogData.forEach((postObj) => {
        if(postObj.id==id){
            setPost(postObj)
        }
    })
},[id])

    return(
        <div>
            <img src={image} className="fruit-image"/>
            <h1>{post.title}</h1>
            <p className="blog-text">{post.description}</p>
            <h1>Calories :</h1><p className="blog-text">{post.calories}</p>
            <h1>Sodium :</h1><p className="blog-text">{post.sodium}</p>
            <h1>Potassium :</h1><p className="blog-text">{post.potassium}</p>
            <h1>Carbohydrate:</h1><p className="blog-text">{post.carbohydrate}</p>
            <h1>Protein :</h1><p className="blog-text">{post.protein}</p>
           
        </div>
    )
        
    
   
    
}

export default ReadPost
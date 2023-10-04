import React from "react";
import blogData from './../../Config/blog-data.json'
import "./Post.css"
import PreviewPostCard from './../../components/PreviewPostCard/PreviewPostCard'

function Posts() {
    return (
        <div>
            <h1 className="fruit-text">Fruit Blog's</h1>
            <div className="blog-main-container">
            {
                blogData.map((post, index) => {
                  return<PreviewPostCard key={index} id={post.id} title={post.title} image={post.image} description={post.description} calories={post.calories} sodium={post.sodium} potassium={post.potassium} carbohydrate={post.carbohydrate} protein={post.protein}/>
                })

            }
</div>
        </div>

    )
}

export default Posts
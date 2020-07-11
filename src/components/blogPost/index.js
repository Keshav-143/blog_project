import React, {useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
// import { useState, useEffect } from 'react'
import blogPost from '../../data/blog.json';
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const[post,setPost]=useState({});      

      useEffect(()=>{
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post=>post.id==postId);
        setPost(post);
      });

  return(
   <div className='blogPostContainer'>
           <Card>

               <div className='blogHeader'>
               <span className="blogCategory">Featured</span>
                <h1 className='postTitle'>{post.blogTitle}</h1>
               <span className="postedBy">Posted on july 08,2020 by keshav Blogging Tips</span>
               </div>

               <div className="postImageContainer">
                    <img src={require("../../blogPostImages/memories-from.jpg")} alt="post image" />
               </div>

               <div className="postContant">
                  <h3>Post Title</h3>
                  <p> lorem ipsum </p>
               </div>

           </Card>
   </div>
   )

 }

export default BlogPost
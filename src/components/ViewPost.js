import React from 'react';
import '../assets/style/viewpost.css';
import {NavLink} from 'react-router-dom';

const ViewPost = (props) => {
    let {posts, id} = props;
 
    let postStyles = [
        {backgroundColor: 'var(--blue)'},
        {backgroundColor: 'var(--yellow)'},
        {backgroundColor: 'var(--green)'},
        {backgroundColor: 'var(--violet)'},
        {backgroundColor: 'var(--brown)'}
    
    ]
    
   
    const filteredPosts = posts.filter((post) => {
        return post.id === id
    })

    
    let index = 0;
    if(filteredPosts[0].category.toLowerCase().includes('work')) {
        postStyles = postStyles[index];
    } else if(filteredPosts[0].category.toLowerCase().includes('speech')) {
        index = index +1
        postStyles = postStyles[index]
    } else if(filteredPosts[0].category.toLowerCase().includes('recreation')) {
        index = index +2
        postStyles = postStyles[index];
    }    else if(filteredPosts[0].category.toLowerCase().includes('sport')) {
        index = index +3
        postStyles = postStyles[index]
    } else {
        index = index +4
        postStyles = postStyles[index]

    }
    

  
    return (
        <div className="viewpost-wrapper" >
        <div className="viewpost-container" style={postStyles}>
            <div className="back-to-top__btn__wrapper">
            <button className="back-to-posts__btn"><NavLink to="/" className="back-to-posts__link">Back to Post</NavLink></button>
            </div>
            <div className="header-container">
            <h3>Title: {filteredPosts[0].title}</h3>
                <h3>Category: {filteredPosts[0].category}</h3>
                </div>
                <p>Category: {filteredPosts[0].description}</p>
            <div className="buttons-wrapper">
               
            <NavLink to={`/editpost/${id}`}> <button id={id} onClick={props.editPost} className="btn-edit"> Edit Post </button></NavLink>
            <NavLink to ='/'><button id={id} onClick={props.deletePost} className="btn-delete">Delete</button></NavLink>
            
            </div>
            </div>

        </div>
    )
}

export default ViewPost;

import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/style/postitem.css'


const PostItem = (props) => {
    let {id, title, category} = props.post
    console.log(id)

    let postStyles = [
        {backgroundColor: 'var(--blue)'},
        {backgroundColor: 'var(--yellow)'},
        {backgroundColor: 'var(--green)'},
        {backgroundColor: 'var(--violet)'},
        {backgroundColor: 'var(--brown)'}
    
    ]
    
    let index = 0;
    if(category.includes('Work')) {
        postStyles = postStyles[index];
    } else if(category.toLowerCase().includes('speech')) {
        index = index +1
        postStyles = postStyles[index]
    } else if(category.toLowerCase().includes('recreation')) {
        index = index +2
        postStyles = postStyles[index];
    }    else if(category.toLowerCase().includes('sport')) {
        index = index +3
        postStyles = postStyles[index]
    } else {
        index = index +4
        postStyles = postStyles[index]

    }
    return (

            <div className="post-item__container grow" style={postStyles} >
            <ul className="post-item__wrapper">
                <h3 className="post-title">{title}</h3>
                <h3 className="post-category">{category}</h3>
                <div className="read-links__wrapper">
                <div><button className="btn-read__more">Read</button></div>
                <NavLink to={`/viewpost/${id}`} className="link">
                     <i className="fab fa-readme fa-2x grow2"></i></NavLink>
                </div>
                
            </ul>
            </div>
    )
}

export default PostItem;
import {NavLink} from 'react-router-dom';
import React, { Component } from 'react'
import './assets/style/form.css';


class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
                post: {
                   title: '',
                   category: '',
                   description: ''
                 }
                 
        }

       
    }

     handleSubmit = (e) => {
         e.preventDefault();
         this.props.editPost(this.state.post, this.props.id);
         this.props.history.push('/');


     }

    // handleSubmit= (e) => {
    //     e.preventDefault();
    //     const updatedPost = {...this.state.post}
    //     this.props.editPost(this.props.id, updatedPost);
    //     this.props.history.push('/');

    // }
    handleChange = (e) => {
        let {name, value} = e.target;
        const post = {...this.state.post,[name]: value}
        this.setState({post})
        
    }

  
    componentDidMount(){
        const {posts,id } = this.props
        const filteredPosts = posts.filter((post) => {
         return post.id === id
     })
     this.setState({post: filteredPosts[0]})
    }
    render() {
        
        
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="form">
            <h1>Edit Post</h1>
            <input type="text" 
            name="title" 
            value={this.state.post.title}
            onChange={this.handleChange}/>

            <input type="text" 
            name="category" 
            value={this.state.post.category}
            onChange={this.handleChange}/>

            <textarea type="text" 
            name="description" 
            value={this.state.post.description}
            onChange={this.handleChange}/>

            <div className="buttons-wrapper"></div>
            <button>Save</button>
            <NavLink to ="/"><button>Cancel</button></NavLink>

            
        </form>
            </div>
        )
    }
}

export default EditPost

/*
const EditPost = (props) => {
    let {posts, id} = props
    console.log(posts, id)

    
    const filteredPosts = posts.filter((post) => {
        return post.id === id
    })

    return (
        <div>
            <h1>Edit Post</h1>
            <input type="text" 
            name="title" 
            value={filteredPosts[0].title}
            onChange={props.handleChange}
            id={id}/>

            <input type="text" 
            name="category" 
            value={filteredPosts[0].category}
            onChange={props.handleChange}/>

            <textarea type="text" 
            name="description" 
            defaultValue={filteredPosts[0].description}
            onChange={props.handleChange}/>

            <div className="buttons-wrapper"></div>
            <button id={id}>Save</button>
            <NavLink to ="/"><button>Cancel</button></NavLink>

            
        </div>
    )
}

export default EditPost;*/


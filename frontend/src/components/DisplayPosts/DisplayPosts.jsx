//(5 points): As a developer, I want to display all posts (name, body, & liked status) within a feed on the main page.
// import our posts 
import React from 'react';
import Post from "../Post/Post";

const DisplayPosts = (props) => {
    return (
        <div className='display-div'>
            {props.posts.map((post) => {
                return(
                    <Post post={post}/>
                )
            })}
        </div>
    );
}
// export our DisplayPosts prop
export default DisplayPosts;

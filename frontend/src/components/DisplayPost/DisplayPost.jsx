// Import React 
import React from 'react';
// Import our Post
import Post from '../Post/Post';

// Const and logic
const DisplayPost = (props) => {
    return (
        <div className='displayDiv'>
            {props.posts.map((post) => {
                return(
                    <Post post={post}/>
                )

            })}
        </div>
    );
}
// Export our DisplayPosts prop
export default DisplayPost;
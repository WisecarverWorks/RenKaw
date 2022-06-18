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

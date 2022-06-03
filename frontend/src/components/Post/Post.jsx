import React, { useState } from 'react';
// Import two svg images to use for like/dislike button
import { ReactComponent as ThumbsUp} from "../SVG/thunbs-up-solid.svg"
import { ReactComponent as ThumbsDown} from "../SVG/thunbs-down-solid.svg"


// We are creating a Post to use in updating artwork.
const Post = (porps) => {

    const [likeColor, setLikeColor] = useState("grey");
    const [dislikeColor, setDislikeColor] = useState("grey");
  
    function toggleLikeDislike(type){
      if(type ==="like"){
        setLikeColor("green");
        setDislikeColor("grey");
      }
      else if(type ==="dislike"){
        setLikeColor("grey");
        setDislikeColor("red");
      }
      else{
        alert("Error with like/dislike toggle!");
      }
    }
    return (
      <div className = "post-box">
        <p>{porps.post.postName}</p>
        <p>{porps.post.postBody}</p>
        <span>
          <ThumbsUp height='1rem' fill={likeColor} style={{'margin-right': '1em'}} onClick={() => toggleLikeDislike("like")}/>
          <ThumbsDown height='1rem' fill={dislikeColor} onClick={() => toggleLikeDislike("dislike")}/>
        </span>
      </div>
    );
    
  
  }
  
  export default Post;
// Inmport React useState 
import React, { useState } from 'react';
// Import SVG files
import {ReactComponent as ThumbsUp} from "../SVG/thumbs-up-solid.svg";
import {ReactComponent as ThumbsDown} from "../SVG/thumbs-down-solid.svg";

// Body
const Post = (props) => {

    const [likeColor, setLikeColor] = useState("grey"); // The color of likeColor
    const [dislikeColor, setDislikeColor] = useState("grey"); // The color of DislikeColor

    // Function to toggle when our button is pressed. 
    function togglelikeColorDislikeColor(type){
        if(type === 'likeColor'){
            setLikeColor("green");
            // likeColor turns green when pressed
            setDislikeColor("grey"); // Stays grey
        }
        else if(type === "dislikeColor"){
            setLikeColor("grey");
            //  Toggle grey from green when pressed
            setDislikeColor("green"); // Toggle green from grey when pressed
        }
        else{
            alert("Error with likeColor/DislikeColor Button");
            console.log(alert);
        }
    }
    return  (
        // Here we will return a div which will include our thumbsup or down icon, as well as our post-box.
        <div className= "postbox">
            <p>{props.postName}</p>
            <p>{props.postBody}</p>
            <span>
                <ThumbsUp height='1rem' fill={likeColor} style ={{'margin-right': '1em'}} onClick={() => togglelikeColorDislikeColor("like")}/>
                <ThumbsDown height='1rem' fill={dislikeColor} onClick={() => togglelikeColorDislikeColor("dislike")}/>
            </span>
        </div>
    );
}
// Export our Porp
export default Post;
import React, { useState} from 'react';
// import react usestate
import {ReactComponent as ThumbsUp} from "../SVG/thumbs-up-solid.svg"
import {ReactComponent as ThumbsDown} from "../SVG/thumbs-down-solid.svg"
// Import SVG images

// Pass function Post as a prop

const BullitienPost = (props) => {

    const [likeColor, setLikeColor] = useState("grey"); // The color of like will be const to grey 
    const [dislikeColor, setDislikeColor] = useState("grey"); // The color of dislike will be also grey'd out

    // Function to toggle when our button is pressed. 
    function toggleLikeDislike(type){
        if(type === "like"){
            setLikeColor("green"); 
            // if like, sets color green
            setDislikeColor("grey"); 
            // if dislike, sets color to grey
        }
        else if(type ==="dislike"){
            setLikeColor("grey");
            setDislikeColor("red");
            // if dislike set like color to grey
            // if dislike set dislike color to red
        }
        else{
            alert("Error with like/dislike toggle!");
        }
    }
    return ( 
        // here we will return a div which includes our thumbs up an down along with out post-box
        <div className = "post-box">
            <p>{props.post.postName}</p>
            <p>{props.post.postBody}</p>
            <span>
                <ThumbsUp height='1rem' fill={likeColor} style ={{'margin-right': '1em'}} onClick={() => toggleLikeDislike("like")}/>
                <ThumbsDown height='1rem' fill={dislikeColor} onClick={() => toggleLikeDislike("dislike")}/>
            </span>
        </div>

    );

}
// React exports
export default BullitienPost; 
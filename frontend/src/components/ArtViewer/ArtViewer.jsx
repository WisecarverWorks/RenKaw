import React from "react";

function ArtViewer(props) {
    return (
        <div className="art">
            <div className="Time">
                <h1 className="Title">{props.art.title}</h1>
                <h4 className="Price">{props.art.price}</h4>
            </div>
        </div>
    );
}

export default ArtViewer;

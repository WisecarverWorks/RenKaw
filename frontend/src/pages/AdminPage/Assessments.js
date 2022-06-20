import React from "react";

function Assessment() {
    const PostAssessment = () => {};

    return (
        <div className="Assessment">
            <input type="file" />
            <button onClick={PostAssessment}>Post</button>
        </div>
    );
}

export default Assessment;
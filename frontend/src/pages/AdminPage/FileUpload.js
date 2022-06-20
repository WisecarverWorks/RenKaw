import React from "react";

function FileUpload() {
    const uploadImage = () => {};

    return (
        <div className="FileUpload">
            <input type="file" />
            <button onClick={uploadImage}>Upload Image</button>
        </div>
    );
}

export default FileUpload;
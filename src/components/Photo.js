import React from "react";

function Photo({src}){
    return (
        <div>
            <img className="photo-profile" src={src} />
        </div>
    )
};

export default Photo
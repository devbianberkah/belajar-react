import React from "react";



function Jokes(props){
    let title
    if ( props.item.openSpots === 0){
        title = "SOlD OUT"
    }   
    return(
        <div>
             <img src={`../images/${props.item.img}`} className="photo-profile"></img>
             <h3>{props.item.nama}</h3>
             <p>{props.item.alamat}</p>
             <p>{props.item.rating}</p>
             { title && <div className="card-badge">{title}</div> }
        </div>
    )
}

export default Jokes;
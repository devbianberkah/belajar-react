import React from "react";

export default function Card(props){
    return (
        <div className="test-card-body">
            <img src={props.item.imageUrl} className='test--img'/>
            <div className="test-card-detail">
                <p>
                  {props.item.location} <a target="_blank" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h2>
                    {props.item.title}
                </h2>
                <p>
                    {props.item.startDate} - { props.item.endDate }
                </p>
                <p>
                    {props.item.description}
                </p>
            </div>
        </div>
    )
}
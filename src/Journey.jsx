import React from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import { HiLocationMarker } from 'react-icons/hi';
import { BsGlobeAmericas } from 'react-icons/bs';

function Journey(props) {
  console.log("Props?", props);

  return (
    <>
      <div id="Journey" className="Journey d-flex flex-row justify-content-center align-items-center   ">


      <div className="outerClassBox">
      <div id="id-box" className="card d-flex flex-row">
        <img className="card--img" src={props.imageUrl} alt="Card image cap" />
        <div className="card-body d-flex flex-column justify-content-center align-items-left">
          <div>
            <small className="card--location card-subtitle"> <span className="locationIcon"> <HiLocationMarker size={20} style={{ color: "red" }} />  </span> {props.location.toUpperCase()} </small>
            <a  className="card-gmaps" href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            <h1 className="card-title ">{props.title}</h1>
          </div>
          <p className="card--dates card-text font-weight-bold">{props.startDate} - {props.endDate}</p>
          <p className="card--description card-text">{props.description}</p>
        </div>
      </div>
      </div>

      </div>
    </>
  );
}

export default Journey;

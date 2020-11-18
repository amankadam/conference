import React from 'react';

const Card = (props) => {
  var imageURL=props.data.imageURL.indexOf("/")==0 ? props.data.imageURL.substring(3,props.data.imageURL.length-1):props.data.imageURL.substring(1,props.data.imageURL.length-1);
  return (
    <div className="card grid-item">

    <div className="view overlay">
      <img className="card-img-top" style={{width:'400px',height:'250px'}} src={imageURL}  alt="Loading.."/>
      <a href="#!">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>
    {
      props.data.entryType=='Paid' ?
    <span className="badge badge-danger">{props.data.entryType}</span>
    :
    <span className="badge badge-success">{props.data.entryType}</span>

  }
    <div className="card-body">
    <div className='location'>
    <span style={{color:'grey',fontSize:'16px',}}><i className="fas fa-map-pin"></i>&nbsp;&nbsp;{props.data.city}</span>
    <span style={{fontSize:'12px',color:'grey',float:'right'}}><i className="fas fa-calendar-alt"></i> {props.data.confStartDate} - {props.data.confEndDate} </span>
    </div>

      <h4 className="card-title"><b>{props.data.confName}</b></h4>
      <p className="card-text">
        <i className="fas fa-map-marker"></i>
       &nbsp;&nbsp;&nbsp;
        {props.data.venue}
      </p>
    </div>
  </div>
  )
}

export default Card;

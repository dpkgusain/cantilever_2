import React from 'react';
import defImg from "./images/no-img.jpg";

const NewsItem = ({ title, description, img, imgurl, author, date, sourceName }) => {
  const changeDate = (date) => {
    let getdate = new Date(date);
    return getdate.toDateString();
  };

  return (
    <div>
      <div className="card my-3 mx-auto" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{'zIndex' : '1'}}>
          {sourceName}
        </span>
        <img src={img ? img : defImg} className="card-img-top" alt="..." style={{maxHeight : "150px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={imgurl} className="btn btn-primary">Read More</a>
          <p className="card-text"><small className="text-muted">By {author} on</small></p>
          <p className="card-text"><small className="text-muted">{changeDate(date)} </small></p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
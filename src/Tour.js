import React, { useState } from "react";

/*
const Tour = ({ id, image, price, name, info, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readmore ? info : `${info.substring(0, 200)}....`}
            <button onClick={() => setReadmore(!readmore)}>
              {readmore ? "show less" : "read more"}
            </button>
          </p>
          <button onClick={() => removeTour(id)} className="delete-btn">
            not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
*/

const Tour = ({ image, id, name, info, price, removeTours }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 tour-price>${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadmore(!readmore)}>
            {readmore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

/*
const Tour = ({ image, id, name, info, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 tour-price>${price}</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
*/

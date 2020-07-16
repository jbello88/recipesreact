import React from 'react';
import './App.css';

function MainCard({sys ,title, image, clickHandler}) {

  const localClickHandler =(e) => {
    clickHandler(sys.id)
  }
 
  return (
      <div className="card w-50"  data-id={sys.id} onClick= {localClickHandler}>
        <div className="card text-white bg-dark mb-3">
      
            <div className="card-body">
              <img
                className="card-img-top"
                src={image.url}
                alt={title}
              />
              <h2 className="card-title">{title}</h2>
            </div>
      
        </div>
    </div>
    );
  }

  export default MainCard;
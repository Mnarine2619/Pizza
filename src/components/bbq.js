import React, { Component } from 'react';
import Bbq from './images/bbq.jpg';
import './css/slice.css';

function bbq() {
  return(
  <div className="Bbq col-4">
      <div className="card">
        <img src={ bbq} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Bbq Slice</h5>
          <p className="card-text">Try the most crispy and delicious bbq slice for just a dollar.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  )
}

export default Bbq;

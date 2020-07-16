import React from 'react';
import './App.css';

function Ingredient({description ,quantity}) {


  return (
    <tr>
        <td>{quantity}</td>
  <td>{description}</td>
  </tr>
    );
  }

  export default Ingredient;
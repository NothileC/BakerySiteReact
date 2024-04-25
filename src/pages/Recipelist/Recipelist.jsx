import React from 'react'
import { PRODUCTS } from '../../products';
import product from './product';


const Recipelist = () => {
  return (
    <div className="list">
      <div className="listTitle">
        <h1>Tastien</h1>
      </div>

      <div className="products"> 
      {PRODUCTS.map((Product) => (
        <product data={product}/>
      ))}
        

      </div>


    </div>
  )
}

export default Recipelist
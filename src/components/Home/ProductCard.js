import React from 'react'
import {Link } from 'react-router-dom'
function ProductCard({bdata}) {
    return (
      <Link to={`/productdetail/${bdata.id}`}>
        <div class="card col-md-4 text-center " >
        <div class="card-body">
            <img style={{height:'80px'}} src={bdata.imgofproduct} alt=""/>
    <h5 class="card-title">{bdata.nameofproduct}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{bdata.desoproduct}</h6>
  <h6>{bdata.price}</h6>
      
        </div>
      </div>
      </Link>
      
    )
}

export default ProductCard
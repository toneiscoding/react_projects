import React from 'react'

const SingleProduct = (props) => {
  //this component will show one product
  //the parent will need to send the name and price of the product
  
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.price}</div>

    </div>
  )
}

export default SingleProduct


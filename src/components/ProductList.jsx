import React, { useState } from 'react'

const ProductList = () => {
  const products = [
    { id: 1, name:"Shoes", price:"799"},
    { id: 2, name:"Laptop", price:"15000"},
    { id: 3, name:"Pen", price:"5"}
  ];
  return (
    <div>
      <h2>Product List</h2>
      {products.map((item)=>(
        <div key = {item.id}>
        <h3>{item.name}</h3>
        <p>price:{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
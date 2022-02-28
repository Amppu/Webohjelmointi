import React from 'react'
import ProductItem from './Products';

export default function ProductsView(props) {
  return (
    <div className="productContainer" >
        {props.products.filter(product =>product.name.toLowerCase().includes(props.searchTerm.toLowerCase())).map(p => 
        <ProductItem key={p.id} image={p.image} name={p.name} price={p.price}/>)}
   </div>
  )
}
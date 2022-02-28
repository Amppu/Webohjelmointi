import React from 'react'

export default function ProductItem(props) {
  return (
<div className="productItem">
    <img src={ props.image } alt="" />
    <div className="title">{props.name}</div>
    <div className="price"><a>$</a>{ props.price}</div>
</div>
  )
}
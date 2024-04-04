/* eslint-disable no-unused-vars */
import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt={`${props.title}`} />
        <p>{props.name}</p>
        <div className="item-price">
            
        </div>
    </div>
  )
}

export default Item
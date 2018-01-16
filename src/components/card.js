import React from 'react';

const Card = ({ type, title, description, removeCallback }) => (
    <div className='question' draggable="true">
        <span className='remove' onClick={() => removeCallback(type, title) }>Remove Item</span>
        <h4>{ title }</h4>
        <p>{ description }</p>
    </div>
)

export default Card;
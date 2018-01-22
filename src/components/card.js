import React from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';

const Card = ({ type, types, cardList, updateItem, removeItem }) => (
    <div className='list'>
        <h2>{type} list</h2>
        <Droppable types={types} onDrop={(item) => updateItem({item}, type, types)}>
            { cardList.map((eachCard, index)=> (
                <Draggable type={type} data = {JSON.stringify({item: eachCard, removeType: type})} key={index} >
                    <div className={`${type} item`} draggable="true" { ...eachCard }>
                        <span className='remove' onClick={() => removeItem({type, title: eachCard.title}) }>X</span>
                        <h4>{ eachCard.title }</h4>
                        <p>{ eachCard.description }</p>
                    </div>
                </Draggable>               
            ))}
        </Droppable>
    </div>
)

export default Card;
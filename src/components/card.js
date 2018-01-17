import React from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';

const Card = ({ type, types, cardList, updateItem, removeItem }) => (
    <div className='list-wrapper'>
    <h3>{type} list</h3>
    <Droppable types={types} onDrop={(item) => updateItem({item}, type, types)}>
        { cardList.map((eachCard, index)=> (
            <Draggable type={type} data = {JSON.stringify({item: eachCard, removeType: type})} key={index} >
                <div className='question' draggable="true" { ...eachCard }>
                    <span className='remove' onClick={() => removeItem({type, title: eachCard.title}) }>Remove Item</span>
                    <h4>{ eachCard.title }</h4>
                    <p>{ eachCard.description }</p>
                </div>
            </Draggable>               
        ))}
    </Droppable>
    { type === 'todo' ? 
            <form>
                <div>
                    <label>Enter Title</label>
                    <input type='text' ref={(elem) => this.title = elem} required />
                </div>
                <div>
                    <label>Enter Description</label>
                    <input type='text' ref={(elem) => this.description = elem} required />
                </div>
                <button onClick={() => updateItem({title: this.title, description: this.description}, type, types) }>Add Item</button>
            </form>
            :
            null
    }
    </div>
)

export default Card;
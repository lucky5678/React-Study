
import React from "react";
import './person.css'
const person = (props) => {
    return (
        <div className='person'>
            <p onClick={props.myclick}>大家好！我是{props.name}！我已经拥有{props.count}个作品</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} defaultValue={props.name}/>
        </div>
    ) 
}
export default person
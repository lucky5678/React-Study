import React from 'react';
import classes from './Handler.css';
const MyHeader = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px', 
        cursor: 'pointer'
      };
      if(props.showPerson){
        style.backgroundColor = 'red'
    }
   
    // const classes =['red','bold'].join(' '); 增加类名
    const assginedClasses = [];

    if (props.length <= 2) {
        assginedClasses.push(classes.red) //classes = ['red']
    }
    if (props.length <= 1) {
        assginedClasses.push(classes.bold)  //classes = ['red', bold']
    }
    
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assginedClasses.join(' ')}> Hi,React App</p>

            {/* 一种方式是用箭头函数属性传值 ：<button onClick={() => this.swithNameHandler('米修')} 
      >更改状态值</button> 另一种方式是bind*/}
            {/* <button style={style} onClick={this.swithNameHandler.bind(this, 'misu')} >更改状态值</button> */}
            <button style={style} onClick={props.clicked} >内容切换</button>
        </div>
    ) 

}

export default MyHeader
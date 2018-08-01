import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import MyHeader from '../components/Handler/Handler';

//有状态组件
class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor is running..",props);

    /**
      * state:用于改变组件内容状态的值
      * props:用于组件通信之间的传值
      */
    this.state = {
      persons: [
        { id: 1, name: 'zhuzhu', count: 50 },
        { id: 2, name: 'zhuhello', count: 40 },
        { id: 3, name: 'zhuworld', count: 30 },
      ],
      otherState: 'anything',
      showPerson: false
    }
  }
  componentWillMount(){
    console.log("[App.js] commponentWillMount is running..")
  }
  componentDidMount(){
    console.log("[App.js] componentDidMount is running..")
  }

  swithNameHandler = (newName) => {
    // console.log('hello world!')
    this.setState({
      persons: [
        { name: newName, count: 50 },
        { name: 'zhuhello', count: 402222 },
        { name: 'zhuworld', count: 30 },
      ]
    })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { //第一步：找到index
      return p.id === id;
    })

    const person = {   //第二步：在整个数组中找到所需要的对象
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;  //第三步：拿到后给当前 person.name修改赋值；

    const persons = [...this.state.persons]  //第四步：继续拿到当前的原型数组 

    persons[personIndex] = person; //第五步：找到原型数组中的对象，并把修改的person赋值
    this.setState({
      persons: persons
    })

  }
  toggleChangedHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }
  deletePersonHandler = (personIndex) => {
    // const person =  this.state.persons;//获取当前状态
    const person = [...this.state.persons];  //操作运算符  
    person.splice(personIndex, 1); //做出修改
    this.setState({
      persons: person
    })//更新状态

  }
  render() { //将以下内容  渲染到DOM中

    console.log("[App.js] render is running..")
    let person = null;
    if (this.state.showPerson) {
      person = <Persons

        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}

      />
    }
    //动态改变css样式
    // const classes =['red','bold'].join(' '); 增加类名
    return (
      //jsx中有且只能有一个标签
      <div className="App">
        <MyHeader
          title={this.props.appTitle}
          persons={this.state.persons}
          clicked={this.toggleChangedHandler}
          showPerson={this.state.showPerson}
        />

        {person}

      </div>
    );
  }
}

export default App;

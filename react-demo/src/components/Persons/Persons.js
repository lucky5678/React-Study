import React, { Component } from "react";
import Person from './Person/Person'

class persons extends Component {
    constructor(props) {
        super(props)
        console.log('[Persons.js] constructor is running..')
    }
    componentWillMount() {
        console.log('[Persons.js] componentWillMount is running..')
    }
    componentDidMount() {
        console.log('[Persons.js] componentDidMount is running..')
    }

    //更新组件生命周期钩子函数

    componentWillReceiveProps(nextProps){
        console.log('UPDATA [Persons.js] componentWillReceiveProps is running..',nextProps)
    }

    shouldComponentUpdate(nextProps,nexState){
        console.log('UPDATA [Persons.js] shouldComponentUpdate is running..'
        ,nextProps,nexState)

        return nextProps.persons !==this.props.persons;
    }
    render() {
        console.log('[Persons.js] render is running..')
        return this.props.persons.map((person, index) => {
            return <Person
                myclick={() => this.props.clicked(index)}
                name={person.name}
                count={person.count}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        })
    }

}

export default persons;
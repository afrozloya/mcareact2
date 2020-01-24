import React, { Component } from 'react'
import axios from 'axios'
export default class Todo extends Component {
    state = {
        t1: {}
    }
    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/todos/2";
        axios.get(url)
        .then(resp => {
            this.setState({
                t1: resp.data
            })
        })
        .catch(err => {
            console.log(err)
        })    
        }
    render() {        
        return (
            <div>
                <h1>{this.state.t1.title}</h1>
            </div>
        )
    }
}

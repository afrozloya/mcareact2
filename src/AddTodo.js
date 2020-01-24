import React, { Component } from 'react'
import axios from 'axios'
export default class componentName extends Component {
    state = {
        title: ''
    }
    onClickHand = (e) => {
        const url = "https://jsonplaceholder.typicode.com/todos";
        const data = {
            userId: 10,
            title: this.state.title
        }
        axios.post(url, data)
        .then(resp => {
            console.log(resp)
            this.setState({
                title: ''
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    onChangeHand = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    render() {
        return (
            <div>
                <h1>Add!!</h1>
                <input
                name="title"
                value={this.state.title}
                onChange={this.onChangeHand}
                />
                <button onClick={this.onClickHand}>Add New</button>
            </div>
        )
    }
}

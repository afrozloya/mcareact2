import React, { Component } from 'react'
import axios from 'axios'

export default class componentName extends Component {
    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/todos";
        axios.get(url)
        .then(resp => {console.log(resp.data)})
        .catch(err => {console.log(err)})    
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

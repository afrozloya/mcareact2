import React, { Component } from 'react'

export default class Car extends Component {
    render() {
        return (
            <div>
            <h1>I am a {this.props.brand}, make {this.props.make} </h1>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Login from './Login'

export default class MyMain1 extends Component {
    state = {
        token: null
    }
    setToken = (token) => {
        this.setState({
            token: token
        })
    }
    onLogoutHand = () => {
        this.setState({
            token: null
        })
    }
    render() {
        let out = <div>
            <Login setToken={this.setToken} />
        </div>
        if(this.state.token){
            out = <div>
                <h1>Welcome!!!</h1>
                <button onClick={this.onLogoutHand}>Logout</button>
            </div>
        }
        return (
            <div>
                <h1>For Login!!</h1>
                {out}
            </div>
        )
    }
}

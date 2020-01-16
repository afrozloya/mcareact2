import React, { Component } from 'react'

export default class App2 extends Component {
    state = {
        login: false,        
    }
    m1 = () => {
        // this.setState({
        //     login: true,
        // })
        this.setState((prevState) => {
            return {
                login: !prevState.login,
            }
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.login 
                    ? <h1>Please Logout</h1>
                    : <h1>Please Login</h1>
                }
                <button onClick={this.m1}>Clk Me</button>
            </div>
        )
    }
}

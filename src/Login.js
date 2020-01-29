import React, { Component } from 'react'
import Axios from 'axios';

export default class componentName extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }
    onChangeHand = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onLoginHand = (e) => {
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_KEY";
        const data = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }
        Axios.post(url, data)
        .then(resp => {
            console.log(resp)
            this.props.setToken(resp.data.idToken)
        })
        .catch(err => {
            console.log(err)
            this.setState({
                error: err.message
            })
        })
        // this.props.setToken("dummmyyy......")
    }

    onReg = (e) => {
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR_KEY";
        const data = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }
        Axios.post(url, data)
        .then(resp => {
            console.log(resp)
            this.props.setToken(resp.data.idToken)
        })
        .catch(err => {
            console.log(err)
            this.setState({
                error: err.message
            })
        })
        // this.props.setToken("dummmyyy......")
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type="email"
                name="email" value={this.state.email}
                onChange={this.onChangeHand} />
                <input type="password"
                name="password" value={this.state.password}
                onChange={this.onChangeHand} />
                <p style={{color:'red'}}>{this.state.error}</p>
                <button onClick={this.onLoginHand}>Login</button>
                <button onClick={this.onReg}>Signup</button>
            </div>
        )
    }
}

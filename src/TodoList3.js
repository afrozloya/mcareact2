import React, { Component } from 'react'
import axios from 'axios'

export default class componentName extends Component {
    state = {
        todos: [],
        si: '',
    }

    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/todos";
        axios.get(url)
        .then(resp => {
            this.setState({
                todos: resp.data
            })
            var todoStr = JSON.stringify(resp.data);
            localStorage.setItem("todoStr", todoStr);
        })
        .catch(err => {
            console.log(err)
            var todoStr = localStorage.getItem("todoStr")
            var todos = JSON.parse(todoStr)
            this.setState({
                todos: todos
            })

        })    
        }


    onChHand = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    onDelHand = (id) => {
        console.log(id)
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
        axios.delete(url)
        .then(resp => {
            console.log(resp)
        })
        .catch(err => {
            console.log(err);
        })

    }
    render() {
        const newtodos = this.state.todos.filter( t1 => {
            var siRegex = new RegExp(this.state.si, "i")
            return t1.title.search(siRegex) !== -1
        })        

        return (
            <div>
                <input name="si" value={this.state.si} onChange={this.onChHand} /><br/>
                {                    
                    newtodos.map( t1 => <p key={t1.id}>{t1.id} :: {t1.title}
                    <button onClick={() => this.onDelHand(t1.id)}>X</button>
                    </p>)
                }
            </div> 
        )
    }
}

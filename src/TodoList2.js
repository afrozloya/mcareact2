import React, { Component } from 'react'

export default class componentName extends Component {
    nid = 5;
    state = {
        todos: [
            {"id":"1", "text":"Visit College"},
            {"id":"2", "text":"Visit Parents"},
            {"id":"3", "text":"Create Report"},
            {"id":"4", "text":"Publish Paper"},
        ],
        txt: '',
        si: '',
    }
    onChHand = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    onClk = () => {
        const newtodos = this.state.todos         
        newtodos.push({"id":this.nid++, text: this.state.txt})
        this.setState({
            txt: '',
            todos: newtodos,
        })
    }
    onDel = (id) => {
        const newtodos = this.state.todos.filter( t1 => {
            return t1.id !== id
        })        
        this.setState({
            todos: newtodos,
        })
    }
    render() {
        const newtodos = this.state.todos.filter( t1 => {
            var siRegex = new RegExp(this.state.si, "i")
            return t1.text.search(siRegex) !== -1
        })        

        return (
            <div>
                <input name="si" value={this.state.si} onChange={this.onChHand} /><br/>
                <input name="txt" value={this.state.txt} onChange={this.onChHand} />
                <button onClick={this.onClk}>Add</button>
                {                    
                    newtodos.map( t1 => <p key={t1.id}>{t1.id} :: {t1.text} {' '}
                    <button onClick={() => this.onDel(t1.id)}>X</button>
                    </p>)
                }
            </div> 
        )
    }
}

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
        filteredTodos: []
    }
    componentDidMount(){
        this.setState({
            filteredTodos: this.state.todos,
        })
    }
    onChHand = (e) => {
        this.setState({
            "txt": e.target.value 
        })
    }
    onChHand2 = (e) => {
        this.setState({
            "si": e.target.value 
        })
        const newtodos = this.state.todos.filter( t1 => {
            var siRegex = new RegExp(e.target.value, "i")
            return t1.text.search(siRegex) !== -1
        })        
        this.setState({
            // todos: newtodos,  
            filteredTodos: newtodos           
        })
    }
    onClk = () => {
        const newtodos = this.state.todos         
        newtodos.push({"id":this.nid++, text: this.state.txt})
        this.setState({
            txt: '',
            todos: newtodos,
            filteredTodos: newtodos
        })
    }
    onDel = (id) => {
        const newtodos = this.state.todos.filter( t1 => {
            return t1.id !== id
        })        
        this.setState({
            todos: newtodos,
            filteredTodos: newtodos
        })
    }
    render() {
        return (
            <div>
                <input name="si" value={this.state.si} onChange={this.onChHand2} /><br/>
                <input name="txt" value={this.state.txt} onChange={this.onChHand} />
                <button onClick={this.onClk}>Add</button>
                {                    
                    this.state.filteredTodos.map( t1 => <p key={t1.id}>{t1.id} :: {t1.text} {' '}
                    <button onClick={() => this.onDel(t1.id)}>X</button>
                    </p>)
                }
            </div> 
        )
    }
}

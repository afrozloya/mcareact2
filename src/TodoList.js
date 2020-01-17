import React, { Component } from 'react'

export default class TodoList extends Component {
    state = {
        todos: [
            {"id":"1", "text":"Visit College"},
            {"id":"2", "text":"Visit Parents"},
            {"id":"3", "text":"Create Report"},
            {"id":"4", "text":"Publish Paper"},
        ]
    }
    render() {
        return (
            <div>
                {
                    this.state.todos.map((t1) => {
                        return <p key={t1.id}>{t1.id} :: {t1.text}</p>
                    })
                }
            </div>
        )
    }
}

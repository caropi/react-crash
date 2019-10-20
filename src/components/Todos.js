import React, { Component } from 'react'

export default class Todos extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'take out trash',
                completed: false
            },
            {
                id: 2,
                title: 'feed kittens',
                completed: false
            },
            {
                id: 3,
                title: 'dance',
                completed: false
            }                        
        ]
    }
    render() {
        return (
            <div>
                <h1>Todos</h1>
            </div>
        )
    }
}

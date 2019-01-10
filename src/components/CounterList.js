import React, { Component } from 'react'
import Counter from './Counter'

const createRamge = num => Array.from(Array(num).keys())

class CounterList extends Component {
    state = {
        numCounters: 2
    }

    addCounter = () => {
        const { numCounters } = this.state;
        this.setState({ numCounters: numCounters + 1 })
    }

    renderCounters(index) {
        return (
            <li key={index}>
                <Counter />
            </li>
        )
    }
    render() {
        const { numCounters } = this.state
        const countersArray = createRamge(numCounters)

        return (
            <div>
                <button
                    className={'add'}
                    onClick={this.addCounter}
                >
                    add
                </button>
                <ul>
                    {countersArray.map(num => this.renderCounters(num))}
                </ul>
            </div>
        )
    }
}

export default CounterList
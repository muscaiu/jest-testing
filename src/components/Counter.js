import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    decrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div>
                <p>Current count: {this.state.count}</p>
                <button
                    className="increment"
                    onClick={this.increment}
                >
                    Increment count
                </button>
                <button
                    className="decrement"
                    onClick={this.decrement}
                >
                    Increment count
                </button>
            </div>
        )
    }
}

export default Counter

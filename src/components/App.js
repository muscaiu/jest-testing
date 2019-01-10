import React from 'react';
import Counter from './Counter'
import CounterList from './CounterList'

class App extends React.Component {
    render() {
        return (
            <div>
                <CounterList />
            </div>
        )
    }
}

export default App;

export const add = (a, b) => a + b

export const total = (shipping, subTotal) => `$${add(shipping, subTotal)}`

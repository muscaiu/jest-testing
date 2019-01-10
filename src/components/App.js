import React from 'react';
import Counter from './Counter'

class App extends React.Component {
    render() {
        return (
            <div>
                <Counter />
            </div>
        )
    }
}

export default App;

export const add = (a, b) => a + b

export const total = (shipping, subTotal) => `$${add(shipping, subTotal)}`

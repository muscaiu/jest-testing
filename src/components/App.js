import React from 'react';
import Counter from './Counter'

class App extends React.Component {
    render() {
        return (
            <div>
                <Counter />
                <div className="container">
                    <h1>w00t</h1>
                </div>
            </div>
        )
    }
}

export default App;

export const add = (a, b) => a + b

export const total = (shipping, subTotal) => `$${add(shipping, subTotal)}`

import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../Counter'

describe('Counter component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter />)
    const text = wrapper.find('p').text()

    expect(text).toEqual('Current count: 0')
  })
  
  it('can increment the count when the button is clicked', () =>{
    const wrapper = shallow(<Counter />)
    const incrementBtn = wrapper.find('button.increment')
    incrementBtn.simulate('click')
    const text = wrapper.find('p').text()

    expect(text).toEqual('Current count: 1')
  })

  it('can decrement the count when the decrement button is clicked', () =>{
    const wrapper = shallow(<Counter />)
    const decrementBtn = wrapper.find('button.decrement')
    decrementBtn.simulate('click')
    const text = wrapper.find('p').text()

    expect(text).toEqual('Current count: -1')
  })
})

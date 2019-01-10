import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../Counter'

describe('Counter component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter />)
    const text = wrapper.find('p').text()
    expect(text).toEqual('Current count: 0')
  })
})
import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import CounterList from '../CounterList'
import { wrap } from 'module';

describe('CounterList', () => {
    it('should match the snapshot', () => {
        const tree = renderer.create(<CounterList />).toJSON()

        expect(tree).toMatchSnapshot()
    })
    it('should add a counter when the add button is clicked', () => {
        const wrapper = shallow(<CounterList />)
        const counters = wrapper.find('Counter')

        expect(counters.length).toEqual(2)
    })
    it('should add a counter when the add button is clicked', () => {
        const wrapper = shallow(<CounterList />)
        const btnAdd = wrapper.find('button.add')
        btnAdd.simulate('click')
        const counters = wrapper.find('Counter')
        
        expect(counters.length).toEqual(3)
    })
})

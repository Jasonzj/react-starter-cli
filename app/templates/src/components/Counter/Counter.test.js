import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

const setup = () => {
    const props = {
        value: 0,
        getData: jest.fn(),
        onIncrement: jest.fn(),
        onDecrement: jest.fn(),
        onIncrementAsync: jest.fn(),
        onDecrementAsync: jest.fn()
    }

    const wrapper = shallow(<Counter {...props} />)

    return {
        props,
        wrapper
    }
}

describe('Counter component', () => {
    const { wrapper, props } = setup()
    it('should render dom', () => {
        expect(wrapper.find('h1').text()).toContain('0')
    })
    it('should button click', () => {
        expect(wrapper.find('button').first().simulate('click'))
        expect(props.onIncrement).toBeCalled()
    })
})
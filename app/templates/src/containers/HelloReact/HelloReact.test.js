import React from 'react'
import { shallow } from 'enzyme'
import HelloReact from './HelloReact'

describe('HelloReact component', () => {
    it('should render dom', () => {
        const wrapper = shallow(<HelloReact />)
        expect(wrapper.find('h1').text()).toContain('React starter')
    })
})
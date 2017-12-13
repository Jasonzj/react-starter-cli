import { actions, types } from '../count'

describe('count action', () => {
    it('should create an action to onIncrement', () => {
        const expectedAction = {
            type: types.SET_INCREMENT,
        }
        expect(actions.onIncrement()).toEqual(expectedAction)
    })
    it('should create an action to onDecrement', () => {
        const expectedAction = {
            type: types.SET_DECREMENT,
        }
        expect(actions.onDecrement()).toEqual(expectedAction)
    })
})
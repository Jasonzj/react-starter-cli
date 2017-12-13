import sleep from 'utils/sleep'

export const types = {
    SET_INCREMENT: 'count/SET_INCREMENT',
    SET_DECREMENT: 'count/SET_DECREMENT',
}

export const actions = {
    onIncrement: () => ({ type: types.SET_INCREMENT }),
    onDecrement: () => ({ type: types.SET_DECREMENT }),
    onIncrementAsync: () => async (dispatch) => {
        await sleep(1000)
        dispatch(actions.onIncrement())
    },
    onDecrementAsync: () => async (dispatch) => {
        await sleep(1000)
        dispatch(actions.onDecrement())
    }
}

const initialState = 0

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_INCREMENT:
            return state + 1
        case types.SET_DECREMENT:
            return state - 1
        default:
            return state
    }
}
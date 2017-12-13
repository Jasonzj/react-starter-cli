import instance from 'utils/instance'
import { getUserListPage } from 'utils/api'

export const types = {
    SET_DATA: 'data/SET_DATA'
}

export const actions = {
    setData: data => ({ type: types.SET_DATA, data }),
    getData: () => async (dispatch) => {
        try {
            const result = await instance.get(getUserListPage(1))
            dispatch(actions.setData(result.data.data))
        } catch (err) {
            console.error(err)
        }
    }
}

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_DATA:
            return action.data
        default:
            return state
    }
}
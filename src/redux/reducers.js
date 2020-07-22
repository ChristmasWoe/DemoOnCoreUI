import { SET_MODE_CARDLIST } from './constants'

const initialState = {
    mode: 'tiles',
}

export const setCardlist = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_MODE_CARDLIST:
            return {
                ...state,
                mode: action.payload,
            }
        default:
            return state
    }
}
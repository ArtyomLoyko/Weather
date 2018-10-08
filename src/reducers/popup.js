import { SET_COORD_POPUP, SHOW_POPUP, CLOSE_POPUP } from '../constants';

const initialState = {
    isOpen: false,
    isClose: true,
    coord: null,
};

const popup = (state = initialState, action) => {
    switch (action.type) {
        case SET_COORD_POPUP:
            return {
                ...state,
                coord: action.payload,
            };
        case SHOW_POPUP:
            return {
                ...state,
                isOpen: true,
                isClose: false,
            };
        case CLOSE_POPUP:
            return {
                ...state,
                isOpen: false,
                isClose: true,
            };
        default:
            return state;
    }
};

export default popup;

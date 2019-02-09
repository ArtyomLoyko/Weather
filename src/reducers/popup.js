import { createReducer } from 'redux-act';
import { setCoordPopup, showPopup, closePopup } from '../actions';

const initialState = {
    isOpen: false,
    isClose: true,
    coord: null,
};

export default createReducer(
    {
        [setCoordPopup]: (state, coord) => ({
            ...state,
            coord: coord,
        }),
        [showPopup]: state => ({
            ...state,
            isOpen: true,
            isClose: false,
        }),
        [closePopup]: state => ({
            ...state,
            isOpen: false,
            isClose: true,
        }),
    },
    initialState
);

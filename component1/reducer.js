import { actionType1 } from './types';

const initialValue = {
    date: "Select Date"
}

export const component1reducer = (state = initialValue, action) => {
    switch(action.type){
        case actionType1: return {
            ...initialValue,
            ...action.payload
        }
        default: return{
            ...state
        }
    }
}
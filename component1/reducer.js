import { actionType1 } from './types';

const initialValue = {
}

export const reducer = (state = initialValue, action) => {
    switch(action.type){
        case actionType1: return {
            ...initialValue,

            ...action.payload
        }
        default: return{
            state
        }
    }
}
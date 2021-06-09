import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions';

const initialState = {
    activity: {
        activity: "",
        type: "",
        participants: 0,
        price: 0,
    },
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                isFetching: false,
                activity: action.payload
            });
        case(FETCH_FAIL):
            return({
                ...state,
                isFetching: false,
                error: action.payload
            });
        default:
            return(state);
    }
}
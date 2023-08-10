import * as actions from './actionTypes'

const initState = {
    imageList: {
        data: JSON.parse(localStorage.getItem('loacalImageList')),
        error: null,
    },
    randomImage: {
        data: null,
        error: null,
        isloading: false
    },
    alert: {
        message: null,
        show: false
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        //Get favourite image List
        case actions.GET_RANDOM_IMAGE_START:
            return {
                ...state,
                randomImage: {
                    ...state.randomImage,
                    isloading: true
                }
            }
        case actions.GET_RANDOM_IMAGE_FAIL:
            return {
                ...state,
                randomImage: {
                    ...state.randomImage,
                    isloading: false,
                    error: action.payload
                }
            }
        case actions.GET_RANDOM_IMAGE_SUCCESS:
            return {
                ...state,
                randomImage: {
                    ...state.randomImage,
                    data: action.payload,
                    isloading: false,
                }
            }
        case actions.GET_RANDOM_IMAGE_END:
            return {
                ...state,
                randomImage: {
                    ...state.randomImage,
                    isloading: false,
                    error: null
                }
            }
        //get favourite images
        case actions.ADD_FAVOURITE_IMAGE:
            localStorage.setItem('loacalImageList', JSON.stringify(state.imageList.data.concat(action.payload)));
            return {
                ...state,
                imageList: {
                    ...state.imageList,
                    data: state.imageList.data.concat(action.payload)
                }
            }
        case actions.DELETE_FAVOURITE_IMAGE:
            localStorage.setItem('loacalImageList', JSON.stringify(state.imageList.data.filter(x => x !== action.payload)));
            return {
                ...state,
                imageList: {
                    ...state.imageList,
                    data: state.imageList.data.filter(x => x !== action.payload)
                }
            }
        case actions.SET_ALERT:
            return {
                ...state,
                alert: {
                    ...state.alert,
                    message: action.payload.message,
                    show: action.payload.show
                }
            }
        default:
            return state
    }
}

export default reducer;

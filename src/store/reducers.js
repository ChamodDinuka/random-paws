import * as actions from './actionTypes'

const initState = {
    imageList: {
        data: [],
        error: null,
    },
    randomImage: {
        data: null,
        error: null,
        isloading: false
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
            let tempImageList = state.imageList.data
            tempImageList.push(action.payload)
            return {
                ...state,
                imageList: {
                    ...state.imageList,
                    data: tempImageList 
                }
            }
        // case actions.DELETE_FAVOURITE_IMAGE:
        //     return {
        //         ...state,
        //         imageList: {
        //             ...state.imageList,
        //             isloading: false,
        //             error: action.payload
        //         }
        //     }
        // case actions.GET_FAVOURITE_IMAGES:
        //     return {
        //         ...state,
        //         imageList: {
        //             ...state.imageList,
        //             data: action.payload,
        //             isloading: false,
        //         }
        //     }

        default:
            return state
    }
}

export default reducer;

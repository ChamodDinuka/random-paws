import * as actions from './actionTypes';

export const getRandomImage = () => async dispatch => {
    dispatch({ type: actions.GET_RANDOM_IMAGE_START });

    try {
        const response = await fetch("https://random.dog/woof.json").then(res => res.json());
        dispatch({
            type: actions.GET_RANDOM_IMAGE_SUCCESS,
            payload: response.url
        });
    } catch (err) {
        dispatch({
            type: actions.GET_RANDOM_IMAGE_FAIL,
            payload: err
        });
    } finally {
        dispatch({ type: actions.GET_RANDOM_IMAGE_END });
    }
};

export const addFavouriteImage = (imageData) => async dispatch => {
    dispatch({
        type: actions.ADD_FAVOURITE_IMAGE,
        payload: imageData
    });
}

export const deleteFavouriteImage = (imageData) => async dispatch => {
    dispatch({
        type: actions.DELETE_FAVOURITE_IMAGE,
        payload: imageData
    });
}

export const getFavouriteImages = () => async dispatch => {
    dispatch({
        type: actions.GET_FAVOURITE_IMAGES
    });
}

export const setAlert = (message, show) => async dispatch => {
    dispatch({
        type: actions.SET_ALERT,
        payload: {message,show}
    });
}
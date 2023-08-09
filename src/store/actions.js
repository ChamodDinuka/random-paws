import * as actions from './actionTypes';
const axios = require('axios');

export const getRandomImage = () => async dispatch => {
    dispatch({ type: actions.GET_RANDOM_IMAGE_START });
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        let response = await axios.get('https://random.dog/woof.json', config);
        dispatch({ 
            type: actions.GET_RANDOM_IMAGE_SUCCESS,
            payload: response
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
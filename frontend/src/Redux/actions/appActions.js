import { 
    APP_DETAILS_FAIL, 
    APP_DETAILS_REQUEST, 
    APP_DETAILS_SUCCESS, 
    APP_LIST_FAIL, 
    APP_LIST_REQUEST, 
    APP_LIST_SUCCESS 
} from "../constants/appConstants";
import axios from 'axios';

export const listApps = () => async (dispatch) => {
    dispatch({
        type: APP_LIST_REQUEST
    });
    try {
        const { data } = await axios.get('/api/apps');
        // console.log(data);
        dispatch({
            type: APP_LIST_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: APP_LIST_FAIL,
            payload: err.message
        })
    }
};

export const detailApp = (appId) => async (dispatch) => {
    dispatch({
        type: APP_DETAILS_REQUEST
    });
    try {
        const { data } = await axios.get(`/api/apps/${appId}`);
        dispatch({
            type: APP_DETAILS_SUCCESS,
            payload: data
        });
    } catch (err) {
        // console.log(err);
        dispatch({
            type: APP_DETAILS_FAIL,
            payload: 
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
        });
    };
};
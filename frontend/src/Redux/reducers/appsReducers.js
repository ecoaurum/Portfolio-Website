import { APP_DETAILS_FAIL, APP_DETAILS_REQUEST, APP_DETAILS_SUCCESS, APP_LIST_FAIL, APP_LIST_REQUEST, APP_LIST_SUCCESS } from "../constants/appConstants";

export const appListReducer = (
    state = { loading: true, apps: [] },
    action
    ) => {
        switch (action.type) {
            case APP_LIST_REQUEST:
                return { loading: true };
            case APP_LIST_SUCCESS:
                return { loading: false, apps: action.payload };
            case APP_LIST_FAIL:
                return { loading: false, error: action.payload };                        
            default:
                return state;
        }
    };

export const appDetailReducer = (
    state = { loading: true, apps: {} },
    action
    ) => {
        switch (action.type) {
            case APP_DETAILS_REQUEST:
                return { loading: true };
            case APP_DETAILS_SUCCESS:
                return { loading: false, apps: action.payload };
            case APP_DETAILS_FAIL:
                return { loading: false, error: action.payload };                        
            default:
                return state;
        }
    };
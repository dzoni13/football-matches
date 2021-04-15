import FootballService from "../service/footballService";
export const MENU_ITEMS_LOADED = "MENU_ITEMS_LOADED";
export const MENU_ITEMS_LOADING_FAIL = "MENU_ITEMS_LOADING_FAIL";

export const loadMenuItems = (year) => {
    return async (dispatch) => {
        try {
            FootballService.getProducts(year).then((res) => {
                dispatch({
                    type: MENU_ITEMS_LOADED,
                    payload: res.data,
                });
            });
        } catch (err) {
            console.log("ERROR:", err);
            dispatch({
                type: MENU_ITEMS_LOADING_FAIL,
            });
        }
    };
};



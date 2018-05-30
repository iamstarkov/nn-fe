// src/actions/index.js
import { api } from '../utils';


// UI
export const updateItemsToShow = value => ({
    type: 'UPDATE_ITEMS_TO_SHOW',
    payload: value,
});

export const toggleTheme = () => ({
    type: 'TOGGLE_THEME',
});


// DATA
// DATA ITEMS IDS
export const requestItemIdsStart = () => ({
    type: 'REQUEST_ITEMS_IDS_START',
});
export const requestItemIdsSuccess = itemIds => ({
    type: 'REQUEST_ITEMS_IDS_SUCCESS',
    payload: itemIds,
});
export const requestItemIdsFail = err => ({
    type: 'REQUEST_ITEMS_IDS_FAIL',
    payload: err,
});

// DATA ITEM
export const requestItemStart = id => ({
    type: 'REQUEST_ITEM_START',
    payload: id,
});
export const requestItemSuccess = itemObj => ({
    type: 'REQUEST_ITEM_SUCCESS',
    payload: itemObj,
});
export const requestItemFail = (id, err) => ({
    type: 'REQUEST_ITEM_FAIL',
    payload: { id, err },
});

// FETCHES
export const fetchItemIds = dispatch => () => {
    dispatch(requestItemIdsStart());
    api
        .getItemIds()
        .then(itemIds => {
            dispatch(requestItemIdsSuccess(itemIds));
        })
        .catch(err => {
            dispatch(requestItemIdsFail(err));
        });
};

export const fetchItem = dispatch => id => {
    dispatch(requestItemStart(id));
    api
        .getItem(id)
        .then(item => {
            dispatch(requestItemSuccess(item));
        })
        .catch(err => {
            dispatch(requestItemFail(id, err));
        });
};

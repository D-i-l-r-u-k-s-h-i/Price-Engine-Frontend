import {createAction} from 'redux-actions'

export const GET_ALL_PRODUCTS="GET_ALL_PRODUCTS";
export const SUCCESS_GET_ALL_PRODUCTS="SUCCESS_GET_ALL_PRODUCTS";
export const FAIL_GET_ALL_PRODUCTS="FAIL_GET_ALL_PRODUCTS";

export default {
    getAllProducts:createAction(GET_ALL_PRODUCTS),
    getAllProductsSuccess:createAction(SUCCESS_GET_ALL_PRODUCTS),
    getAllProductsFail:createAction(FAIL_GET_ALL_PRODUCTS)

}
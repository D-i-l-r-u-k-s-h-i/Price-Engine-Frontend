import {createAction} from 'redux-actions'

export const GET_PRODUCT_PRICES="GET_PRODUCT_PRICES";
export const SUCCESS_GET_PRODUCT_PRICES="SUCCESS_GET_PRODUCT_PRICES";
export const FAIL_GET_PRODUCT_PRICES="FAIL_GET_PRODUCT_PRICES";

export default {
    getProductPrices:createAction(GET_PRODUCT_PRICES),
    getProductPricesSuccess:createAction(SUCCESS_GET_PRODUCT_PRICES),
    getProductPricesFail:createAction(FAIL_GET_PRODUCT_PRICES)

}
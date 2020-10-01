import {createAction} from 'redux-actions'

export const CALC_PRODUCT_PRICE="CALC_PRODUCT_PRICE";
export const SUCCESS_CALC_PRODUCT_PRICE="SUCCESS_CALC_PRODUCT_PRICE";
export const FAIL_CALC_PRODUCT_PRICE="FAIL_CALC_PRODUCT_PRICE";

export default {
    calcProductPrice:createAction(CALC_PRODUCT_PRICE),
    calcProductPriceSuccess:createAction(SUCCESS_CALC_PRODUCT_PRICE),
    calcProductPriceFail:createAction(FAIL_CALC_PRODUCT_PRICE)

}
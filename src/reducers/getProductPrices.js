import {getProductPricesTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    productData:null
}

export default handleActions({
    [getProductPricesTypes.GET_PRODUCT_PRICES]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getProductPricesTypes.SUCCESS_GET_PRODUCT_PRICES]:(state,{payload})=>({
        ...state,loading:false,productData:payload
    }),
    [getProductPricesTypes.FAIL_GET_PRODUCT_PRICES]:(state,{payload})=>({
        ...state,loading:false,productData:null
    }),
},initialState)
import {getProductPricesTypes,getAllProductsTypes,calcProductPriceTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    productData:null,
    priceData:null}

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
    [getAllProductsTypes.GET_ALL_PRODUCTS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getAllProductsTypes.SUCCESS_GET_ALL_PRODUCTS]:(state,{payload})=>({
        ...state,loading:false,productData:payload
    }),
    [getAllProductsTypes.FAIL_GET_ALL_PRODUCTS]:(state,{payload})=>({
        ...state,loading:false,productData:null
    }),
    [calcProductPriceTypes.CALC_PRODUCT_PRICE]:(state,{payload})=>({
        ...state,loading:true
    }),
    [calcProductPriceTypes.SUCCESS_CALC_PRODUCT_PRICE]:(state,{payload})=>({
        ...state,loading:false,priceData:payload
    }),
    [calcProductPriceTypes.FAIL_CALC_PRODUCT_PRICE]:(state,{payload})=>({
        ...state,loading:false,priceData:null
    }),
},initialState)
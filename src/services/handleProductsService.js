import {createLogic} from 'redux-logic'

import {getProductPricesActions,getProductPricesTypes,
        getAllProductsActions, getAllProductsTypes,
        calcProductPriceActions,calcProductPriceTypes} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const getproductprices=createLogic({
    type:getProductPricesTypes.GET_PRODUCT_PRICES,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.get(endPoints.GET_PRODUCT_PRICES)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(getProductPricesActions.getProductPricesSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to get Product prices";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getProductPricesActions.getProductPricesFail(errormsg))
            }).then(()=>done());
    }
})

const getallproducts=createLogic({
    type:getAllProductsTypes.GET_ALL_PRODUCTS,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.get(endPoints.GET_ALL_PRODUCTS)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(getAllProductsActions.getAllProductsSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to get all Products";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getAllProductsActions.getAllProductsFail(errormsg))
            }).then(()=>done());
    }
})

const calcproduct=createLogic({
    type:calcProductPriceTypes.CALC_PRODUCT_PRICE,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            productId:action.payload.productId,
            quantity:action.payload.qty,
            quantityType:action.payload.type
        }

        HTTPclient.post(endPoints.CALC_PRODUCT_PRICE,obj)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(calcProductPriceActions.calcProductPriceSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to calculate product price";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(calcProductPriceActions.calcProductPriceFail(errormsg))
            }).then(()=>done());
    }
})

export default [
    getproductprices,
    getallproducts,
    calcproduct
]
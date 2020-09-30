import {createLogic} from 'redux-logic'

import {getProductPricesActions,getProductPricesTypes} from "../actions"

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


export default [
    getproductprices
]
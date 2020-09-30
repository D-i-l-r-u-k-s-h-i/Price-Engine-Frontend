import { combineReducers } from "redux"
import getProductPrices from './getProductPrices'

const rootReducer=combineReducers({
    GetProductPrices:getProductPrices,

})

export default rootReducer;
import * as GetProductPrices from './getProductPrices'
import * as GetAllProducts from './getAllProducts'
import * as CalcProductPrice from './calcProductPrice'

export{
    GetProductPrices as getProductPricesTypes
}

export{
    GetAllProducts as getAllProductsTypes
}

export{
    CalcProductPrice as calcProductPriceTypes
}

export const getProductPricesActions=GetProductPrices.default

export const getAllProductsActions=GetAllProducts.default

export const calcProductPriceActions=CalcProductPrice.default

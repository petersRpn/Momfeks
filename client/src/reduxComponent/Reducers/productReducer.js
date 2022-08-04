import { PRODUCT_DETAILS_FAILED, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, 
PRODUCT_LIST_SUCCESS } from "../Constants/productConstant";

export const productListReducer = (state={loading: false, products: [], error:false}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true}
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case PRODUCT_LIST_FAILED:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
export const productDetailsReducer = (state={loading: true, product: {}, error:false}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAILED:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
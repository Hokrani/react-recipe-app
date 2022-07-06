import {
    SET_FETCH_DATA,
    SET_FETCH_DATA_SUCCESS,
    GET_CATEGORY_SUCCESS,
    GET_SUBCATEGORY_SUCCESS,
    GET_RECEIPETYPE_SUCCESS,
    SET_CATEGORY_TYPE,
} from '../constant';

const initial = {
    loadingData: false,
    categoryType: '',
    categories: '',
    subCategory: '',
    receipeType: '',
}
const receipeReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_FETCH_DATA:
            return { ...state, loadingData: true }
        case SET_FETCH_DATA_SUCCESS:
            return { ...state, loadingData: false }
        case SET_CATEGORY_TYPE:
            return { ...state, categoryType: action.categoryType }
        case GET_CATEGORY_SUCCESS:
            return { ...state, loadingData: false, categories: action.category, receipeType: '' }
        case GET_SUBCATEGORY_SUCCESS:
            return { ...state, loadingData: false, categories: '', subCategory: action.subcategory, receipeType: '' }
        case GET_RECEIPETYPE_SUCCESS:
            return { ...state, loadingData: false, categories: '', receipeType: action.receipeType }
        default:
            return state;
    }

}

export default receipeReducer;
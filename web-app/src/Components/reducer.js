import {SET_FETCH_DATA,
        SET_FETCH_DATA_SUCCESS,
        FETCH_INITIAL_DATA,
         GET_CATEGORY_SUCCESS,
         GET_SUBCATEGORY_SUCCESS,
         GET_MEALTYPE_SUCCESS
} from '../constant';

const initial={ 
    loadingData:false, 
    categories:'',
    subCategory:'',
    mealType:'',
    }
const receipeReducer = (state = initial, action) => {
    switch (action.type) {
        case FETCH_INITIAL_DATA:
            console.log("In FETCH_INITIAL_DATA ")
            return{...state, categories:action.category}
        case SET_FETCH_DATA:
            return{...state, loadingData:true}
        case SET_FETCH_DATA_SUCCESS:
                return{...state, loadingData:false}
        case GET_CATEGORY_SUCCESS:
            return{...state, loadingData:false,categories:action.category,subCategory:'',mealType:''}
        case GET_SUBCATEGORY_SUCCESS:
                return{...state,loadingData:false, categories:'',subCategory:action.subcategory,mealType:''}
        case GET_MEALTYPE_SUCCESS:
            return{...state, loadingData:false,categories:'',subCategory:'',mealType:action.mealType}
        default:
            return state;
    }

}

export default receipeReducer;
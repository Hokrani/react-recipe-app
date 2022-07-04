import { INITIAL,
    GET_CATEGORY_FETCH,
    GET_SUBCATEGORY_FETCH,
    GET_MEALTYPE_FETCH,
    SET_SUBCATEGORY_TYPE,
} from '../constant';

export const setInitialData=()=>({
    type:INITIAL
});

export const getCategoryFetch=()=>({
    type:GET_CATEGORY_FETCH 
});

export const getSubCategoryFetch=()=>({
    type:GET_SUBCATEGORY_FETCH,    
});

export const getMealTypeFetch=(mealType)=>({
    type:GET_MEALTYPE_FETCH,
    mealType
});

export const setSubCategory=(categoryType)=>({
    type:SET_SUBCATEGORY_TYPE,
    categoryType
});


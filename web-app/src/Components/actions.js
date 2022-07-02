import { INITIAL,
    GET_CATEGORY_FETCH,
    GET_SUBCATEGORY_FETCH,
    GET_MEALTYPE_FETCH
} from '../constant';

export const setInitialData=()=>({
    type:INITIAL
});

export const getCategoryFetch=()=>({
    type:GET_CATEGORY_FETCH 
});

export const getSubCategoryFetch=(subCategoryType)=>({
    type:GET_SUBCATEGORY_FETCH,
    subCategoryType
});

export const getMealTypeFetch=(mealType)=>({
    type:GET_MEALTYPE_FETCH,
    mealType
});

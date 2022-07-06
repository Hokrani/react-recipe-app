import { 
    GET_CATEGORY_FETCH,
    GET_SUBCATEGORY_FETCH,
    GET_RECEIPETYPE_FETCH,
    SET_SUBCATEGORY_TYPE,
} from '../constant';


export const getCategoryFetch=()=>({
    type:GET_CATEGORY_FETCH 
});

export const getSubCategoryFetch=()=>({
    type:GET_SUBCATEGORY_FETCH,    
});

export const getReceipeTypeFetch=(receipeType)=>({
    type:GET_RECEIPETYPE_FETCH,
    receipeType
});

export const setSubCategory=(categoryType)=>({
    type:SET_SUBCATEGORY_TYPE,
    categoryType
});


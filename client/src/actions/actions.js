import { 
    GET_CATEGORY_FETCH,
    GET_SUBCATEGORY_FETCH,
    GET_RECEIPETYPE_FETCH,
    SET_SUBCATEGORY_TYPE,
} from '../constant';

/**
 * Get all catageory receipe data from  API.
 * @param :null
 */
export const getCategoryFetch=()=>({
    type:GET_CATEGORY_FETCH 
});

/**
 * Get all sub-category receipe data from  API.
 * @param :null
 */
export const getSubCategoryFetch=()=>({
    type:GET_SUBCATEGORY_FETCH,    
});

/**
 * Get all receipe content data from  API.
 * @param :(receipeType): Type of receipe content.
 */
export const getReceipeTypeFetch=(receipeType)=>({
    type:GET_RECEIPETYPE_FETCH,
    receipeType
});


/**
 * Set category type  in the global storage.
 * @param :(categoryType): Type of category.
 */
export const setSubCategory=(categoryType)=>({
    type:SET_SUBCATEGORY_TYPE,
    categoryType
});


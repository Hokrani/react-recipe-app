import { delay, put, race, select, takeEvery, takeLatest } from 'redux-saga/effects';
import {
    SET_FETCH_DATA,
    SET_FETCH_DATA_SUCCESS,
    GET_CATEGORY_FETCH,
    GET_CATEGORY_SUCCESS,
    SET_CATEGORY_TYPE,
    SET_SUBCATEGORY_TYPE,
    GET_SUBCATEGORY_FETCH,
    GET_SUBCATEGORY_SUCCESS,
    GET_RECEIPETYPE_FETCH,
    GET_RECEIPETYPE_SUCCESS,
    CATEGORY_URL,
    SUBCATEGORY_URL,
    RECEIPETYPE_URL
} from '../constant';
import default_menu from '../data/default_menu.json'
import default_subMenu from '../data/default_subMenu.json';
import default_receipe from '../data/default_receipe.json';


function* getCategoryFetch() {
    yield put({ type: SET_FETCH_DATA });
    const { response } = yield race({
        response: fetch(CATEGORY_URL)
            .then((res) => res.json())
            .then((json) => json.categories)
            .catch(err => console.log("Error while fetching the category data")),
        timeout: delay(1000),
    })
    // const category = (response === undefined || response === null || response.length === 0)
    //     ? default_menu.categories
    //     : response;
    const category=response;
    yield put({ type: GET_CATEGORY_SUCCESS, category })
}

function* getSubCategoryFetch() {
    const selectState = yield select();
    yield put({ type: SET_FETCH_DATA });
    const subCategoryType = selectState.receipeReducer.categoryType;
    if (subCategoryType) {
        const url = SUBCATEGORY_URL + subCategoryType;
        const { response } = yield race({
            response: fetch(url)
                .then((res) => res.json())
                .then((json) => json.meals)
                .catch(err => console.log("Error while fetching the sub-category data")),
            timeout: delay(1000),
        })
        // // const subcategory = (response === undefined || response === null || response.length === 0)
        //     ? default_subMenu.meals
        //     : response;
        const subcategory =response;
        console.log("subcategory :"+subcategory)
        yield put({ type: GET_SUBCATEGORY_SUCCESS, subcategory });        
    } else {
        yield put({ type: SET_FETCH_DATA_SUCCESS });
    }
}


function* getReceipeTypeFetch(action) {
    yield put({ type: SET_FETCH_DATA })
    const url = RECEIPETYPE_URL + action.receipeType;
    const { response } = yield race({
        response: fetch(url)
            .then((res) => res.json())
            .then((json) => json.meals[0])
            .catch(err => console.log("Error while fetching the sub-category data")),
        timeout: delay(1000),
    })
    
    // const receipeType = (response === undefined || response === null || response.length === 0)
    //     ? default_receipe.meals[0]
    //     : response;

    const receipeType=response;
    yield put({ type: GET_RECEIPETYPE_SUCCESS, receipeType })
   
}

function* setCategoryType(action) {
    let categoryType = action.categoryType;
    yield put({ type: SET_CATEGORY_TYPE, categoryType })
    console.log("categoryType :"+categoryType)
}
function* Saga() {
    yield takeLatest(GET_CATEGORY_FETCH, getCategoryFetch);
    yield takeLatest(GET_SUBCATEGORY_FETCH, getSubCategoryFetch);
    yield takeLatest(GET_RECEIPETYPE_FETCH, getReceipeTypeFetch);
    yield takeLatest(SET_SUBCATEGORY_TYPE, setCategoryType);
}

export default Saga;
import { delay, put, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
    INITIAL,
    SET_FETCH_DATA,
    SET_FETCH_DATA_SUCCESS,
    GET_CATEGORY_FETCH,
    GET_CATEGORY_SUCCESS,
    GET_SUBCATEGORY_FETCH,
    GET_SUBCATEGORY_SUCCESS,
    GET_MEALTYPE_FETCH,
    GET_MEALTYPE_SUCCESS,
    CATEGORY_URL,
    SUBCATEGORY_URL,
    MEALTYPE_URL
} from '../constant';

function* workInitialDataFetch() {
    yield put({ type: SET_FETCH_DATA })
    const { category, timeout } = yield race({
        category: fetch(CATEGORY_URL)
            .then((res) => res.json())
            .then((json) => json.categories)
            .catch(err => console.log("Error while fetching the sub-category data")),
        timeout: delay(1000),
    })
    yield put({ type: SET_FETCH_DATA_SUCCESS })
}

function* getCategoryFetch() {
    // alert(CATEGORY_URL)
    yield put({ type: SET_FETCH_DATA });    
    const { category, timeout } = yield race({
        category: fetch(CATEGORY_URL)
            .then((res) => res.json())
            .then((json) => json.categories)
            .catch(err => console.log("Error while fetching the sub-category data")),
        timeout: delay(1000),
    })
    yield put({ type: GET_CATEGORY_SUCCESS, category })
}

function* getSubCategoryFetch(action) {

    yield put({ type: SET_FETCH_DATA });
    const url = SUBCATEGORY_URL + action.subCategoryType;
    const { subcategory, timeout } = yield race({
        subcategory: fetch(url)
            .then((res) => res.json())
            .then((json) => json.meals)
            .catch(err => console.log("Error while fetching the sub-category data")),
        timeout: delay(1000),
    })
    yield put({ type: GET_SUBCATEGORY_SUCCESS, subcategory });
}


function* getMealTypeFetch(action) {
    yield put({ type: SET_FETCH_DATA })
    const url = MEALTYPE_URL + action.mealType;
    const { mealType, timeout } = yield race({
        mealType: fetch(url)
            .then((res) => res.json())
            .then((json) => json.meals[0])
            .catch(err => console.log("Error while fetching the sub-category data")),
        timeout: delay(1000),
    })
    yield put({ type: GET_MEALTYPE_SUCCESS, mealType })
}
function* Saga() {
    yield takeEvery(INITIAL, workInitialDataFetch)
    yield takeLatest(GET_CATEGORY_FETCH, getCategoryFetch);
    yield takeLatest(GET_SUBCATEGORY_FETCH, getSubCategoryFetch);
    yield takeLatest(GET_MEALTYPE_FETCH, getMealTypeFetch);
}

export default Saga;
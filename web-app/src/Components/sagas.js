import { delay, put, race, select, takeEvery, takeLatest } from 'redux-saga/effects';
import {
    INITIAL,
    SET_FETCH_DATA,
    SET_FETCH_DATA_SUCCESS,
    GET_CATEGORY_FETCH,
    GET_CATEGORY_SUCCESS,
    SET_CATEGORY_TYPE,
    SET_SUBCATEGORY_TYPE,
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
    yield put({ type: GET_CATEGORY_SUCCESS, category })
}

function* getCategoryFetch() {
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

function* getSubCategoryFetch() {
    const selectState = yield select();
    yield put({ type: SET_FETCH_DATA });
    const subCategoryType = selectState.receipeReducer.categoryType;
    if (subCategoryType) {
        const url = SUBCATEGORY_URL + subCategoryType;
        const { subcategory, timeout } = yield race({
            subcategory: fetch(url)
                .then((res) => res.json())
                .then((json) => json.meals)
                .catch(err => console.log("Error while fetching the sub-category data")),
            timeout: delay(1000),
        })
        yield put({ type: GET_SUBCATEGORY_SUCCESS, subcategory });
    }else{
        yield put({ type: SET_FETCH_DATA_SUCCESS });
    }
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

function* setCategoryType(action) {
    let categoryType = action.categoryType;
    yield put({ type: SET_CATEGORY_TYPE, categoryType })
}
function* Saga() {
    yield takeEvery(INITIAL, workInitialDataFetch)
    yield takeEvery(GET_CATEGORY_FETCH, getCategoryFetch);
    yield takeEvery(GET_SUBCATEGORY_FETCH, getSubCategoryFetch);
    yield takeEvery(GET_MEALTYPE_FETCH, getMealTypeFetch);
    yield takeEvery(SET_SUBCATEGORY_TYPE, setCategoryType);
}

export default Saga;
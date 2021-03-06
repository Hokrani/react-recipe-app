import {  put, race, select, fork,take,cancel } from 'redux-saga/effects';
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

/**
 * To fetch all category list from API and store in the redux store.
 * @param null.
 */
function* getCategoryFetch() {
    yield put({ type: SET_FETCH_DATA });
    const { response } = yield race({
        response: fetch(CATEGORY_URL)
            .then((res) => res.json())
            .then((json) => json.categories)
            .catch(err => console.log("Error while fetching the category data")),
    })
    const category = (response === undefined || response === null || response.length === 0)
        ? default_menu.categories
        : response;
    yield put({ type: GET_CATEGORY_SUCCESS, category })
}

/**
 * To fetch all sub-category list from API based on sub-category type selected
 *  and store in the redux store.
 * @param null.
 */
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
        })
        const subcategory = (response === undefined || response === null || response.length === 0)
            ? default_subMenu.meals
            : response;
        yield put({ type: GET_SUBCATEGORY_SUCCESS, subcategory }); 
    } else {
        yield put({ type: SET_FETCH_DATA_SUCCESS });
    }
}

/**
 * To fetch receipe contents from API and store in the redux store.
 * @param null.
 */
function* getReceipeTypeFetch(action) {
    yield put({ type: SET_FETCH_DATA })
    const url = RECEIPETYPE_URL + action.receipeType;
    const { response } = yield race({
        response: fetch(url)
            .then((res) => res.json())
            .then((json) => json.meals[0])
            .catch(err => console.log("Error while fetching the sub-category data")),
    })
    
    const receipeType = (response === undefined || response === null || response.length === 0)
        ? default_receipe.meals[0]
        : response;
    yield put({ type: GET_RECEIPETYPE_SUCCESS, receipeType })
}

/**
 * To store category type in the redux store.
 * @param {categoryType}  type of sub-category.
 */
function* setCategoryType(action) {
    let categoryType = action.categoryType;
    yield put({ type: SET_CATEGORY_TYPE, categoryType }) 
}

const takeLatest = (patternOrChannel, saga, ...args) => fork(function*() {
    let lastTask
    while (true) {
      const action = yield take(patternOrChannel)
      if (lastTask) {
        yield cancel(lastTask) // cancel is no-op if the task has already terminated
      }
      lastTask = yield fork(saga, ...args.concat(action))
    }
  })

function* Saga() {
    yield takeLatest(GET_CATEGORY_FETCH, getCategoryFetch);
    yield takeLatest(GET_SUBCATEGORY_FETCH, getSubCategoryFetch);
    yield takeLatest(GET_RECEIPETYPE_FETCH, getReceipeTypeFetch);
    yield takeLatest(SET_SUBCATEGORY_TYPE, setCategoryType);
}

export default Saga;
import axios from 'axios';

const URL = "https://www.themealdb.com/api/json/v1/1"

export const getAllCategories = () => {
    const res= fetch(`${URL}/categories.php`)
    .then((res) => res.json())
    .then((json) => {
    console.log("Hokrani :"+json.categories.categories);
    return res;
})
}

export const getMealsByCategory = (category) => {
    return axios.get(`${URL}/filter.php?c=${category}`)
}

export const getRandomMeal = () => {
    return axios.get(`${URL}/random.php`)
}

export const getMealByName = (name) => {
    return axios.get(`${URL}/search.php?s=${name}`)
}

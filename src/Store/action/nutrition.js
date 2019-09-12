import * as actionTypes from "./actionTypes";
import axios from "axios";

const initNutrition = data => {
  return {
    type: actionTypes.INIT_NUTRITION
  };
};
const nutritionSuccess = data => {
  return {
    type: actionTypes.FETCH_NUTRITION_SUCCESS,
    payload: { data }
  };
};
const nutritionFail = error => {
  return {
    type: actionTypes.FETCH_NUTRITION_FAIL,
    payload: { error }
  };
};
export const initNutritionAsync = params => {
  const ings = params ? params.i : "chicken";
  const query = params ? params.q : "health";
  return (dispatch, getState) => {
    //TODO# HERE MAKE ASYNC CALLS.
    dispatch(initNutrition());
    axios({
      method: "GET",
      url: "https://recipe-puppy.p.rapidapi.com",
      params: {
        p: 1,
        i: ings,
        q: query
      },
      headers: {
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
        "x-rapidapi-key": "746a1a9cfdmshdbc2b867d806313p1e07dfjsn0db7de901c8d"
      }
    })
      .then(response => {
        const { results } = response.data;
        const dataWithId = results.map((obj, index) => {
          const id = obj["title"]
            .trim()
            .split(" ")
            .join("");
          return {
            id,
            ...obj
          };
        });
        dispatch(nutritionSuccess(dataWithId));
      })
      .catch(err => {
        dispatch(nutritionFail(err));
      });
  };
};

export const selectedNutrition = id => {
  return {
    type: actionTypes.SELECTED_NUTRITION,
    payload: {
      id
    }
  };
};
export const deselectedNutrition = id => {
  return {
    type: actionTypes.DE_SELECTED_NUTRITION,
    payload: {
      id
    }
  };
};
export const clearSelectedNutrition = () => {
  return {
    type: actionTypes.CLEAR_SELECTED_NUTRITION
  };
};

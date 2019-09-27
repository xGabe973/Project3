import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../../asset/utility";
const getSelectedFromlocalStorage = JSON.parse(
  localStorage.getItem("nutrition")
);
const initialState = {
  loaded: false,
  loading: false,
  error: null,
  data: null,
  selected: getSelectedFromlocalStorage ? getSelectedFromlocalStorage : []
};

// this is main reducer.
const nutritionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.INIT_NUTRITION:
      return initNutrition(state, payload);

    case actionTypes.FETCH_NUTRITION_SUCCESS:
      return nutritionSuccess(state, payload);

    case actionTypes.FETCH_NUTRITION_FAIL:
      return nutritionFail(state, payload);

    case actionTypes.SELECTED_NUTRITION:
      return selectedNutrition(state, payload);
    case actionTypes.DE_SELECTED_NUTRITION:
      return deSelectedNutrition(state, payload);
    case actionTypes.CLEAR_SELECTED_NUTRITION:
      return clearSelectedNutrition(state, payload);

    default:
      return state;
  }
};
const clearSelectedNutrition = (state, payload) => {
  window.localStorage.removeItem("nutrition");
  return updateObject(state, {
    selected: []
  });
};

/* defined cases */

// Case createPost
const initNutrition = (state, payload) => {
  return updateObject(state, {
    loading: true
  });
};
const nutritionSuccess = (state, payload) => {
  return updateObject(state, {
    loading: false,
    loaded: true,
    data: payload.data
  });
};
const nutritionFail = (state, payload) => {
  return updateObject(state, {
    loaded: false,
    loading: false,
    error: payload.error
  });
};

const selectedNutrition = (state, payload) => {
  let localStorageNutrition = JSON.parse(localStorage.getItem("nutrition"));
  if (!localStorageNutrition) {
    window.localStorage.setItem("nutrition", JSON.stringify([]));
    localStorageNutrition = JSON.parse(localStorage.getItem("nutrition"));
  }

  const foundNutrtion = state.data.find(obj => {
    return obj.id === payload.id;
  });

  localStorageNutrition.push(foundNutrtion);
  window.localStorage.setItem(
    "nutrition",
    JSON.stringify(localStorageNutrition)
  );
  const selected = localStorageNutrition;
  return updateObject(state, {
    selected: selected
  });
};
const deSelectedNutrition = (state, payload) => {
  const localStorageNutrition = JSON.parse(localStorage.getItem("nutrition"));
  const updateLocalStorageNutrition = localStorageNutrition.filter(element => {
    return payload.id !== element.id;
  });
  window.localStorage.setItem(
    "nutrition",
    JSON.stringify(updateLocalStorageNutrition)
  );

  // const selected = updateLocalStorageNutrition;
  return updateObject(state, {
    selected: updateLocalStorageNutrition
  });
};
export default nutritionReducer;

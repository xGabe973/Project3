import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../../../src/asset/utility";
const getSelectedFromlocalStorage = JSON.parse(
  localStorage.getItem("workouts")
);
const initialState = {
  loaded: false,
  loading: false,
  error: null,
  data: null,
  selected: getSelectedFromlocalStorage ? getSelectedFromlocalStorage : []
};

//TODO: this is main reducer.
const workoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.INIT_WORKOUT:
      return initWorkout(state, payload);

    case actionTypes.FETCH_WORKOUT_SUCCESS:
      return workoutSuccess(state, payload);

    case actionTypes.FETCH_WORKOUT_FAIL:
      return workoutFail(state, payload);

    case actionTypes.SELECTED_WORKOUT:
      return selectedWorkout(state, payload);
    case actionTypes.DE_SELECTED_WORKOUT:
      return deSelectedWorkout(state, payload);
    case actionTypes.CLEAR_SELECTED_WORKOUTS:
      return clearSelectedWorkout(state, payload);

    default:
      return state;
  }
};

/*--- CASES ARE HERE DEFINED */

// Case createPost
const clearSelectedWorkout = (state, payload) => {
  window.localStorage.removeItem("workouts");
  return updateObject(state, {
    selected: []
  });
};
const initWorkout = (state, payload) => {
  return updateObject(state, {
    loading: true
  });
};
const workoutSuccess = (state, payload) => {
  return updateObject(state, {
    loading: false,
    loaded: true,
    data: payload.data
  });
};
const workoutFail = (state, payload) => {
  return updateObject(state, {
    loaded: false,
    loading: false,
    error: payload.error
  });
};

const selectedWorkout = (state, payload) => {
  let localStorageWorkout = JSON.parse(localStorage.getItem("workouts"));

  if (!localStorageWorkout) {
    window.localStorage.setItem("workouts", JSON.stringify([]));
    localStorageWorkout = JSON.parse(localStorage.getItem("workouts"));
  }

  const foundNutrtion = state.data.find(obj => {
    return obj.id === payload.id;
  });

  localStorageWorkout.push(foundNutrtion);
  window.localStorage.setItem("workouts", JSON.stringify(localStorageWorkout));
  return updateObject(state, {
    selected: localStorageWorkout
  });
};
const deSelectedWorkout = (state, payload) => {
  const localStorageWorkout = JSON.parse(localStorage.getItem("workouts"));
  const updateLocalStorageWorkout = localStorageWorkout.filter(element => {
    return payload.id !== element.id;
  });
  window.localStorage.setItem(
    "workouts",
    JSON.stringify(updateLocalStorageWorkout)
  );

  return updateObject(state, {
    selected: updateLocalStorageWorkout
  });
};
export default workoutReducer;

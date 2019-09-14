import * as actionTypes from "./actionTypes";
import * as d3 from "d3";
import csvFile from "../../asset/workout-data.csv";

const initWorkout = () => {
  return {
    type: actionTypes.INIT_WORKOUT
  };
};
const workoutSuccess = data => {
  return {
    type: actionTypes.FETCH_WORKOUT_SUCCESS,
    payload: { data }
  };
};
const workoutFail = error => {
  return {
    type: actionTypes.FETCH_WORKOUT_FAIL,
    payload: { error }
  };
};
export const initWorkoutAsync = () => {
  return (dispatch, getState) => {
    //TODO# HERE MAKE ASYNC CALLS.
    dispatch(initWorkout());
    d3.csv(csvFile)
      .then(data => {
        const dataWithId = data.map((obj, index) => {
          const id = obj["Workout"]
            .trim()
            .split(" ")
            .join("");
          return {
            id,
            ...obj
          };
        });
        dispatch(workoutSuccess(dataWithId));
      })
      .catch(err => {
        dispatch(workoutFail(err));
      });
  };
};

export const selectedWorkout = id => {
  return {
    type: actionTypes.SELECTED_WORKOUT,
    payload: {
      id
    }
  };
};
export const deselectedWorkout = id => {
  return {
    type: actionTypes.DE_SELECTED_WORKOUT,
    payload: {
      id
    }
  };
};

export const clearSelectedWorkouts = () => {
  return {
    type: actionTypes.CLEAR_SELECTED_WORKOUTS
  };
};

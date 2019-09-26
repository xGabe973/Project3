import { combineReducers } from "redux";

import workout from "./workout";
import nutrition from "./nutrition";

const rootReducer = combineReducers({
  workoutReducer: workout,
  nutritionReducer: nutrition
});

export default rootReducer;

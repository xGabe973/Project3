import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import rootReducer from "./reducer/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//#.General Thunk middleware provide two arguments in returning function .
//#.We can also pass some ewxtra arguments by property
//# reduxThunk.withExtraArgument({ ..args });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;

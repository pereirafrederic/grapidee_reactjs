import { combineReducers } from "redux";

//element
import ideeReducer from "./ideeReducer";
import grappeReducer from "./grappeReducer";

//asoo
import assoIdeeIdeeReducer from "./assoIdeeIdeeReducer";
import assoGrappeGrappeReducer from "./assoGrappeGrappeReducer";
import assoIdeeGrappeReducer from "./assoIdeeGrappeReducer";

//
import assoReducer from "./assoReducer";

//load
import loadIdeeReducer from "./loadIdeeReducer";
import loadGrappeReducer from "./loadGrappeReducer";

export const reducers = combineReducers({
  loadIdeeReducer,
  loadGrappeReducer,
  ideeReducer,
  grappeReducer,
  assoIdeeIdeeReducer,
  assoGrappeGrappeReducer,
  assoIdeeGrappeReducer,
  assoReducer
});

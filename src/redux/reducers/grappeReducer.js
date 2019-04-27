import {
  POST_GRAPPE,
  PUT_GRAPPE,
  DELETE_GRAPPE
} from "../actions/GrappeAction";
import {
  NOT_STARTED,
  START,
  IN_PROGRESS,
  ENDED_SUCESS,
  ENDED_ERROR
} from "../loading";

const initialState = {
  grappe: {
    nom: "",
    description: ""
  },
  type: null,
  loading: NOT_STARTED
};

export default function grappeReducer(state = initialState, action) {
  switch (action.type) {
    //POST
    case POST_GRAPPE + START:
      return { ...state, loading: START, type: POST_GRAPPE };
    case POST_GRAPPE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: POST_GRAPPE };
    case POST_GRAPPE + ENDED_SUCESS:
      return {
        ...state,

        loading: ENDED_SUCESS,
        type: POST_GRAPPE,
        grappe: { ...action.grappe }
      };
    case POST_GRAPPE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: POST_GRAPPE };

    //PUT
    case PUT_GRAPPE + START:
      return { ...state, loading: START, type: PUT_GRAPPE };
    case PUT_GRAPPE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: PUT_GRAPPE };
    case PUT_GRAPPE + ENDED_SUCESS:
      return {
        ...state,

        loading: ENDED_SUCESS,
        type: PUT_GRAPPE,
        grappe: { ...action.grappe }
      };
    case PUT_GRAPPE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: PUT_GRAPPE };

    //DELETE
    case DELETE_GRAPPE + START:
      return { ...state, loading: START, type: DELETE_GRAPPE };
    case DELETE_GRAPPE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: DELETE_GRAPPE };
    case DELETE_GRAPPE + ENDED_SUCESS:
      return {
        ...state,

        loading: ENDED_SUCESS,
        type: DELETE_GRAPPE,
        grappe: initialState.grappe
      };
    case DELETE_GRAPPE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: DELETE_GRAPPE };
    default:
      return state;
  }
}

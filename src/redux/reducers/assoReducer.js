import {
  POST_ASSO_IDEE,
  DELETE_ASSO_IDEE,
  RESET_ASSO_IDEE
} from "../actions/assoIdeeIdeeAction";

import {
  POST_ASSO_IDEE_GRAPPE,
  DELETE_ASSO_IDEEE_GRAPPE,
  RESET_ASSO_IDEEE_GRAPPE
} from "../actions/assoIdeeGrappeAction";

import {
  POST_ASSO_GRAPPE,
  DELETE_ASSO_GRAPPE,
  RESET_ASSO_GRAPPE
} from "../actions/assoGrappeGrappeAction";
import {
  NOT_STARTED,
  START,
  IN_PROGRESS,
  ENDED_SUCESS,
  ENDED_ERROR
} from "../loading";

const initialState = {
  assoIdee: null,
  assoIdeeGrappe: null,
  assoGrappe: null,
  type: null,
  loading: NOT_STARTED
};

export default function ideeReducer(state = initialState, action) {
  switch (action.type) {
    //POST_ASSO_IDEE
    case POST_ASSO_IDEE + START:
      return { ...state, loading: START, type: POST_ASSO_IDEE };
    case POST_ASSO_IDEE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: POST_ASSO_IDEE };
    case POST_ASSO_IDEE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: POST_ASSO_IDEE,
        assoIdee: { ...action.assoIdee }
      };

    case POST_ASSO_IDEE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: POST_ASSO_IDEE };

    //DELETE_ASSO_IDEE
    case DELETE_ASSO_IDEE + START:
      return { ...state, loading: START, type: DELETE_ASSO_IDEE };
    case DELETE_ASSO_IDEE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: DELETE_ASSO_IDEE };
    case DELETE_ASSO_IDEE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: DELETE_ASSO_IDEE,
        assoIdee: initialState.assoIdee
      };

    case DELETE_ASSO_IDEE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: DELETE_ASSO_IDEE };

    // RESET_ASSO_IDEE
    case RESET_ASSO_IDEE:
      return {
        ...state,
        loading: NOT_STARTED,
        type: null,
        assoIdee: initialState.assoIdee
      };

    //POST_ASSO_IDEE
    case POST_ASSO_GRAPPE + START:
      return { ...state, loading: START, type: POST_ASSO_GRAPPE };
    case POST_ASSO_GRAPPE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: POST_ASSO_GRAPPE };
    case POST_ASSO_GRAPPE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: POST_ASSO_GRAPPE,
        assoIdee: { ...action.assoIdee }
      };

    case POST_ASSO_GRAPPE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: POST_ASSO_GRAPPE };

    //DELETE_ASSO_GRAPPE
    case DELETE_ASSO_GRAPPE + START:
      return { ...state, loading: START, type: DELETE_ASSO_GRAPPE };
    case DELETE_ASSO_GRAPPE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: DELETE_ASSO_GRAPPE };
    case DELETE_ASSO_GRAPPE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: DELETE_ASSO_GRAPPE,
        assoGrappe: initialState.assoGrappe
      };

    case DELETE_ASSO_GRAPPE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: DELETE_ASSO_GRAPPE };

    // RESET_ASSO_IDEE
    case RESET_ASSO_GRAPPE:
      return {
        ...state,
        loading: NOT_STARTED,
        type: null,
        assoGrappe: initialState.assoGrappe
      };

    // POST_ASSO_IDEE_GRAPPE
    case POST_ASSO_IDEE_GRAPPE + START:
      return { ...state, loading: START, type: POST_ASSO_IDEE_GRAPPE };
    case POST_ASSO_IDEE_GRAPPE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: POST_ASSO_IDEE_GRAPPE };
    case POST_ASSO_IDEE_GRAPPE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: POST_ASSO_IDEE_GRAPPE,
        assoIdeeGrappe: { ...action.assoIdeeGrappe }
      };

    case POST_ASSO_IDEE_GRAPPE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: POST_ASSO_IDEE_GRAPPE };

    //DELETE
    case DELETE_ASSO_IDEEE_GRAPPE + START:
      return { ...state, loading: START, type: DELETE_ASSO_IDEEE_GRAPPE };
    case DELETE_ASSO_IDEEE_GRAPPE + IN_PROGRESS:
      return {
        ...state,
        loading: IN_PROGRESS,
        type: DELETE_ASSO_IDEEE_GRAPPE
      };

    case DELETE_ASSO_IDEEE_GRAPPE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: DELETE_ASSO_IDEEE_GRAPPE,
        assoIdeeGrappe: initialState.assoIdeeGrappe
      };

    case DELETE_ASSO_IDEEE_GRAPPE + ENDED_ERROR:
      return {
        ...state,
        loading: ENDED_ERROR,
        type: DELETE_ASSO_IDEEE_GRAPPE
      };

    //RESET
    case RESET_ASSO_IDEEE_GRAPPE:
      return {
        ...state,
        loading: NOT_STARTED,
        type: null,
        assoIdeeGrappe: initialState.assoIdeeGrappe
      };

    default:
      return state;
  }
}

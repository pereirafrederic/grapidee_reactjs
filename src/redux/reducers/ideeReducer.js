import { POST_IDEE, PUT_IDEE, DELETE_IDEE } from "../actions/IdeeAction";
import {
  NOT_STARTED,
  START,
  IN_PROGRESS,
  ENDED_SUCESS,
  ENDED_ERROR
} from "../loading";

const initialState = {
  idee: null,
  type: null,
  loading: NOT_STARTED
};

export default function ideeReducer(state = initialState, action) {
  switch (action.type) {
    //POST
    case POST_IDEE + START:
      return { ...state, loading: START, type: POST_IDEE };
    case POST_IDEE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: POST_IDEE };
    case POST_IDEE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: POST_IDEE,
        idee: { ...action.idee }
      };
    case POST_IDEE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: POST_IDEE };

    //PUT
    case PUT_IDEE + START:
      return { ...state, loading: START, type: PUT_IDEE };
    case PUT_IDEE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: PUT_IDEE };
    case PUT_IDEE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: PUT_IDEE,
        idee: { ...action.idee }
      };
    case PUT_IDEE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: PUT_IDEE };

    //DELETE
    case DELETE_IDEE + START:
      return { ...state, loading: START, type: DELETE_IDEE };
    case DELETE_IDEE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: DELETE_IDEE };
    case DELETE_IDEE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: DELETE_IDEE,
        idee: initialState.idee
      };
    case DELETE_IDEE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: DELETE_IDEE };
    default:
      return state;
  }
}

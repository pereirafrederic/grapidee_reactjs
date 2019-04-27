import {
  DEFINE_MASTER_ASSO_IDEE,
  ADD_ESCLAVE_ASSO_IDEE,
  REMOVE_ESCLAVE_ASSO_IDEE,
  DEFINE_GRAPPE_ASSO_IDEE,
  RESET_ASSO_IDEE
} from "../actions/assoIdeeIdeeAction";
import { NOT_STARTED, ENDED_SUCESS } from "../loading";

const initialState = {
  maitre: null,
  ideesEsclaves: [],
  grappe: null,
  type: null,
  loading: NOT_STARTED
};

export default function assoIdeeIdeeReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    //DEFINE_MASTER_ASSO_IDEE
    case DEFINE_MASTER_ASSO_IDEE:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: DEFINE_MASTER_ASSO_IDEE,
        maitre: action.maitre
      };

    //ADD_ESCLAVE_ASSO_IDEE
    case ADD_ESCLAVE_ASSO_IDEE:
      if (
        state.ideesEsclaves.includes(action.esclave) ||
        (state.maitre && state.maitre.id == action.esclave)
      )
        return {
          ...state
        };
      else
        return {
          ...state,
          loading: ENDED_SUCESS,
          type: ADD_ESCLAVE_ASSO_IDEE,
          ideesEsclaves: [...state.ideesEsclaves, action.esclave]
        };

    //REMOVE_ESCLAVE_ASSO_IDEE
    case REMOVE_ESCLAVE_ASSO_IDEE:
      const newTab = state.ideesEsclaves.filter(
        idee => idee.id !== action.esclave.id
      );

      return {
        ...state,
        loading: ENDED_SUCESS,
        type: REMOVE_ESCLAVE_ASSO_IDEE,
        ideesEsclaves: newTab
      };

    //DEFINE_GRAPPE_ASSO_IDEE
    case DEFINE_GRAPPE_ASSO_IDEE:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: DEFINE_GRAPPE_ASSO_IDEE,
        grappe: action.grappe
      };

    //RESET_ASSO_IDEE
    case RESET_ASSO_IDEE:
      return {
        ...initialState
      };
    default:
      return state;
  }
}

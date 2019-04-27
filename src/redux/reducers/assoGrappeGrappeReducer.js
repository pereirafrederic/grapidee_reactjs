import {
  DEFINE_MASTER_ASSO_GRAPPE,
  ADD_ESCLAVE_ASSO_GRAPPE,
  REMOVE_ESCLAVE_ASSO_GRAPPE
} from "../actions/assoGrappeGrappeAction";
import { NOT_STARTED, ENDED_SUCESS } from "../loading";

const initialState = {
  maitre: null,
  grappesEsclaves: [],
  type: null,
  loading: NOT_STARTED
};

export default function assoIdeeIdeeReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    //DEFINE_MASTER_ASSO_GRAPPE
    case DEFINE_MASTER_ASSO_GRAPPE:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: DEFINE_MASTER_ASSO_GRAPPE,
        maitre: action.maitre
      };

    //ADD_ESCLAVE_ASSO_IDEE
    case ADD_ESCLAVE_ASSO_GRAPPE:
      if (
        state.grappesEsclaves.includes(action.esclave) ||
        (state.maitre && state.maitre.id == action.esclave.id)
      )
        return {
          ...state
        };
      else
        return {
          ...state,

          loading: ENDED_SUCESS,
          type: ADD_ESCLAVE_ASSO_GRAPPE,
          grappesEsclaves: [...state.grappesEsclaves, action.esclave]
        };

    //REMOVE_ESCLAVE_ASSO_GRAPPE
    case REMOVE_ESCLAVE_ASSO_GRAPPE:
      const newTab = state.grappesEsclaves.filter(
        grappe => grappe.id !== action.esclave.id
      );

      return {
        ...state,

        loading: ENDED_SUCESS,
        type: REMOVE_ESCLAVE_ASSO_GRAPPE,
        grappesEsclaves: newTab
      };

    default:
      return state;
  }
}

import {
  DEFINE_IDEE_ASSO_IDEE_GRAPPE,
  ADD_GRAPPE_ASSO_IDEE_GRAPPE,
  REMOVE_GRAPPE_ASSO_IDEE_GRAPPE
} from "../actions/assoIdeeGrappeAction";
import { NOT_STARTED, ENDED_SUCESS } from "../loading";

const initialState = {
  idee: null,
  grappes: [],
  type: null,
  loading: NOT_STARTED
};

export default function assoIdeeGrappeReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    //DEFINE_MASTER
    case DEFINE_IDEE_ASSO_IDEE_GRAPPE:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: DEFINE_IDEE_ASSO_IDEE_GRAPPE,
        idee: action.idee
      };

    //ADD_GRAPPE_ASSO_IDEE_GRAPPE
    case ADD_GRAPPE_ASSO_IDEE_GRAPPE:
      if (state.grappes.includes(action.grappe))
        return {
          ...state
        };
      else
        return {
          ...state,
          loading: ENDED_SUCESS,
          type: ADD_GRAPPE_ASSO_IDEE_GRAPPE,
          grappes: [...state.grappes, action.grappe]
        };

    //REMOVE_ESCLAVE_ASSO_IDEE
    case REMOVE_GRAPPE_ASSO_IDEE_GRAPPE:
      const newTab = state.idGrappes.filter(
        grappe => grappe.id !== action.grappe.id
      );

      return {
        ...state,
        loading: ENDED_SUCESS,
        type: REMOVE_GRAPPE_ASSO_IDEE_GRAPPE,
        idGrappes: newTab
      };

    default:
      return state;
  }
}

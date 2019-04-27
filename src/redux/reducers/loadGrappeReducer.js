import {
  NOT_STARTED,
  START,
  IN_PROGRESS,
  ENDED_SUCESS,
  ENDED_ERROR
} from "../loading";

import {
  LOAD_GRAPPE,
  LOAD_GRAPPE_MAITRES,
  LOAD_GRAPPE_ORPHELINES,
  LOAD_GRAPPE_OPTIONS
} from "../actions/loadAction";

const initialState = {
  grappe: null,
  maitres: [],
  orphelines: [],
  options: [],
  type: null,
  loading: NOT_STARTED
};

export default function loadGrappeReducer(state = initialState, action) {
  switch (action.type) {
    //LOAD GRAPPE
    case LOAD_GRAPPE + START:
      return { ...state, loading: START, type: LOAD_GRAPPE };
    case LOAD_GRAPPE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: LOAD_GRAPPE };
    case LOAD_GRAPPE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: LOAD_GRAPPE,
        grappe: { ...action.grappe }
      };
    case LOAD_GRAPPE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: LOAD_GRAPPE };

    //LOAD MAITRES
    case LOAD_GRAPPE_MAITRES + START:
      return { ...state, loading: START, type: LOAD_GRAPPE_MAITRES };
    case LOAD_GRAPPE_MAITRES + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: LOAD_GRAPPE_MAITRES };
    case LOAD_GRAPPE_MAITRES + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: LOAD_GRAPPE_MAITRES,
        maitres: [...action.maitres]
      };
    case LOAD_GRAPPE_MAITRES + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: LOAD_GRAPPE_MAITRES };

    //LOAD ORPHELINES
    case LOAD_GRAPPE_ORPHELINES + START:
      return { ...state, loading: START, type: LOAD_GRAPPE_ORPHELINES };
    case LOAD_GRAPPE_ORPHELINES + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: LOAD_GRAPPE_ORPHELINES };
    case LOAD_GRAPPE_ORPHELINES + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: LOAD_GRAPPE_ORPHELINES,
        orphelines: [...action.orphelines]
      };
    case LOAD_GRAPPE_ORPHELINES + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: LOAD_GRAPPE_ORPHELINES };

    //LOAD  OPTIONS
    case LOAD_GRAPPE_OPTIONS + START:
      return { ...state, loading: START, type: LOAD_GRAPPE_OPTIONS };
    case LOAD_GRAPPE_OPTIONS + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: LOAD_GRAPPE_OPTIONS };
    case LOAD_GRAPPE_OPTIONS + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: LOAD_GRAPPE_OPTIONS,
        options: [...action.options]
      };
    case LOAD_GRAPPE_OPTIONS + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: LOAD_GRAPPE_OPTIONS };

    default:
      return state;
  }
}

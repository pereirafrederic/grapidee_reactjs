import {
  NOT_STARTED,
  START,
  IN_PROGRESS,
  ENDED_SUCESS,
  ENDED_ERROR
} from "../loading";

import {
  LOAD_IDEE,
  LOAD_IDEE_MAITRES,
  LOAD_IDEE_ORPHELINES,
  LOAD_IDEE_OPTIONS,
  LOAD_GRAPPE_IDEE_OPTIONS
} from "../actions/loadAction";

const initialState = {
  idee: null,
  maitres: [],
  orphelines: [],
  options: [],
  type: null,
  loading: NOT_STARTED
};

export default function loadIdeeReducer(state = initialState, action) {
  switch (action.type) {
    //LOAD IDEE
    case LOAD_IDEE + START:
      return { ...state, loading: IN_PROGRESS, type: LOAD_IDEE };
    case LOAD_IDEE + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: LOAD_IDEE };
    case LOAD_IDEE + ENDED_SUCESS:
      return {
        ...state,
        loading: ENDED_SUCESS,
        type: LOAD_IDEE,
        idee: { ...action.idee }
      };
    case LOAD_IDEE + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: LOAD_IDEE };

    //LOAD MAITRES
    case LOAD_IDEE_MAITRES + START:
      return { ...state, loading: START, type: LOAD_IDEE_MAITRES };
    case LOAD_IDEE_MAITRES + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: LOAD_IDEE_MAITRES };
    case LOAD_IDEE_MAITRES + ENDED_SUCESS:
      return {
        ...state,

        loading: ENDED_SUCESS,
        type: LOAD_IDEE_MAITRES,
        maitres: [...action.maitres]
      };
    case LOAD_IDEE_MAITRES + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: LOAD_IDEE_MAITRES };

    //LOAD ORPHELINES
    case LOAD_IDEE_ORPHELINES + START:
      return { ...state, loading: START, type: LOAD_IDEE_ORPHELINES };
    case LOAD_IDEE_ORPHELINES + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: LOAD_IDEE_ORPHELINES };
    case LOAD_IDEE_ORPHELINES + ENDED_SUCESS:
      return {
        ...state,

        loading: ENDED_SUCESS,
        type: LOAD_IDEE_ORPHELINES,
        orphelines: [...action.orphelines]
      };
    case LOAD_IDEE_ORPHELINES + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: LOAD_IDEE_ORPHELINES };

    //LOAD IDEE OPTIONS
    case LOAD_IDEE_OPTIONS + START:
      return { ...state, loading: START, type: LOAD_IDEE_OPTIONS };
    case LOAD_IDEE_OPTIONS + IN_PROGRESS:
      return { ...state, loading: IN_PROGRESS, type: LOAD_IDEE_OPTIONS };
    case LOAD_IDEE_OPTIONS + ENDED_SUCESS:
      return {
        ...state,

        loading: ENDED_SUCESS,
        type: LOAD_IDEE_OPTIONS,
        options: [...action.options]
      };
    case LOAD_IDEE_OPTIONS + ENDED_ERROR:
      return { ...state, loading: ENDED_ERROR, type: LOAD_IDEE_OPTIONS };

    //LOAD IDEE BY GRAPPE OPTIONS
    case LOAD_GRAPPE_IDEE_OPTIONS + START:
      return { ...state, loading: START, type: LOAD_GRAPPE_IDEE_OPTIONS };
    case LOAD_GRAPPE_IDEE_OPTIONS + IN_PROGRESS:
      return {
        ...state,
        loading: IN_PROGRESS,
        type: LOAD_GRAPPE_IDEE_OPTIONS
      };
    case LOAD_GRAPPE_IDEE_OPTIONS + ENDED_SUCESS:
      return [
        ...state,
        {
          loading: ENDED_SUCESS,
          type: LOAD_GRAPPE_IDEE_OPTIONS,
          options: [...action.options]
        }
      ];
    case LOAD_GRAPPE_IDEE_OPTIONS + ENDED_ERROR:
      return {
        ...state,
        loading: ENDED_ERROR,
        type: LOAD_GRAPPE_IDEE_OPTIONS
      };

    default:
      return state;
  }
}

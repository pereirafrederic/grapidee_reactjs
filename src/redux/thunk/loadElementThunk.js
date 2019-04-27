// App external
import * as configuration from "../../configuration";
import {
  loadIdee,
  loadGrappe,
  loadGrappeOptions,
  loadIdeeOptions,
  loadGrappeIdeeOptions
} from "../actions/loadAction";
import { START, ENDED_SUCESS, ENDED_ERROR } from "../loading";

export function thunkLoadIdee(id) {
  return dispatch => {
    dispatch(loadIdee(START, null));
    return fetch(`${configuration.config.url}/idee/${id}`)
      .then(Response => Response.json())
      .then(
        data => {
          dispatch(loadIdee(ENDED_SUCESS, data));
        },
        error => dispatch(loadIdee(ENDED_ERROR, null))
      );
  };
}

export function thunkLoadGrappe(id) {
  return dispatch => {
    dispatch(loadGrappe(START, null));
    return fetch(`${configuration.config.url}/grappe/${id}`)
      .then(Response => Response.json())
      .then(
        data => {
          dispatch(loadGrappe(ENDED_SUCESS, data));
        },
        error => dispatch(loadGrappe(ENDED_ERROR, null))
      );
  };
}

export function thunkLoadGrappeOptions() {
  return dispatch => {
    dispatch(loadGrappeOptions(START, null));
    return fetch(`${configuration.config.url}/grappe/options`)
      .then(Response => Response.json())
      .then(
        data => {
          dispatch(loadGrappeOptions(ENDED_SUCESS, data));
        },
        error => dispatch(loadGrappeOptions(ENDED_ERROR, null))
      );
  };
}

export function thunkLoadIdeeOptions() {
  return dispatch => {
    dispatch(loadIdeeOptions(START, null));
    return fetch(`${configuration.config.url}/idee/options`)
      .then(Response => Response.json())
      .then(
        data => {
          dispatch(loadIdeeOptions(ENDED_SUCESS, data));
        },
        error => dispatch(loadIdeeOptions(ENDED_ERROR, null))
      );
  };
}

export function thunkLoadGrappeIdeeOptions(idGrappe) {
  return dispatch => {
    dispatch(loadGrappeIdeeOptions(START, null));
    return fetch(`${configuration.config.url}/idee/${idGrappe}/options`)
      .then(Response => Response.json())
      .then(
        data => {
          dispatch(loadGrappeIdeeOptions(ENDED_SUCESS, data));
        },
        error => dispatch(loadGrappeIdeeOptions(ENDED_ERROR, null))
      );
  };
}

// App external
import * as configuration from "../../configuration";
import {
  loadIdeeMaitres,
  loadIdeeOrphelines,
  loadGrappeMaitres,
  loadGrappeOrphelines
} from "../actions/loadAction";
import { START, ENDED_SUCESS, ENDED_ERROR } from "../loading";

export function thunkLoadIdeeMaitres() {
  return dispatch => {
    dispatch(loadIdeeMaitres(START, null));
    return fetch(`${configuration.config.url}/idee/maitres`)
      .then(Response => Response.json())
      .then(
        data => {
          dispatch(loadIdeeMaitres(ENDED_SUCESS, data));
        },
        error => dispatch(loadIdeeMaitres(ENDED_ERROR, null))
      );
  };
}

export function thunkLoadIdeeOrphelines() {
  return dispatch => {
    dispatch(loadIdeeOrphelines(START, null));
    return fetch(`${configuration.config.url}/idee/orphelines`)
      .then(Response => Response.json())
      .then(
        data => {
          dispatch(loadIdeeOrphelines(ENDED_SUCESS, data));
        },
        error => dispatch(loadIdeeOrphelines(ENDED_ERROR, null))
      );
  };
}

export function thunkLoadGrappeMaitres() {
  return dispatch => {
    dispatch(loadGrappeMaitres(START, null));
    return fetch(`${configuration.config.url}/grappe/maitres`)
      .then(Response => Response.json())
      .then(
        data => {
          dispatch(loadGrappeMaitres(ENDED_SUCESS, data));
        },
        error => dispatch(loadGrappeMaitres(ENDED_ERROR, null))
      );
  };
}

export function thunkLoadGrappeOrphelines() {
  return dispatch => {
    dispatch(loadGrappeOrphelines(START, null));
    return fetch(`${configuration.config.url}/grappe/orphelines`)
      .then(Response => Response.json())
      .then(
        data => {
          dispatch(loadGrappeOrphelines(ENDED_SUCESS, data));
        },
        error => dispatch(loadGrappeOrphelines(ENDED_ERROR, null))
      );
  };
}

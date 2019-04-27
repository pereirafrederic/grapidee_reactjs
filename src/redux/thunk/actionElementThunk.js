// App external
import * as configuration from "../../configuration";
import { postIdee, putIdee, deleteIdee } from "../actions/IdeeAction";
import { postGrappe, putGrappe, deleteGrappe } from "../actions/GrappeAction";
import { START, ENDED_SUCESS, ENDED_ERROR } from "../loading";
import { POST, PUT, DELETE } from "./utils/methodFetch";
import { headers } from "./utils/headerFetch";

export function thunkActionIdee(idee, method) {
  return dispatch => {
    let element = idee;
    if (method === POST) dispatch(postIdee(START, null));
    else if (method === PUT) dispatch(putIdee(START, null));
    else if (method === DELETE) {
      element = {
        id: idee.id
      };
      dispatch(deleteIdee(START, null));
    }
    return fetch(`${configuration.config.url}/idee`, {
      headers: headers,
      method: method,
      body: JSON.stringify(element)
    })
      .then(Response => Response.json())
      .then(
        data => {
          if (method === POST) dispatch(postIdee(ENDED_SUCESS, data));
          else if (method === PUT) dispatch(putIdee(ENDED_SUCESS, data));
          else if (method === DELETE) dispatch(deleteIdee(ENDED_SUCESS, data));
        },
        error => {
          if (method === POST) dispatch(postIdee(ENDED_ERROR));
          else if (method === PUT) dispatch(putIdee(ENDED_ERROR));
          else if (method === DELETE) dispatch(deleteIdee(ENDED_ERROR));
        }
      );
  };
}

export function thunkActionGrappe(grappe, method) {
  return dispatch => {
    if (method === POST) dispatch(postGrappe(START, null));
    else if (method === PUT) dispatch(putGrappe(START, null));
    else if (method === DELETE) dispatch(deleteGrappe(START, null));
    return fetch(`${configuration.config.url}/grappe`, {
      headers: headers,
      method: method,
      body: JSON.stringify(grappe)
    })
      .then(Response => Response.json())
      .then(
        data => {
          if (method === POST) dispatch(postGrappe(ENDED_SUCESS, data));
          else if (method === PUT) dispatch(putGrappe(ENDED_SUCESS, data));
          else if (method === DELETE)
            dispatch(deleteGrappe(ENDED_SUCESS, data));
        },
        error => {
          if (method === POST) dispatch(postGrappe(ENDED_ERROR));
          else if (method === PUT) dispatch(putGrappe(ENDED_ERROR));
          else if (method === DELETE) dispatch(deleteGrappe(ENDED_ERROR));
        }
      );
  };
}

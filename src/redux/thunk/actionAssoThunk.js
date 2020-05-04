// App external
import * as configuration from "../../configuration";
import { START, ENDED_SUCESS, ENDED_ERROR } from "../loading";
import { POST, PUT, DELETE } from "./utils/methodFetch";
import { postAssoIdee, deleteAssoIdee } from "../actions/assoIdeeIdeeAction";
import { headers } from "./utils/headerFetch";
import {
  postAssoIdeeGrappe,
  deleteAssoIdeeGrappe
} from "../actions/assoIdeeGrappeAction";

import {
  postAssoGrappe,
  deleteAssoGrappe
} from "../actions/assoGrappeGrappeAction";

export function thunkActionPostAssoIdee(assoIdee, method) {
  return dispatch => {
    var url = "";
    if (method === POST) {
      dispatch(postAssoIdee(START, null));
      url = "/associer/idee";
    } else if (method === DELETE) {
      dispatch(deleteAssoIdee(START, null));
      url = "/desassocier/idee";
    }
    return fetch(configuration.config.url  + url, {
      headers: headers,
      method: POST,
      body: JSON.stringify(assoIdee)
    })
      .then(Response => Response.json())
      .then(
        data => {
          if (method === POST) dispatch(postAssoIdee(ENDED_SUCESS, data));
          else if (method === DELETE)
            dispatch(deleteAssoIdee(ENDED_SUCESS, data));
        },
        error => {
          if (method === POST) dispatch(postAssoIdee(ENDED_ERROR));
          else if (method === DELETE) dispatch(deleteAssoIdee(ENDED_ERROR));
        }
      );
  };
}

export function thunkActionAssoIdeeGrappe(assoIdeeGrappe, method) {
  return dispatch => {
    if (method === POST) dispatch(postAssoIdeeGrappe(START, null));
    else if (method === DELETE) dispatch(deleteAssoIdeeGrappe(START, null));
    return fetch(configuration.config.url +"/idee", {
      headers: headers,
      method: method,
      body: JSON.stringify(assoIdeeGrappe)
    })
      .then(Response => Response.json())
      .then(
        data => {
          if (method === POST) dispatch(postAssoIdeeGrappe(ENDED_SUCESS, data));
          else if (method === DELETE)
            dispatch(deleteAssoIdeeGrappe(ENDED_SUCESS, data));
        },
        error => {
          if (method === POST) dispatch(postAssoIdeeGrappe(ENDED_ERROR));
          else if (method === DELETE)
            dispatch(deleteAssoIdeeGrappe(ENDED_ERROR));
        }
      );
  };
}

export function thunkActionAssoGrappe(assoGrappe, method) {
  return dispatch => {
    var url = "";
    if (method === POST) {
      dispatch(postAssoGrappe(START, null));
      url = "associer/grappe";
    } else if (method === DELETE) {
      dispatch(deleteAssoGrappe(START, null));
      url = "desassocier/grappe";
    }
    return fetch(configuration.config.url  + url, {
      headers: headers,
      method: POST,
      body: JSON.stringify(assoGrappe)
    })
      .then(Response => Response.json())
      .then(
        data => {
          if (method === POST) dispatch(postAssoGrappe(ENDED_SUCESS, data));
          else if (method === DELETE)
            dispatch(deleteAssoGrappe(ENDED_SUCESS, data));
        },
        error => {
          if (method === POST) dispatch(postAssoGrappe(ENDED_ERROR));
          else if (method === DELETE) dispatch(deleteAssoGrappe(ENDED_ERROR));
        }
      );
  };
}

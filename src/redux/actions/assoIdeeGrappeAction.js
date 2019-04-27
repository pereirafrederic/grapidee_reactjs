export const DEFINE_IDEE_ASSO_IDEE_GRAPPE = "DEFINE_IDEE_ASSO_IDEE_GRAPPE_";
export const ADD_GRAPPE_ASSO_IDEE_GRAPPE = "ADD_GRAPPE_ASSO_IDEE_GRAPPE_";
export const REMOVE_GRAPPE_ASSO_IDEE_GRAPPE = "REMOVE_GRAPPE_ASSO_IDEE_GRAPPE";

export const POST_ASSO_IDEE_GRAPPE = "POST_ASSO_IDEE_";
export const DELETE_ASSO_IDEEE_GRAPPE = "DELETE_ASSO_IDEE_";
export const RESET_ASSO_IDEEE_GRAPPE = "RESET_ASSO_IDEEE_GRAPPE_";

/*
 * action creators
 */

export function defineIdeeAssoIdeeGrappe(idee) {
  return { type: DEFINE_IDEE_ASSO_IDEE_GRAPPE, idee };
}

export function addGrappeAssoIdeeGrappe(grappe) {
  return { type: ADD_GRAPPE_ASSO_IDEE_GRAPPE, grappe };
}

export function removeGrappeAssoIdeeGrappe(grappe) {
  return { type: REMOVE_GRAPPE_ASSO_IDEE_GRAPPE, grappe };
}

export function postAssoIdeeGrappe(loading, assoIdeeGrappe) {
  return { type: POST_ASSO_IDEE_GRAPPE + loading, assoIdeeGrappe };
}

export function deleteAssoIdeeGrappe(loading, assoIdeeGrappe) {
  return { type: DELETE_ASSO_IDEEE_GRAPPE + loading, assoIdeeGrappe };
}

export function resetAssoIdeeGrappe() {
  return { type: RESET_ASSO_IDEEE_GRAPPE };
}

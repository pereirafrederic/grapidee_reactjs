export const DEFINE_MASTER_ASSO_IDEE = "DEFINE_MASTER_ASSO_IDEE_";
export const ADD_ESCLAVE_ASSO_IDEE = "ADD_ESCLAVE_ASSO_IDEE_";
export const REMOVE_ESCLAVE_ASSO_IDEE = "REMOVE_ESCLAVE_ASSO_IDEE_";
export const DEFINE_GRAPPE_ASSO_IDEE = "DEFINE_GRAPPE_ASSO_IDEE_";

export const POST_ASSO_IDEE = "POST_ASSO_IDEE_";
export const DELETE_ASSO_IDEE = "DELETE_ASSO_IDEE_";
export const RESET_ASSO_IDEE = "RESET_ASSO_IDEE";

/*
 * action creators
 */

export function defineMasterAssoidee(maitre) {
  return { type: DEFINE_MASTER_ASSO_IDEE, maitre };
}

export function addEsclaveAssoIdee(esclave) {
  return { type: ADD_ESCLAVE_ASSO_IDEE, esclave };
}

export function removeEsclaveAssoIdee(esclave) {
  return { type: REMOVE_ESCLAVE_ASSO_IDEE, esclave };
}

export function defineGrappeAssoIdee(grappe) {
  return { type: DEFINE_GRAPPE_ASSO_IDEE, grappe };
}

export function postAssoIdee(loading, assoIdee) {
  return { type: POST_ASSO_IDEE + loading, assoIdee };
}

export function deleteAssoIdee(loading, assoIdee) {
  return { type: DELETE_ASSO_IDEE + loading, assoIdee };
}

export function resetAssoIdee() {
  return { type: RESET_ASSO_IDEE };
}

export const DEFINE_MASTER_ASSO_GRAPPE = "DEFINE_MASTER_ASSO_GRAPPE_";
export const ADD_ESCLAVE_ASSO_GRAPPE = "ADD_ESCLAVE_ASSO_GRAPPE_";
export const REMOVE_ESCLAVE_ASSO_GRAPPE = "REMOVE_ESCLAVE_ASSO_GRAPPE_";

export const POST_ASSO_GRAPPE = "POST_ASSO_GRAPPE_";
export const DELETE_ASSO_GRAPPE = "DELETE_ASSO_GRAPPE_";
export const RESET_ASSO_GRAPPE = "RESET_ASSO_GRAPPE_";

/*
 * action creators
 */

export function defineMasterAssoGrappe(maitre) {
  console.log("DEFINE_MASTER_ASSO_GRAPPE");
  return { type: DEFINE_MASTER_ASSO_GRAPPE, maitre };
}
export function addEsclaveAssoGrappe(esclave) {
  console.log("ADD_ESCLAVE_ASSO_GRAPPE");
  return { type: ADD_ESCLAVE_ASSO_GRAPPE, esclave };
}

export function removeEsclaveAssoGrappe(esclave) {
  return { type: REMOVE_ESCLAVE_ASSO_GRAPPE, esclave };
}

export function postAssoGrappe(loading, assoGrappe) {
  return { type: POST_ASSO_GRAPPE + loading, assoGrappe };
}

export function deleteAssoGrappe(loading, assoGrappe) {
  return { type: DELETE_ASSO_GRAPPE + loading, assoGrappe };
}

export function resetAssoGrappe() {
  return { type: RESET_ASSO_GRAPPE };
}

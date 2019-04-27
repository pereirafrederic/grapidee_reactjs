export const POST_IDEE = "POST_IDEE_";
export const PUT_IDEE = "PUT_IDEE_";
export const DELETE_IDEE = "DELETE_IDEE_";

/*
 * action creators
 */

export function postIdee(loading, idee) {
  return { type: POST_IDEE + loading, idee };
}

export function putIdee(loading, idee) {
  return { type: PUT_IDEE + loading, idee };
}

export function deleteIdee(loading, idee) {
  return { type: DELETE_IDEE + loading, idee };
}

export const POST_GRAPPE = "POST_GRAPPE_";
export const PUT_GRAPPE = "PUT_GRAPPE_";
export const DELETE_GRAPPE = "DELETE_GRAPPE_";

export function postGrappe(loading, grappe) {
  return { type: POST_GRAPPE + loading, grappe };
}

export function putGrappe(loading, grappe) {
  return { type: PUT_GRAPPE + loading, grappe };
}

export function deleteGrappe(loading, grappe) {
  return { type: DELETE_GRAPPE + loading, grappe };
}

export const LOAD_IDEE = "LOAD_IDEE_";
export const LOAD_GRAPPE = "LOAD_GRAPPE_";

export const LOAD_IDEE_MAITRES = "LOAD_IDEE_MAITRES_";
export const LOAD_IDEE_ORPHELINES = "LOAD_IDEE_ORPHELINES_";

export const LOAD_GRAPPE_MAITRES = "LOAD_GRAPPE_MAITRES_";
export const LOAD_GRAPPE_ORPHELINES = "LOAD_GRAPPE_ORPHELINES_";

export const LOAD_IDEE_OPTIONS = "LOAD_IDEE_OPTIONS_";
export const LOAD_GRAPPE_OPTIONS = "LOAD_GRAPPE_OPTIONS_";

export const LOAD_GRAPPE_IDEE_OPTIONS = "LOAD_GRAPPE_IDEE_OPTIONS_";

/*
 * action creators
 */

export function loadIdee(loading, idee) {
  return { type: LOAD_IDEE + loading, idee };
}

export function loadGrappe(loading, grappe) {
  return { type: LOAD_GRAPPE + loading, grappe };
}

// MAITRES / ORPHELINES

export function loadIdeeMaitres(loading, maitres) {
  return { type: LOAD_IDEE_MAITRES + loading, maitres };
}
export function loadIdeeOrphelines(loading, orphelines) {
  return { type: LOAD_IDEE_ORPHELINES + loading, orphelines };
}

export function loadGrappeMaitres(loading, maitres) {
  return { type: LOAD_GRAPPE_MAITRES + loading, maitres };
}
export function loadGrappeOrphelines(loading, orphelines) {
  return { type: LOAD_GRAPPE_ORPHELINES + loading, orphelines };
}

// OPTIONS
export function loadIdeeOptions(loading, options) {
  return { type: LOAD_IDEE_OPTIONS + loading, options };
}

export function loadGrappeOptions(loading, options) {
  return { type: LOAD_GRAPPE_OPTIONS + loading, options };
}
export function loadGrappeIdeeOptions(loading, options) {
  return { type: LOAD_GRAPPE_OPTIONS + loading, options };
}

function documentUndefined() {
  if (typeof document === 'undefined') {
    return true;
  } else { // eslint-disable-line no-else-return
    return false;
  }
}

function windowUndefined() {
  if (typeof window === 'undefined') {
    return true;
  } else { // eslint-disable-line no-else-return
    return false;
  }
}
export default function windowHook() {
  return fetch()
    .then(documentUndefined)
    .then(windowUndefined);
}

export const ORIGIN = window.location.origin ||
    `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;

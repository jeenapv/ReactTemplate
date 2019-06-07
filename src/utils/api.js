import request from '../utils/request';

const defaultOptions = { credentials: 'same-origin', headers: {} };
const methodsWithPayload = ['POST', 'PUT', 'PATCH', 'DELETE'];

const API_URL = 'http:apiurl';

function getUserAuthToken() {
  return localStorage.getItem('user_access_token');
}

/* eslint-disable no-underscore-dangle */
function _apiCall(path, options = {}) {
  const defaultedOptions = Object.assign({}, defaultOptions, options);

  if (methodsWithPayload.indexOf(defaultedOptions.method) > -1 && defaultedOptions.body) {
    defaultedOptions.headers['Content-Type'] = 'application/json';
    defaultedOptions.headers['X-Requested-With'] = 'XMLHttpRequest';
    defaultedOptions.body =
      typeof defaultedOptions.body === 'string'
        ? defaultedOptions.body
        : JSON.stringify(defaultedOptions.body);
  }
  if (defaultedOptions.auth) {
    defaultedOptions.headers.Authorization = `Bearer ${getUserAuthToken()}`;
  }

  let defaultedPath = typeof path === 'string' ? path : path.join('/');

  if (defaultedOptions.params) {
    const esc = encodeURIComponent;
    const query = Object.keys(defaultedOptions.params)
      .map((k) => `${esc(k)}=${esc(defaultedOptions.params[k])}`)
      .join('&');
    defaultedPath = `${defaultedPath}?${query}`;
  }

  return request(`${API_URL}/${defaultedPath}`, defaultedOptions)
    .then((result) => ({ result }))
    .catch((error) => ({ error }));
}

let callId = 0;
export const call =
  process.env.NODE_ENV === 'production'
    ? _apiCall
    : (path, options = {}, json = true, ...rest) => {
      callId += 1;
      const thisCallId = callId;
      /* eslint-disable no-console */
      console.log('API call', thisCallId, path, options);
      return _apiCall(path, options, json, ...rest).then(
        (result) => {
          console.info('API Result', thisCallId, json ? result : '(stream)');
          return result;
        },
        (error) => {
          // console.log(error);
          console.error('API Error', thisCallId, error.stack || error.message || error);
          throw error;
        },
      );
      /* eslint-enable no-console */
    };

export default {
  common: {
    checkApi() {
      return call('get', {
        method: 'GET',
      });
    },
  },
  invitation: {
    send(payload) {
      return call(['xpis', 'invite_user'], {
        method: 'POST',
        body: payload,
        auth: true,
      });
    },
    verifyToken(token) {
      return call(['auth', 'token-info', token], {
        method: 'GET',
      });
    },
  },
  auth: {
    login(payload) {
      return call(['apis', 'auth', 'login'], {
        method: 'POST',
        body: payload,
      });
    },
  },
};

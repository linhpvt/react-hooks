const BASE_URL = 'https://jsonplaceholder.typicode.com';
const RESULT_DEFAULT = { code: 0, data: undefined, error: undefined };
const buildError = e => ({...RESULT_DEFAULT, code: 100, error: e });

export const get = async (url) => {
  let result = RESULT_DEFAULT;
  try {
    const resp = await fetch(`${BASE_URL}${url}`);
    const data = await resp.json();
    result = { ...result, data };
  } catch (e) {
    console.log('ERROR', e, url);
    return buildError(e);
  }
  return result;
}

export const post = async (url = '', payload = {}) => {
  let result = RESULT_DEFAULT;
  try {
    const resp = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });
    const data = await resp.json();
    result = { ...result, data };
  } catch (e) {
    console.log(e);
    return buildError(e);
  }
  return result;
}

export const put = async (url = '', payload = {}) => {
  let result = RESULT_DEFAULT;
  try {
    const resp = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    });
    const data = await resp.json();
    result = { ...result, data };
  } catch (e) {
    console.log(e);
    return buildError(e);
  }
  return result;
}
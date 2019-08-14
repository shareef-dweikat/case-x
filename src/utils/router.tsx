/**
 * @param {Object} locationObject
 * @returns {string}
 */
export function encodeJSONForRoute(locationObject: object) {
  const stringfied = JSON.stringify(locationObject);
  const encoded = btoa(stringfied);
  const uriEncoded = encodeURI(encoded);
  return uriEncoded;
}

/**
 * @param {string} uriEncoded
 * @returns {Object}
 */
export function decodeJSONForRoute(uriEncoded: string) {
  const encoded = decodeURI(uriEncoded);
  const stringfied = atob(encoded);
  return JSON.parse(stringfied);
}

export const isDevEnvironment = (): boolean => {
  const casexUrl = "casex.co";
  const localUrl = "localhost";
  const url = window.location.href;
  return url.includes(casexUrl) || url.includes(localUrl);
};

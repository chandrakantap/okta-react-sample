const OKTA_DOMAIN=process.env.REACT_APP_OKTA_DOMAIN;
const CLIENT_ID=process.env.REACT_APP_CLIENT_ID;
const CALLBACK_PATH='/home';

const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;
const SCOPES = 'openid profile email';

const config = {
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI,
  scopes: SCOPES.split(/\s+/)
};
export default config;
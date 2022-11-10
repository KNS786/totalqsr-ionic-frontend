import { isPlatform } from "@ionic/react";

export const domain = "dev-nodi7dk0hk7rpxjp.us.auth0.com";
export const clientId = "DosEg3PVvlCkJvy0z0YzWnIuV2gExH87";
export const audience = "https://dev-nodi7dk0hk7rpxjp.us.auth0.com/api/v2/";
export const scope = "read:current_user update:current_user_metadata";

const appId = "io.ionic.starter";

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('ios') || isPlatform('android');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:3000/login';

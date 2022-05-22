import * as msal from '@azure/msal-browser'
import Emitter from 'tiny-emitter'

export default ({ app }, inject) => {
  const msalConfig = {
    auth: {
      clientId: '7f7cc1e9-7d9f-43ca-8c3b-ecf939f45ca6',
      authority:
        'https://login.microsoftonline.com/6dda9bce-9faa-43a3-b3c1-6195b1580fba',
      //  redirectUri: 'http://localhost:8080',
      //   redirectUri: 'https://logistix.netlify.app/',  
      redirectUri: 'https://nuxtrouter.netlify.app/',
    },
    cache: { cacheLocation: 'localStorage', storeAuthStateInCookie: true },
  }

  const msalInstance = new msal.PublicClientApplication(msalConfig)
  const emitter = new Emitter()
  inject('msal', msalInstance)
  inject('emitter', emitter)
}

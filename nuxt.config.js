import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#33cccc'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  target: 'static', // will allow to host it on Netlify
  ssr: false, // will be done as SPA with this
  router: {
    middleware: ['auth'] // @nuxt/auth module
  },
  auth: {
    redirect: {
      callback: "/",
      home: "/",
      login: "/login",
      logout: "/"
    },
    localStorage: false,
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
        scope: ['openid', 'profile', 'offline_access'],
        accessType: 'offline',
        responseType: 'code',
        grantType: 'authorization_code',
        codeChallengeMethod: 'S256',
      }
    },
  },
});

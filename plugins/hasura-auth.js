export default (context) => {
    return {
      httpEndpoint: 'https://apps.crewnew.com/v1/graphql',
  
      /*
       * For permanent authentication provide `getAuth` function.
       * The string returned will be used in all requests as authorization header
       */
      getAuth: () => 'Zd3L3tExefP5AUyP',
    }
  }
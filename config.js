var AzureStorageAdapter = require('parse-server-azure-storage').AzureStorageAdapter;

module.exports = {
  server: {
    appId: process.env.APP_ID,
    masterKey: process.env.MASTERKEY,
    databaseURI: process.env.MONGO_URL,
    serverURL: process.env.SERVER_NAME || 'http://localhost:1337/parse',
    publicServerURL: process.env.PUBLIC_SERVER_URL,
    appName: process.env.APP_NAME,
    allowClientClassCreation: false,
    enableAnonymousUsers: false,
    revokeSessionO6PasswordReset: true,
    accountLockout: {
      duration: 5,
      threshold: 3
    },
    liveQuery: {
      classNames: process.env.CLASS_NAMES.split(',')
    },
    filesAdapter: new AzureStorageAdapter(
      process.env.ACCOUNT_NAME,
      process.env.CONTAINER,
      {
        accessKey: process.env.ACCESS_KEY,
        directAccess: true
      }
    )
  },
  dashboard: {
    allowInsecureHTTP: true,
    apps: [
      {
        appId: 'livesign',
        masterKey: process.env.MASTERKEY,
        serverURL: 'https://livesign-parse-server.scottybeam.me/parse',
        appName: 'Live Sign'
      }
    ]
  },
  storage: {},
  push: {}
}

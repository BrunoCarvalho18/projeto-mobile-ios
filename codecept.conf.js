const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */

const path = require('path');
const resolvedPath = path.resolve('c2_super_app_release_112.app');
console.log("path resolver: " + resolvedPath);

exports.config = {
  tests: './e2e/**_test.js',
  output: './output',
  helpers: {
    MyHelper: {
      require: './elements_helpeer.js'
    },
    Appium: {
      app: resolvedPath,
      platform: 'iOS',
      desiredCapabilities: {
        automationName: 'XCUITest',
        platformVersion: '16.4',
        deviceName: 'iPhone 14 Pro',
        newCommandTimeout: 4000
      }
    },
    REST: {
      endpoint: 'http://site.com/api',
      // prettyPrintJson: true,
      // onRequest: (request) => {
      //   request.headers.auth = '123';
      },
    JSONResponse:  {
        requestHelper:'REST'

        }
   },
  
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js",
    homePage: "./pages/home.js",
    loggedareaPage: "./pages/loggedarea.js",
    perfilPage: "./pages/perfil.js",
    cadastroPage: "./pages/cadastro.js"
  },
  name: 'c2-qa-ios-mobile'
}
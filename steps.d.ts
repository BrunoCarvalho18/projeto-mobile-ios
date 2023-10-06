/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/login.js');
type homePage = typeof import('./pages/home.js');
type loggedareaPage = typeof import('./pages/loggedarea.js');
type perfilPage = typeof import('./pages/perfil.js');
type cadastroPage = typeof import('./pages/cadastro.js');
type MyHelper = import('./elements_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, homePage: homePage, loggedareaPage: loggedareaPage, perfilPage: perfilPage, cadastroPage: cadastroPage }
  interface Methods extends MyHelper, Appium {}
  interface I extends ReturnType<steps_file>, WithTranslation<MyHelper> {}
  namespace Translation {
    interface Actions {}
  }
}

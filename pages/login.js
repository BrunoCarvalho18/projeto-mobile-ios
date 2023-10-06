const { I } = inject();

module.exports = {

  fields: {
    fieldEmail: '~usernameUserInput',
    fieldSenha: '~password'
  },

  buttons:{
    buttonEntrar: '//XCUIElementTypeOther[@name="loginButton"]',
    criarCadastro: '~registerButton',
    esqueceuSuaSenha: '~recoveryPasswordButton'
  },

  alert:{
    alertOps: 'Email ou senha estão incorretos.',
    emailAlert: 'Adicione um email valido'
  },

  doLogin(email,password) {
    I.waitForElement(this.fields.fieldEmail, 100)
    I.wait(5)
    I.fillField(this.fields.fieldEmail,email)
    I.fillField(this.fields.fieldSenha,password)
    for (let i = 0; i < 2; i++) {
      I.tap(this.buttons.buttonEntrar)
    }
    I.wait(5)
  },

  criarCadastro() {
    I.wait(4)
    I.waitForElement(this.buttons.criarCadastro)
    I.tap(this.buttons.criarCadastro)
  },

  esqueceuSuaSenha() {
    I.wait(4)
    I.waitForElement(this.buttons.esqueceuSuaSenha)
    I.tap(this.buttons.esqueceuSuaSenha)
  },

  seeAlertWrongUser() {
    I.wait(2)
    I.see(this.alert.alertOps)
    
  },
  
  seeAlertWrongEmail() {
    I.wait(2)
    I.see(this.alert.emailAlert)
  }
}

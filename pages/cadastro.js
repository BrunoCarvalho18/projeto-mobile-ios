const { I } = inject();

module.exports = {

  txt: {
    continuar: '~CONTINUAR',
    criarSenha:'Criar senha',
    informeDadosComplemen: 'Informe seu nome, sobrenome e telefone',
    codVerificacao: 'Código de verificação'
  },

  field: {
    email: '~emailInput',
    senha: '~newPasswordInput',
    confirmarSenha: '~confirmPasswordInput',
    nome: '~nameInput',
    sobrenome: '~surnameInput',
    numTelefone: '~phoneNumber',
    verificacao: '~confirmationCode'
  },

  botao: {
    return: '~Return',
    continuarEmail: '~continueButton',
    salvarSenhas: '~savePasswordButton',
    continuar: '~saveButton',
    salvar: '~savePasswordButton'
  },
  

  excluirCadastro(email, password) {

    const urlToken = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhRrap_bvPC1qnsUZCJkAmZLiuieZH7Xw';
    const headers = {
        'Accept': "*/*", 'Content-Type': 'application/json', 
        'origin': 'https://web-next.hml.comprealugueagora.com'}   
    const body = { 
        "returnSecureToken": true, 
        email: email, 
        password: password}
    const responseToken = I.sendPostRequest(urlToken, body, headers)
    const accessToken = responseToken.idToken;
    const userId = responseToken.localId;
    console.log(responseToken);
    process.env.ACCESS_TOKEN = accessToken
    process.env.USER_ID = userId;
    const urlExclusao = 'https://ms-profile.hml.comprealugueagora.com/profile';
    const headersExclusao = { 
        'accept': '*/*', 
        'Authorization': `Bearer ${accessToken}`, 
        'Bearer': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNWI0MDljNmYyMmM0MDNlMWY5MWY5ODY3YWM0OTJhOTA2MTk1NTgiLCJ0eXAiOiJKV1QifQ.eyJ1c2VydHlwZSI6IkNPTU1PTiIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9jMi1wbGF0YWZvcm1hLWhtbCIsImF1ZCI6ImMyLXBsYXRhZm9ybWEtaG1sIiwiYXV0aF90aW1lIjoxNjc1MjczNzg3LCJ1c2VyX2lkIjoiS0M2UlRlQUNIZ2VXS0YzTjdub1JSeXpFQVNKMyIsInN1YiI6IktDNlJUZUFDSGdlV0tGM043bm9SUnl6RUFTSjMiLCJpYXQiOjE2NzUyNzM3ODcsImV4cCI6MTY3NTI3NzM4NywiZW1haWwiOiJ0LWUyZS1qYW5lLmxlYW9AY29tcHJlYWx1Z3VlYWdvcmEuY29tLmJyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV9udW1iZXIiOiIrNTUxMTk2NzIyOTYyMCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsicGhvbmUiOlsiKzU1MTE5NjcyMjk2MjAiXSwiZW1haWwiOlsidC1lMmUtamFuZS5sZWFvQGNvbXByZWFsdWd1ZWFnb3JhLmNvbS5iciJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.thAF3D4rKemUvQ7RzcJpkgYvI4gvVHcPFbSc5kQ-Tlqa7_z0VRjbsxGSPfIy0L1kEi1VLUh3hz5SA4B1wW10h-Bb5iAiw2bZyaGtYpIjYXgdPlJQfrJZ_7tl0X23_70sIqlNyQTI7yp23mkJRdxLWCSmDdxLkYER88i1Oi7m3XmiOJ_VWKnYSLOzTSg1aGhuDLir1S56hHyOlc7ccl-8Q0R84TfDsWnshTR3JsP-0bld3YsWTBoxnAR1bz68QlrpCgmvn44JaU2HSrJF6-XJwekyMiftvo7FCzcvLmS7aVx-eZ_cM1lEXO4qd4ZXu7s4JcqpoPiy0aCGgD6DOF8J8w' 
    }
    const dataExclusao = { 
        email: email,
        password: password 
    }
        const responseExclusao = I.sendDeleteRequest(urlExclusao, { data: dataExclusao, headers: headersExclusao, userId });
    },


  preencherEmail(email) {
    I.wait(10)
    I.waitForElement(this.field.email,10)
    I.fillField(this.field.email,email)
},

continuarAposPreenchEmail() {
    I.wait(10)
    I.tap(this.botao.return)
    I.wait(5)
    I.tap(this.botao.continuarEmail)   
},

preencherSenha(senha) {
    I.wait(10)
    I.fillField(this.field.senha,senha)
},

prencherConfirmarSenha(senhaConfirmacao) {
    I.waitForElement(this.field.confirmarSenha,10)
    I.fillField(this.field.confirmarSenha,senhaConfirmacao)
},

btnSalvarSenha(){
    I.waitForElement(this.botao.salvarSenhas)
    I.tap(this.botao.salvarSenhas)
},

preencherInfComplementares(nome, sobrenome, phone) {
    I.wait(5)
    I.fillField(this.field.nome,nome)
    I.wait(10)
    I.fillField(this.field.sobrenome,sobrenome)
    I.wait(10)
    I.fillField(this.field.numTelefone,phone)
},

btnContinuar(){
    I.waitForElement(this.botao.continuar)
    I.tap(this.botao.continuar)
    I.wait(3)
},

preencherCodVerificacao(codVerificacao){
    I.waitForElement(this.field.verificacao)
    I.wait(10)
    I.fillField(this.field.verificacao,codVerificacao)
},

btnSalvar() {
    I.waitForElement(this.botao.salvar)
    I.tap(this.botao.salvar)
    I.wait(9)
}
}

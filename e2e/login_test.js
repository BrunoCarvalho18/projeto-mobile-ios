const fileData = require('../data/data.js');
const { I ,loginPage,homePage,loggedareaPage,perfilPage} = inject();

Feature('login');

Before(async ({ I }) => {
    I.wait(6)
    const isTabBarLogout = await I.grabNumberOfVisibleElements(homePage.tabs.tabPerfil)
    if(isTabBarLogout >= 1){
        homePage.clickTabPerfil()
        perfilPage.clickButtonConfigIconPfl()
        perfilPage.clickLabelSair()
        perfilPage.clickButtonSair()
    } 
    
});


Scenario('Login - usuário corretor - com sucesso - Corretor Teste',({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email,fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
    
});

Scenario('Login - usuário comum - com sucesso - Manual Teste',  ({ I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.usuarioComum.email,fileData.usuarios.usuarioComum.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedManualTeste()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
});

Scenario('Tentativa de login com e-mail incorreto', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin("manual.teste@comprugueagora.com.br",fileData.usuarios.usuarioComum.password)
    loginPage.seeAlertWrongUser()
    I.wait(9)
});

Scenario('Tentativa de login com senha incorreta', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.usuarioComum.email,"blabla")
    loginPage.seeAlertWrongUser()
    I.wait(5)
});

Scenario('Tentativa de login com formato de email inválido', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin("corretor.testecomprealugueagora.com.br",fileData.usuarios.usuarioComum.password)
    loginPage.seeAlertWrongEmail()
});

Scenario('Tentativa de login com usuario sem cadastro', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin("teste@gmail.teste",fileData.usuarios.usuarioComum.password)
    loginPage.seeAlertWrongUser()
    
});

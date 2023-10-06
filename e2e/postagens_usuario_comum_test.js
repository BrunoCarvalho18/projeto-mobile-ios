Feature('postagens comum');
const fileData = require('../data/data.js');
const { I ,loginPage,homePage,loggedareaPage,perfilPage} = inject();
const postagens = require('../pages/postagens.js');

Feature('Postar Anúncio Usuário Comum');

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

Scenario('CTP-13 |Postar Anúncio - Usuário comum - venda rural de chácara breve lançamento com IPTU e ITR', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.usuarioComum.email,fileData.usuarios.usuarioComum.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedManualTeste()
    homePage.clickTabPostar()
    postagens.postarImovelRural(postagens.dropbox.transacaoVender,postagens.dropbox.categoriaRural,postagens.dropbox.tipoRuralChacara,postagens.dropbox.statusBreveLancamento,'1500000','850','',150,150,'04552000',"",300,false, false, true,3,5,3,0,0)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair() 
    perfilPage.clickButtonSair()
}).retry(2);


Scenario('CTP03 - Postar Anúncio - Usuário comum - venda residencial de flat em construção', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.usuarioComum.email,fileData.usuarios.usuarioComum.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedManualTeste()
    homePage.clickTabPostar()
    postagens.postarImovelFlatEmConstrucao(postagens.dropbox.transacaoVender,postagens.dropbox.categoriaResidencial,postagens.dropbox.tipoFlat,postagens.dropbox.statusEmConstrução,'150000','1200','450',45,45,'04552000',"ap 5000",300,true, false, false,2,1,1,0,1)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP10 - Postar Anúncio - Usuário comum - venda comercial de galpão em construção', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.usuarioComum.email,fileData.usuarios.usuarioComum.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedManualTeste()
    homePage.clickTabPostar()
    postagens.postarImovelGalpao(postagens.dropbox.transacaoVender,postagens.dropbox.categoriaComercial,postagens.dropbox.tipoComercialGalpao,postagens.dropbox.statusEmConstrução,'500000','850','não tem condo',150,150,'04552000',"",300,false, false, false,0,0,2,0,2)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);


Scenario('CTP01 - Postar Anúncio - Usuário comum - venda residencial de apto pronto para morar', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.usuarioComum.email,fileData.usuarios.usuarioComum.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedManualTeste()
    homePage.clickTabPostar()
    postagens.postarImovelVendaApto(postagens.dropbox.transacaoVender,postagens.dropbox.categoriaResidencial,postagens.dropbox.tipoApartamento,postagens.dropbox.statusProntoPraMorar,'200000','1500','500',120,120,'04552000',"",52,true,false,false,0,2,2,0,3)
}).retry(2);

After(async ({ I }) => {
    I.wait(6)
    const isTabBarLogout = await I.grabNumberOfVisibleElements(homePage.tabs.tabPerfil)
    if(isTabBarLogout >= 1){
        homePage.clickTabPerfil()
        perfilPage.clickButtonConfigIconPfl()
        perfilPage.clickLabelSair()
        perfilPage.clickButtonSair()
     }  
});













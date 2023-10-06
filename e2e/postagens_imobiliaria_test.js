Feature('postagens imobiliaria');
const fileData = require('../data/data.js');
const { I ,loginPage,homePage,loggedareaPage,perfilPage} = inject();
const postagens = require('../pages/postagens.js');


Feature('Postar Anúncio Imobiliaria');

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

Scenario('CTP-89 |Postar Anúncio - Imobiliária - validar link NovaPostagem', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.imobiliaria.email,fileData.usuarios.imobiliaria.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedImobiliariaTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarImovel()
    postagens.postarImovelSemCondominio(postagens.dropbox.transacaoAlugar,postagens.dropbox.categoriaComercial,postagens.dropbox.tipoComercialGalpao,"",'7000','4000','',450,500,'04552000',"ap1802","6000",false, true,false,4,'',2,'',30)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-88 |Postar Anúncio - Imobiliária - validar link Gerenciar Imóveis', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.imobiliaria.email,fileData.usuarios.imobiliaria.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedImobiliariaTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarImovel()
    postagens.postarImovelSemLinkGerenciarImoveis(postagens.dropbox.transacaoAlugar,postagens.dropbox.categoriaResidencial,postagens.dropbox.tipoCobertura,"",'654444','2486','745',90,90,'04552000',"ap1802","6000",false, true,false,4,1,2,1,4)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-85 |Postar Anúncio - Imobiliária - alugar comercial Fazenda/Sítio sem status', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.imobiliaria.email,fileData.usuarios.imobiliaria.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedImobiliariaTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarImovel()
    postagens.postarImovel(postagens.dropbox.transacaoAlugar,postagens.dropbox.categoriaResidencial,postagens.dropbox.tipoCasaDeCondominio,"",'80000','2486','800',90,90,'04552000',"casa 5-b","54",true, false,false,4,1,2,1,2)
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
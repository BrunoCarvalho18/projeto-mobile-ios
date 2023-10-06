Feature('postagens agente');
const fileData = require('../data/data.js');
const { I ,loginPage,homePage,loggedareaPage,perfilPage} = inject();
const postagens = require('../pages/postagens.js');

Feature('Postar Anúncio Agente');

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

Scenario('CTP-31 |Postar Anúncio - agente - aluguel comercial de Fazenda/Sítio', ({I}) => {
    I.wait(5)
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.agentes.email,fileData.usuarios.agentes.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedAgenteTeste()
    homePage.clickTabPostar()
    postagens.postarImovelSemCondominio(postagens.dropbox.transacaoAlugar,postagens.dropbox.categoriaRural,postagens.dropbox.tipoRuralFazendaSitio,"",'4000000','862','0',650,800,'04552000',"lote 7",300,false,false, false,4,2,2,0,0)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-53 |Postar Anúncio - agente - aluguel comercial de Fazenda/Sítio', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.agentes.email,fileData.usuarios.agentes.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedAgenteTeste()
    homePage.clickTabPostar()
    postagens.postarImovel(postagens.dropbox.transacaoAlugar,postagens.dropbox.categoriaResidencial,postagens.dropbox.tipoCobertura,"",'2500000','2486','5000',350,350,'04552000',"ap 1801",100,true, false,false,4,1,2,1,2)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-55 |Postar Anúncio - agente - aluguel comercial de loft', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.agentes.email,fileData.usuarios.agentes.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedAgenteTeste()
    homePage.clickTabPostar()
    postagens.postarImovel(postagens.dropbox.transacaoAlugar,postagens.dropbox.categoriaResidencial,postagens.dropbox.tipoLoft,"",'650000','5700','800',90,90,'04552000',"ap 101",100,true,false ,false,4,1,2,"",2)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-58 |Postar Anúncio - agente - validar botão fechar', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.agentes.email,fileData.usuarios.agentes.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedAgenteTeste()
    homePage.clickTabPostar()
    postagens.postarImovel(postagens.dropbox.transacaoAlugar,postagens.dropbox.categoriaResidencial,postagens.dropbox.tipoLoft,"",'650000','5700','800',90,90,'04552000',"ap 101",100,true,false, false,4,1,2,"",2)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
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

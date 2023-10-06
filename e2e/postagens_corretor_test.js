Feature('postagens corretor');
const fileData = require('../data/data.js');
const { I ,loginPage,homePage,loggedareaPage,perfilPage} = inject();
const postagens = require('../pages/postagens.js');

Feature('Postar Anúncio Usuário Corretor');

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

Scenario('CTP-81 |Postar Anúncio - Corretor - alugar comercial Fazenda/Sítio sem status', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email,fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarImovel()
    postagens.postarImovelCorretor(postagens.dropbox.transacaoAlugar,postagens.dropbox.categoriaRural,postagens.dropbox.tipoRuralFazendaSitio,"",'785550','862','',650,800,'04552000',"lote 89",0,false, true,true,7,"5","3","","")
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-72 |Postar Anúncio - Corretor - venda de terreno', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email,fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarImovel()
    postagens.postarImovelCorretorVendaTerreno(postagens.dropbox.transacaoVender,postagens.dropbox.categoriaComercial,postagens.dropbox.tipoComercialTerreno,"",'790000','5264','','',250,'04552000',"lote C",0,true, true ,true,7,"","","","")
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-80 |Postar Anúncio - Corretor - alugar comercial Fazenda/Sítio sem status', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email,fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarImovel()
    postagens.postarImovelCorretor(postagens.dropbox.transacaoAlugar,postagens.dropbox.categoriaRural,postagens.dropbox.tipoRuralChacara,postagens.statusBreveLancamento,'600000','6000','1','500',500,'04552000',"lote 89",0,false, true,true,7,"5","3","","")
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-61 |Postar Anúncio - Corretor - venda imóvel studio', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email,fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarImovel()
    postagens.postarImovelCorretorStudio(postagens.dropbox.transacaoVender,postagens.dropbox.categoriaResidencial,postagens.dropbox.tipoStudio,postagens.dropbox.statusProntoPraMorar,'300000','1500','500',120,120,'04552000',"ap 8554",1000,true, true ,true,7,2,2,1,1)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-68 |Postar Anúncio - Corretor - venda imóvel sobrado', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email,fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarImovel()
    postagens.postarImovelCorretor(postagens.dropbox.transacaoVender,postagens.dropbox.categoriaResidencial,postagens.dropbox.tipoSobrado,postagens.dropbox.statusLançamento,'180000','3200','',95,100,'04552000',"",32,false, true ,true,7,4,2,0,2)
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
}).retry(2);

Scenario('CTP-73 |Postar Anúncio - Corretor - venda de chácara breve lançamento', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email,fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarImovel()
    postagens.postarImovelCorretor(postagens.dropbox.transacaoVender,postagens.dropbox.categoriaRural,postagens.dropbox.tipoRuralChacara,postagens.dropbox.statusBreveLancamento,'600000','6000','1','500',500,'04552000',"lote 89",0,false, true,true,7,"5","3","","")
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
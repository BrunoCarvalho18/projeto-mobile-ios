Feature('postar conteudo');
const fileData = require('../data/data.js');
const { I ,loginPage,homePage,loggedareaPage,perfilPage} = inject();
const postagens = require('../pages/postagens.js');
const postConteudo = require('../pages/postconteudo.js');

Feature('Postar Conteudo Usuario Corretor');

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

   Scenario('CTP95 - Postar Conteudo - Usuário Corretor - Criar postagem apenas com texto', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email, fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarConteudo()
    postConteudo.postarConteudoTexto("Postando conteúdo apenas com texto")
    postConteudo.PublicarDuasVezes()
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()   
   }).retry(2);

   
   Scenario('CTP98 - Postar Conteudo - Usuário Corretor - Criar postagem sem selecionar tema de publicação', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email, fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarConteudo()
    postConteudo.SemTemasESemHashtags("Postando conteúdo sem tema")
    postConteudo.PublicarDuasVezes()
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
   }).retry(2);  

   Scenario('CTP96 - Postar Conteudo - Usuário Corretor - Criar postagem apenas com mídia', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.doLogin(fileData.usuarios.corretor.email, fileData.usuarios.corretor.password)
    homePage.clickTabPerfil()
    loggedareaPage.assertUserLoggedCorretorTeste()
    homePage.clickTabPostarImboliaria()
    postagens.tabCorretorPostarConteudo()
    postConteudo.postarConteudoMidia(2)
    postConteudo.PublicarDuasVezes()
    homePage.clickTabPerfil()
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
   }).retry(2);

   Scenario('CTP92 - Postar Conteudo - Usuário Corretor - Criar postagem adicionando texto, tema, hashtags e mídias', ({I}) => {
     homePage.clickTabEntrar()
     loginPage.doLogin(fileData.usuarios.corretor.email, fileData.usuarios.corretor.password)
     homePage.clickTabPerfil()
     loggedareaPage.assertUserLoggedCorretorTeste()
     homePage.clickTabPostarImboliaria()
     postagens.tabCorretorPostarConteudo()
     postConteudo.postarConteudo("criar postagem texto tema e midias", "imoveis", 9)
     postConteudo.Publicar()
     homePage.clickTabPerfil()
     perfilPage.clickButtonConfigIconPfl()
     perfilPage.clickLabelSair()
     perfilPage.clickButtonSair() 
    }).retry(2);

    Scenario('CTN93 - Postar Conteudo - Usuário Corretor - Criar postagem sem texto e sem mídia', ({I}) => {
      homePage.clickTabEntrar()
      loginPage.doLogin(fileData.usuarios.corretor.email, fileData.usuarios.corretor.password)
      homePage.clickTabPerfil()
      loggedareaPage.assertUserLoggedCorretorTeste()
      homePage.clickTabPostarImboliaria()
      postagens.tabCorretorPostarConteudo()
      postConteudo.postarConteudoTema("")
      postConteudo.postarComHashtag("", "oportunidade")
      postConteudo.PublicarSwipeUp()
      postConteudo.Publicar()
      postConteudo.assertAdicioneDescricaoOuImagem()
      postConteudo.clicarButtonOk()
      postConteudo.clicarButtonClose()
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




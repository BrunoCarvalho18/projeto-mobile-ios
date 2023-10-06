const { I } = inject();

module.exports = {

    field:{
        inputPost: '~inputPost',
        hashtags: '(//XCUIElementTypeOther[@name="Inserir hashtags"])[2]',
        addImagens: '//XCUIElementTypeOther[@name="buttonSelectImagePost"]',
    },

    temas: {
        novidadesRegiao: '//XCUIElementTypeOther[@name="Novidades região"]',
        cursosEventos: '//XCUIElementTypeOther[@name="Cursos e eventos"]',
        dicasGerais: '//XCUIElementTypeOther[@name="Dicas gerais"]',
        comercios: '//XCUIElementTypeOther[@name="Comércios"]',
        lazer: '//XCUIElementTypeOther[@name="Lazer"]',
    },

    tabs: {
        tabPublicar: '~buttonLink'
    },

    fotos: {
        fotoAp: '//XCUIElementTypeImage[@name="Foto, 30 de março de 2018, 20:14"]',
        fotoCasa: '//XCUIElementTypeImage[@name="Foto, 08 de agosto de 2012, 22:55"]',
        fotoTerreno: '//XCUIElementTypeImage[@name="Foto, 08 de agosto de 2012, 22:29"]',
    },

    text: {
        txtAtencao: '//XCUIElementTypeStaticText[@name="Adicione uma descrição ou uma imagem."]',
        adicionaFotos: '//XCUIElementTypeStaticText[@name="Adicionar fotos"]'
    },

    button: {
        selecionarImagem: '~buttonSelectImagePost',
        selecionarImagemBotao2: '(//XCUIElementTypeOther[@name="gridButtonSelectImage"])[1]',
        Ok: '~OK'
    },

    icon: {
        iconClose: '~iconClose'
    },

    postarConteudo(msgConteudo, hashtag, addFoto=Number) {
        I.wait(6)
        I.fillField(this.field.hashtags, hashtag)
        I.fillField(this.field.inputPost, msgConteudo)
        I.tap(this.temas.novidadesRegiao)
        I.tap(this.temas.cursosEventos)
        I.tap(this.temas.dicasGerais)
        I.tap(this.temas.comercios)
        I.tap(this.temas.lazer)    

        I.wait(5)
        
        for(let i = 0; i < addFoto; i++){
            if(i == 0){ 
                I.wait(8)
                I.tap(this.button.selecionarImagem)
                I.wait(8)
                I.tap(this.fotos.fotoTerreno)
                I.wait(6)
                I.tap(this.button.selecionarImagemBotao2)
                I.wait(6)
                I.tap(this.fotos.fotoCasa)
            } else if (i == 9){ 
               I.wait(8)
               I.tap(this.button.selecionarImagem)
               I.wait(8)
               I.tap(this.fotos.fotoTerreno)
               I.wait(6)
               I.tap(this.button.selecionarImagemBotao2)
               I.wait(6)
               I.tap(this.fotos.fotoCasa)
            }  
      
        }



    },

    postarConteudoTexto(msgConteudo){
        I.wait(5)
        I.fillField(this.field.inputPost, msgConteudo)
        I.wait(3)
    },

    postarConteudoTema(msgConteudo){
        I.fillField(this.field.inputPost, msgConteudo)
        I.tap(this.temas.novidadesRegiao)
        I.tap(this.temas.cursosEventos)
        I.tap(this.temas.dicasGerais)
        I.tap(this.temas.comercios)
        I.tap(this.temas.lazer)  
    },

    postarComHashtag(msgConteudo, hashtag){
        I.fillField(this.field.inputPost, msgConteudo)
        I.fillField(this.field.hashtags, hashtag) 
    },

    SemTemasESemHashtags(msgConteudo){
        I.tap(this.field.inputPost)
        I.fillField(this.field.inputPost, msgConteudo)
    },

    PublicarSwipeUp(){
        I.swipeUp(this.tabs.tabPublicar)
        I.wait(5)
        for (let i = 0; i < 2; i++) {
            I.tap(this.tabs.tabPublicar)
        }

    },

    postarConteudoMidia(addFoto=Number){
        for (let i = 0; i < addFoto; i++){
                if (i === 0){
                  I.wait(10)
                  I.tap(this.button.selecionarImagem)
                  I.wait(10)
                  I.tap(this.fotos.fotoTerreno)
                } else if (i === 1){
                  I.wait(10)
                  I.tap(this.button.selecionarImagemBotao2)
                  I.wait(10)
                  I.tap(this.fotos.fotoTerreno)
                }
       
            }    
        I.waitForElement(this.tabs.tabPublicar, 100)    
    },

    Publicar(){
        I.wait(8)
        I.tap(this.tabs.tabPublicar)
    },

    PublicarDuasVezes(){
        I.wait(8)
        for (let i = 0; i < 2; i++) {
            I.tap(this.tabs.tabPublicar)
          } 
    },

    clicarButtonOk(){
       I.wait(3)
       I.tap(this.button.Ok)
    }, 
    
    clicarButtonClose(){
        I.wait(3)
        I.tap(this.icon.iconClose)
     },   
 

    assertAdicioneDescricaoOuImagem(){
        I.wait(8)
        I.see("Adicione uma descrição ou uma imagem.")
    }

}
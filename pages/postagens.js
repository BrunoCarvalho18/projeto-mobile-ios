const { I } = inject();

module.exports = {
    
  txt: {
    header: '~header-title',
    headerTitulo: '//XCUIElementTypeStaticText[@name="header-title"]',
    postarNovoImovel: '//XCUIElementTypeOther[@name="post-new-realties"]',
    valor: '//XCUIElementTypeStaticText[@name="Valor que você deseja anunciar o imóvel"]'
  },

  dropbox:{
    transacao: '~advertisementType-button',
    transacaoAlugar: '~advertisementType-Alugar',
    transacaoVender: '~advertisementType-Vender',
    categoria: '~propertyCategory-button',
    categoriaResidencial: '~propertyCategory-Residencial',
    categoriaComercial: '~propertyCategory-Comercial',
    categoriaRural: '~propertyCategory-Rural',
    tipo: '~propertyType-button',
    tipoApartamento: '~propertyType-Apartamento',
    tipoCasaDeCondominio: '~propertyType-Casa de Condomínio',
    tipoCobertura: '~propertyType-Cobertura',
    tipoFlat: '~propertyType-Flat',
    tipoLoft: '~propertyType-Loft',
    tipoStudio: '~propertyType-Studio',
    tipoCasa: '~propertyType-Casa',
    tipoSobrado: '~propertyType-Sobrado',
    tipoComercialConjunto: '~propertyType-Conjunto Comercial/Sala',
    tipoComercialGalpao: '~propertyType-Galpão',
    tipoComercialTerreno: '~propertyType-Terreno',
    tipoComercialSalão: '~propertyType-Salão',
    tipoRuralChacara: '~propertyType-Chácara',
    tipoRuralFazendaSitio: '~propertyType-Fazenda/Sítio',
    status: '~propertyStatus-button',
    statusProntoPraMorar: '//XCUIElementTypeOther[@name="Pronto para morar"]',
    statusBreveLancamento: '//XCUIElementTypeOther[@name="Breve lançamento Lançamento Pronto para usar"]',
    statusEmConstrução: '~propertyStatus-Em construção',
    statusLançamento: '~propertyStatus-Lançamento'
},

field:{    
  valor: '~price',
  fillValor: '1500',
  iptu: '~taxFee',
  fillIptu: '100',
  condominio: '~condoFee',
  fillCondominio: '100',
  areaUtil: '~usableArea',
  fillareaUtil: '60',
  totalArea: '~totalArea',
  fillTotalArea: '70',
  cep: '~cep',
  fillCep: '88301430',
  numero: '~addressNumber',
  fillNumero: '333',
  complemento: '~additionalInfo',
  fillComplemento: 'ap 1501',
  selecioneFotoCapa: '//XCUIElementTypeOther[@name="add-cover"]',
  selecione50Fotos: '//XCUIElementTypeOther[@name="select-multiple-images-ad"]',
  selectPhotos: '//XCUIElementTypeStaticText[@name="Select Photos"]'
},

button:{
  continuar: '~continue-ad-post',
  add: '~Add',
  publicar: '~publish-ad-post',
  fechar: '~back-button',
  addQuarto: '~bedrooms-plus',
  addSuite: '~suites-plus',
  addBanheiro: '~toilets-plus',
  addEstacionamento: '~parkingLots-plus',
  backButton: '~back-button'
},

images:{
  primeiraFoto: '//XCUIElementTypeImage[@name="Foto, 30 de março de 2018, 20:14"]',
  segundaFoto: '//XCUIElementTypeImage[@name="Foto, 08 de agosto de 2012, 22:55"]',
  terceiraFoto: '//XCUIElementTypeImage[@name="Foto, 08 de agosto de 2012, 22:29"]',
  quartaFoto: '//XCUIElementTypeImage[@name="Foto, 08 de agosto de 2012, 19:52"]',
  quintaFoto: '//XCUIElementTypeImage[@name="Foto, 09 de outubro de 2009, 22:09"]',
  sextaFoto: '//XCUIElementTypeImage[@name="Foto, 13 de março de 2011, 00:17"]'
},

toggle: {
  divulgarEndereco: '~toggle'
},

opcoesTabPostar: {
  criarPostagem: '//XCUIElementTypeStaticText[@name="Criar Postagem"]',
  postarImovel: '//XCUIElementTypeStaticText[@name="Postar Imóvel"]',
  iniciarLive: '//XCUIElementTypeStaticText[@name="Iniciar Live"]',
  criarStory: '//XCUIElementTypeStaticText[@name="Criar Story"]',
  agendarLive: '//XCUIElementTypeStaticText[@name="Agendar live"]',
  cancelar: '//XCUIElementTypeStaticText[@name="Cancelar"]'
},

scroll: {
  elementoScroll: '//XCUIElementTypeOther[@name="Horizontal scroll bar, 1 page"]'
},

postarImovel(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
  I.wait(1)
  I.waitForElement(this.txt.header,100)
  I.see('Vamos começar?')
  I.waitForElement(this.dropbox.transacao,100)
  I.tap(this.dropbox.transacao,100)
  I.waitForElement(tipoTransacao,100)
  I.tap(tipoTransacao,100)
  I.waitForElement(this.dropbox.categoria,100)
  I.tap(this.dropbox.categoria,100)
  I.waitForElement(tipoCategoria,100)
  I.tap(tipoCategoria,100)
  I.wait(1)

  I.waitForElement(this.dropbox.tipo,100)
  I.tap(this.dropbox.tipo,100)
  I.waitForElement(tipoImovel,100)
  I.tap(tipoImovel,100)


  I.wait(7)
  if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
    I.wait(8)
    I.waitForElement(this.dropbox.status,100)
    I.tap(this.dropbox.status,100)
    I.waitForElement(statusDoImovel)
    I.tap(statusDoImovel)
  }

  I.wait(5)
  I.see('Valor')
  I.swipeUp(this.field.valor)
  I.waitForElement(this.field.valor)
  I.fillField(this.field.valor,valorImovel)
  I.waitForElement(this.field.iptu)
  I.fillField(this.field.iptu, valorIptu)
  I.waitForElement(this.field.condominio)

  if (valorCondominio != "") {
    I.waitForElement(this.field.condominio,100)
    I.fillField(this.field.condominio, valorCondominio)
  }

  I.wait(5)

  if (areaUtil != "" ) {
    I.see('Área útil')
    I.see('Essa medida corresponde ao tamanho do imóvel.')
    I.waitForElement(this.field.areaUtil,100)
    I.fillField(this.field.areaUtil,areaUtil)
}

  I.waitForElement(this.field.totalArea)
  I.fillField(this.field.totalArea,areaTotal)
  I.tap(this.button.continuar)
  I.wait(5)
  I.waitForElement(this.field.cep,100)
  I.tap(this.field.cep)
  let cepChar = cep
  for(let i=0;i < cepChar.length; i++){
      I.pressKey(cepChar.charAt(i));
  } 
  I.fillField(this.field.numero,numero)
  I.fillField(this.field.complemento,complemento)

  if(divulgarEndereco == true) {
    I.waitForElement(this.toggle.divulgarEndereco,100)
    I.tap(this.toggle.divulgarEndereco,100)
  }
  I.tap(this.button.continuar)
  I.wait(8)

  I.swipeUp(this.scroll.elementoScroll)

  if (qtdQuarto != "") {
    for (let i = 0; i < qtdQuarto; i++) {
        I.waitForElement(this.button.addQuarto);
        I.tap(this.button.addQuarto);
     }
  }

  // Etapas para definir a quantidade de suítes
  if (qtdSuite != "") {
    if (!tipoImovel.includes('Loft')) {
        for (let i = 0; i < qtdSuite; i++) {
            I.waitForElement(this.button.addSuite);
            I.tap(this.button.addSuite);
        }

    }
  }

   // Etapas para definir a quantidade de banheiros
  for (let i = 0; i < qtdBanheiro; i++) {
    I.waitForElement(this.button.addBanheiro);
    I.tap(this.button.addBanheiro);
  }

  // Etapas para definir a quantidade de garagens
  for (let i = 0; i < qtdGaragem; i++) {
    I.wait(5)
    I.waitForElement(this.button.addEstacionamento);
    I.tap(this.button.addEstacionamento);
   }
  
   if (addCover === true) {
    I.wait(3)
    for (let i = 0; i < 2; i++) {
      I.tap(this.field.selecioneFotoCapa)
    }
    I.wait(5)
    I.tap(this.images.primeiraFoto)
    I.wait(5)
   }

   I.wait(5)
 
 

  for (let i = 0; i < addAlbumPhoto; i++) {
    if (i === 0) {
      for (let i = 0; i < 2; i++) {
        I.tap(this.field.selecione50Fotos)
      }
      I.wait(8)
      I.tap(this.field.selectPhotos)
      I.wait(8)
      I.tap(this.images.primeiraFoto)
    } else if (i === 1) {
      I.wait(6)
      I.tap(this.images.segundaFoto)
      I.wait(6)
    } else if ( i === 2){
      I.wait(6)
      I.tap(this.images.terceiraFoto)
      I.wait(6)
    } else if (i===3){
      I.wait(6)
      I.tap(this.images.quartaFoto)
      I.wait(6)
    } else if (i===4){
      I.wait(6)
      I.tap(this.images.quintaFoto)
      I.wait(6)
    } else if (i===5){
      I.wait(6)
      I.tap(this.images.sextaFoto)
      I.wait(6)
    }
  }   

  if(addAlbumPhoto > 0){
    I.tap(this.button.add)
  } 
 
  I.wait(5)  
  I.tap(this.button.publicar)
  I.wait(20)
  I.see('Em Aprovação', this.txt.header);
  I.wait(10)
  I.tap(this.button.backButton)
 },

 postarImovelSemLinkGerenciarImoveis(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
  I.wait(1)
  I.waitForElement(this.txt.header,100)
  I.see('Vamos começar?')
  I.waitForElement(this.dropbox.transacao,100)
  I.tap(this.dropbox.transacao,100)
  I.waitForElement(tipoTransacao,100)
  I.tap(tipoTransacao,100)
  I.waitForElement(this.dropbox.categoria,100)
  I.tap(this.dropbox.categoria,100)
  I.waitForElement(tipoCategoria,100)
  I.tap(tipoCategoria,100)
  I.wait(1)

  I.waitForElement(this.dropbox.tipo,100)
  I.tap(this.dropbox.tipo,100)
  I.waitForElement(tipoImovel,100)
  I.tap(tipoImovel,100)


  I.wait(7)
  if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
    I.wait(8)
    I.waitForElement(this.dropbox.status,100)
    I.tap(this.dropbox.status,100)
    I.waitForElement(statusDoImovel)
    I.tap(statusDoImovel)
  }

  I.wait(5)
  I.see('Valor')
  I.swipeUp(this.field.valor)
  I.waitForElement(this.field.valor)
  I.fillField(this.field.valor,valorImovel)
  I.waitForElement(this.field.iptu)
  I.fillField(this.field.iptu, valorIptu)
  I.waitForElement(this.field.condominio)

  if (valorCondominio != "") {
    I.waitForElement(this.field.condominio,100)
    I.fillField(this.field.condominio, valorCondominio)
  }

  I.wait(5)

  if (areaUtil != "" ) {
    I.see('Área útil')
    I.see('Essa medida corresponde ao tamanho do imóvel.')
    I.waitForElement(this.field.areaUtil,100)
    I.fillField(this.field.areaUtil,areaUtil)
  }
  I.wait(5)
  I.tap(this.button.continuar)
  I.wait(5)
  I.waitForElement(this.field.cep,100)
  I.tap(this.field.cep)
  let cepChar = cep
  for(let i=0;i < cepChar.length; i++){
      I.pressKey(cepChar.charAt(i));
  } 
  I.fillField(this.field.numero,numero)
  I.fillField(this.field.complemento,complemento)

  if(divulgarEndereco == true) {
    I.waitForElement(this.toggle.divulgarEndereco,100)
    I.tap(this.toggle.divulgarEndereco,100)
  }
  I.tap(this.button.continuar)
  I.wait(8)

  I.swipeUp(this.scroll.elementoScroll)

  if (qtdQuarto != "") {
    for (let i = 0; i < qtdQuarto; i++) {
        I.waitForElement(this.button.addQuarto);
        I.tap(this.button.addQuarto);
     }
  }

  // Etapas para definir a quantidade de suítes
  if (qtdSuite != "") {
    if (!tipoImovel.includes('Loft')) {
        for (let i = 0; i < qtdSuite; i++) {
            I.waitForElement(this.button.addSuite);
            I.tap(this.button.addSuite);
        }

    }
  }

   // Etapas para definir a quantidade de banheiros
  for (let i = 0; i < qtdBanheiro; i++) {
    I.waitForElement(this.button.addBanheiro);
    I.tap(this.button.addBanheiro);
  }

  // Etapas para definir a quantidade de garagens
  for (let i = 0; i < qtdGaragem; i++) {
    I.wait(5)
    I.waitForElement(this.button.addEstacionamento);
    I.tap(this.button.addEstacionamento);
   }
  
   if (addCover === true) {
    I.wait(3)
    for (let i = 0; i < 2; i++) {
      I.tap(this.field.selecioneFotoCapa)
    }
    I.wait(5)
    I.tap(this.images.primeiraFoto)
    I.wait(5)
   }

   I.wait(5)
 
 

  for (let i = 0; i < addAlbumPhoto; i++) {
    if (i === 0) {
      for (let i = 0; i < 2; i++) {
        I.tap(this.field.selecione50Fotos)
      }
      I.wait(8)
      I.tap(this.field.selectPhotos)
      I.wait(8)
      I.tap(this.images.primeiraFoto)
    } else if (i === 1) {
      I.wait(6)
      I.tap(this.images.segundaFoto)
      I.wait(6)
    } else if ( i === 2){
      I.wait(6)
      I.tap(this.images.terceiraFoto)
      I.wait(6)
    } else if (i===3){
      I.wait(6)
      I.tap(this.images.quartaFoto)
      I.wait(6)
    } else if (i===4){
      I.wait(6)
      I.tap(this.images.quintaFoto)
      I.wait(6)
    } else if (i===5){
      I.wait(6)
      I.tap(this.images.sextaFoto)
      I.wait(6)
    }
  }   

  if(addAlbumPhoto > 0){
    I.tap(this.button.add)
  } 
 
  I.wait(5)  
  I.tap(this.button.publicar)
  I.wait(20)
  I.see('Em Aprovação', this.txt.header);
  I.wait(10)
  I.tap(this.button.backButton)
 },

 postarImovelVendaApto(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
  I.wait(1)
  I.waitForElement(this.txt.header,100)
  I.see('Vamos começar?')
  I.waitForElement(this.dropbox.transacao,100)
  I.tap(this.dropbox.transacao,100)
  I.waitForElement(tipoTransacao,100)
  I.tap(tipoTransacao,100)
  I.waitForElement(this.dropbox.categoria,100)
  I.tap(this.dropbox.categoria,100)
  I.waitForElement(tipoCategoria,100)
  I.tap(tipoCategoria,100)
  I.wait(1)

  I.waitForElement(this.dropbox.tipo,100)
  I.tap(this.dropbox.tipo,100)
  I.waitForElement(tipoImovel,100)
  I.tap(tipoImovel,100)


  I.wait(7)
  if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
    I.wait(8)
    I.waitForElement(this.dropbox.status,100)
    I.tap(this.dropbox.status,100)
    I.waitForElement(statusDoImovel)
    I.tap(statusDoImovel)
  }

  I.wait(5)
  I.see('Valor')
  I.swipeUp(this.field.valor)
  I.waitForElement(this.field.valor)
  I.fillField(this.field.valor,valorImovel)
  I.waitForElement(this.field.iptu)
  I.fillField(this.field.iptu, valorIptu)
  I.waitForElement(this.field.condominio)

  if (valorCondominio != "") {
    I.waitForElement(this.field.condominio,100)
    I.fillField(this.field.condominio, valorCondominio)
  }

  I.wait(5)

  if (areaUtil != "" ) {
    I.see('Área útil')
    I.see('Essa medida corresponde ao tamanho do imóvel.')
    I.waitForElement(this.field.areaUtil,100)
    I.fillField(this.field.areaUtil,areaUtil)
  }
  I.wait(5)
  I.tap(this.button.continuar)
  I.wait(5)
  I.waitForElement(this.field.cep,100)
  I.tap(this.field.cep)
  let cepChar = cep
  for(let i=0;i < cepChar.length; i++){
      I.pressKey(cepChar.charAt(i));
  } 
  I.fillField(this.field.numero,numero)
  I.fillField(this.field.complemento,complemento)

  if(divulgarEndereco == true) {
    I.waitForElement(this.toggle.divulgarEndereco,100)
    I.tap(this.toggle.divulgarEndereco,100)
  }
  I.tap(this.button.continuar)
  I.wait(8)

  I.swipeUp(this.scroll.elementoScroll)

  if (qtdQuarto != "") {
    for (let i = 0; i < qtdQuarto; i++) {
        I.waitForElement(this.button.addQuarto);
        I.tap(this.button.addQuarto);
     }
  }

  // Etapas para definir a quantidade de suítes
  if (qtdSuite != "") {
    if (!tipoImovel.includes('Loft')) {
        for (let i = 0; i < qtdSuite; i++) {
            I.waitForElement(this.button.addSuite);
            I.tap(this.button.addSuite);
        }

    }
  }

   // Etapas para definir a quantidade de banheiros
  for (let i = 0; i < qtdBanheiro; i++) {
    I.waitForElement(this.button.addBanheiro);
    I.tap(this.button.addBanheiro);
  }

  // Etapas para definir a quantidade de garagens
  for (let i = 0; i < qtdGaragem; i++) {
    I.wait(5)
    I.waitForElement(this.button.addEstacionamento);
    I.tap(this.button.addEstacionamento);
   }
  
   if (addCover === true) {
    I.wait(3)
    for (let i = 0; i < 2; i++) {
      I.tap(this.field.selecioneFotoCapa)
    }
    I.wait(5)
    I.tap(this.images.primeiraFoto)
    I.wait(5)
   }

   I.wait(5)
 
 

  for (let i = 0; i < addAlbumPhoto; i++) {
    if (i === 0) {
      for (let i = 0; i < 2; i++) {
        I.tap(this.field.selecione50Fotos)
      }
      I.wait(8)
      I.tap(this.field.selectPhotos)
      I.wait(8)
      I.tap(this.images.primeiraFoto)
    } else if (i === 1) {
      I.wait(6)
      I.tap(this.images.segundaFoto)
      I.wait(6)
    } else if ( i === 2){
      I.wait(6)
      I.tap(this.images.terceiraFoto)
      I.wait(6)
    } else if (i===3){
      I.wait(6)
      I.tap(this.images.quartaFoto)
      I.wait(6)
    } else if (i===4){
      I.wait(6)
      I.tap(this.images.quintaFoto)
      I.wait(6)
    } else if (i===5){
      I.wait(6)
      I.tap(this.images.sextaFoto)
      I.wait(6)
    }
  }   

  if(addAlbumPhoto > 0){
    I.tap(this.button.add)
  } 
 
  I.wait(5)  
  I.tap(this.button.publicar)
  I.wait(20)
  I.see('Em Aprovação', this.txt.header);
  I.wait(10)
  I.tap(this.button.backButton)
 },


 postarImovelFlatEmConstrucao(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
  I.wait(1)
  I.waitForElement(this.txt.header,100)
  I.see('Vamos começar?')
  I.waitForElement(this.dropbox.transacao,100)
  I.tap(this.dropbox.transacao,100)
  I.waitForElement(tipoTransacao,100)
  I.tap(tipoTransacao,100)
  I.waitForElement(this.dropbox.categoria,100)
  I.tap(this.dropbox.categoria,100)
  I.waitForElement(tipoCategoria,100)
  I.tap(tipoCategoria,100)
  I.wait(1)

  I.waitForElement(this.dropbox.tipo,100)
  I.tap(this.dropbox.tipo,100)
  I.waitForElement(tipoImovel,100)
  I.tap(tipoImovel,100)


  I.wait(7)
  if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
    I.wait(8)
    I.waitForElement(this.dropbox.status,100)
    I.tap(this.dropbox.status,100)
    I.waitForElement(statusDoImovel)
    I.tap(statusDoImovel)
  }

  I.wait(5)
  I.see('Valor')
  I.swipeUp(this.field.valor)
  I.waitForElement(this.field.valor)
  I.fillField(this.field.valor,valorImovel)
  I.waitForElement(this.field.iptu)
  I.fillField(this.field.iptu, valorIptu)
  I.waitForElement(this.field.condominio)

  if (valorCondominio != "") {
    I.waitForElement(this.field.condominio,100)
    I.fillField(this.field.condominio, valorCondominio)
  }

  I.wait(5)

  if (areaUtil != "" ) {
    I.see('Área útil')
    I.see('Essa medida corresponde ao tamanho do imóvel.')
    I.waitForElement(this.field.areaUtil,100)
    I.fillField(this.field.areaUtil,areaUtil)
  }
  I.wait(5)
  I.tap(this.button.continuar)
  I.wait(5)
  I.waitForElement(this.field.cep,100)
  I.tap(this.field.cep)
  let cepChar = cep
  for(let i=0;i < cepChar.length; i++){
      I.pressKey(cepChar.charAt(i));
  } 
  I.fillField(this.field.numero,numero)
  I.fillField(this.field.complemento,complemento)

  if(divulgarEndereco == true) {
    I.waitForElement(this.toggle.divulgarEndereco,100)
    I.tap(this.toggle.divulgarEndereco,100)
  }
  I.tap(this.button.continuar)
  I.wait(8)

  I.swipeUp(this.scroll.elementoScroll)

  if (qtdQuarto != "") {
    for (let i = 0; i < qtdQuarto; i++) {
        I.waitForElement(this.button.addQuarto);
        I.tap(this.button.addQuarto);
     }
  }

  // Etapas para definir a quantidade de suítes
  if (qtdSuite != "") {
    if (!tipoImovel.includes('Loft')) {
        for (let i = 0; i < qtdSuite; i++) {
            I.waitForElement(this.button.addSuite);
            I.tap(this.button.addSuite);
        }

    }
  }

   // Etapas para definir a quantidade de banheiros
  for (let i = 0; i < qtdBanheiro; i++) {
    I.waitForElement(this.button.addBanheiro);
    I.tap(this.button.addBanheiro);
  }

  // Etapas para definir a quantidade de garagens
  for (let i = 0; i < qtdGaragem; i++) {
    I.wait(5)
    I.waitForElement(this.button.addEstacionamento);
    I.tap(this.button.addEstacionamento);
   }
  
   if (addCover === true) {
    I.wait(3)
    for (let i = 0; i < 2; i++) {
      I.tap(this.field.selecioneFotoCapa)
    }
    I.wait(5)
    I.tap(this.images.primeiraFoto)
    I.wait(5)
   }

   I.wait(5)
 
 

  for (let i = 0; i < addAlbumPhoto; i++) {
    if (i === 0) {
      for (let i = 0; i < 2; i++) {
        I.tap(this.field.selecione50Fotos)
      }
      I.wait(8)
      I.tap(this.field.selectPhotos)
      I.wait(8)
      I.tap(this.images.primeiraFoto)
    } else if (i === 1) {
      I.wait(6)
      I.tap(this.images.segundaFoto)
      I.wait(6)
    } else if ( i === 2){
      I.wait(6)
      I.tap(this.images.terceiraFoto)
      I.wait(6)
    } else if (i===3){
      I.wait(6)
      I.tap(this.images.quartaFoto)
      I.wait(6)
    } else if (i===4){
      I.wait(6)
      I.tap(this.images.quintaFoto)
      I.wait(6)
    } else if (i===5){
      I.wait(6)
      I.tap(this.images.sextaFoto)
      I.wait(6)
    }
  }   

  if(addAlbumPhoto > 0){
    I.tap(this.button.add)
  } 
 
  I.wait(5)  
  I.tap(this.button.publicar)
  I.wait(20)
  I.see('Em Aprovação', this.txt.header);
  I.wait(10)
  I.tap(this.button.backButton)
 },

 postarImovelCorretorVendaTerreno(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
  I.wait(1)
  I.waitForElement(this.txt.header,100)
  I.see('Vamos começar?')
  I.waitForElement(this.dropbox.transacao,100)
  I.tap(this.dropbox.transacao,100)
  I.waitForElement(tipoTransacao,100)
  I.tap(tipoTransacao,100)
  I.waitForElement(this.dropbox.categoria,100)
  I.tap(this.dropbox.categoria,100)
  I.waitForElement(tipoCategoria,100)
  I.tap(tipoCategoria,100)
  I.wait(1)

  I.waitForElement(this.dropbox.tipo,100)
  I.tap(this.dropbox.tipo,100)
  I.waitForElement(tipoImovel,100)
  I.tap(tipoImovel,100)


  I.wait(7)
  if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
    I.wait(8)
    I.waitForElement(this.dropbox.status,100)
    I.tap(this.dropbox.status,100)
    I.waitForElement(statusDoImovel)
    I.tap(statusDoImovel)
  }

  I.wait(5)
  
  I.see('Valor')
  I.waitForElement(this.field.valor)
  I.fillField(this.field.valor,valorImovel)
  I.waitForElement(this.field.iptu)
  I.fillField(this.field.iptu, valorIptu)


  I.wait(2)
  I.waitForElement(this.field.totalArea)
  I.fillField(this.field.totalArea,areaTotal)
  I.tap(this.button.continuar)
  I.wait(5)
  I.waitForElement(this.field.cep,100)
  I.tap(this.field.cep)
  let cepChar = cep
  for(let i=0;i < cepChar.length; i++){
      I.pressKey(cepChar.charAt(i));
  } 
  I.wait(3)
  I.fillField(this.field.numero,numero)
  I.fillField(this.field.complemento,complemento)

  if(divulgarEndereco == true) {
    I.waitForElement(this.toggle.divulgarEndereco,100)
    I.tap(this.toggle.divulgarEndereco,100)
  }
  I.tap(this.button.continuar)
  I.wait(8)

  I.swipeUp(this.scroll.elementoScroll)

  if (qtdQuarto != "") {
    for (let i = 0; i < qtdQuarto; i++) {
        I.waitForElement(this.button.addQuarto);
        I.tap(this.button.addQuarto);
     }
  }

  // Etapas para definir a quantidade de suítes
  if (qtdSuite != "") {
    if (!tipoImovel.includes('Loft')) {
        for (let i = 0; i < qtdSuite; i++) {
            I.waitForElement(this.button.addSuite);
            I.tap(this.button.addSuite);
        }

    }
  }

   // Etapas para definir a quantidade de banheiros
  for (let i = 0; i < qtdBanheiro; i++) {
    I.waitForElement(this.button.addBanheiro);
    I.tap(this.button.addBanheiro);
  }

  // Etapas para definir a quantidade de garagens
  for (let i = 0; i < qtdGaragem; i++) {
    I.wait(5)
    I.waitForElement(this.button.addEstacionamento);
    I.tap(this.button.addEstacionamento);
   }
  
   if (addCover === true) {
    I.wait(3)
    for (let i = 0; i < 2; i++) {
      I.tap(this.field.selecioneFotoCapa)
    }
    I.wait(5)
    I.tap(this.images.primeiraFoto)
    I.wait(5)
   }

   I.wait(3)

  if(addAlbumPhoto > 0){
    I.tap(this.field.selecione50Fotos)
    I.wait(5)
    I.tap(this.field.selectPhotos)
    for (let i = 1; i < addAlbumPhoto; i++) {
      let elementPictures = `//XCUIElementTypeImage[${i}]`;
      I.tap(elementPictures)
      
    }  

    I.tap(this.button.add)
  } 

 
  I.wait(6)  
  I.tap(this.button.publicar)
  I.wait(27)
  I.see('Em Aprovação', this.txt.header);
  I.wait(10)
  I.tap(this.button.backButton)
},

tabCorretorPostarImovel() {
  I.wait(3)
  I.tap(this.opcoesTabPostar.postarImovel)
  I.wait(1)
},

postarImovelCorretorStudio(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
  I.wait(1)
  I.waitForElement(this.txt.header,100)
  I.see('Vamos começar?')
  I.waitForElement(this.dropbox.transacao,100)
  I.tap(this.dropbox.transacao,100)
  I.waitForElement(tipoTransacao,100)
  I.tap(tipoTransacao,100)
  I.waitForElement(this.dropbox.categoria,100)
  I.tap(this.dropbox.categoria,100)
  I.waitForElement(tipoCategoria,100)
  I.tap(tipoCategoria,100)
  I.wait(1)

  I.waitForElement(this.dropbox.tipo,100)
  I.tap(this.dropbox.tipo,100)
  I.waitForElement(tipoImovel,100)
  I.tap(tipoImovel,100)


  I.wait(7)
  if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
    I.wait(8)
    I.waitForElement(this.dropbox.status,100)
    I.tap(this.dropbox.status,100)
    I.waitForElement(statusDoImovel)
    I.tap(statusDoImovel)
  }

  I.wait(5)
  
  I.see('Valor')
  I.swipeUp(this.field.areaUtil)
  I.waitForElement(this.field.valor)
  I.fillField(this.field.valor,valorImovel)
  I.waitForElement(this.field.iptu)
  I.fillField(this.field.iptu, valorIptu)

  if (valorCondominio != "") {
    I.waitForElement(this.field.condominio,100)
    I.fillField(this.field.condominio, valorCondominio)
  }

  I.wait(2)
  I.tap(this.txt.valor)
  I.fillField(this.field.areaUtil,areaUtil)
  I.tap(this.button.continuar)
  I.wait(5)
  I.waitForElement(this.field.cep,100)
  I.tap(this.field.cep)
  let cepChar = cep
  for(let i=0;i < cepChar.length; i++){
      I.pressKey(cepChar.charAt(i));
  } 
  I.fillField(this.field.numero,numero)
  I.fillField(this.field.complemento,complemento)

  if(divulgarEndereco == true) {
    I.waitForElement(this.toggle.divulgarEndereco,100)
    I.tap(this.toggle.divulgarEndereco,100)
  }
  I.tap(this.button.continuar)
  I.wait(8)

  I.swipeUp(this.scroll.elementoScroll)

  if (qtdQuarto != "") {
    for (let i = 0; i < qtdQuarto; i++) {
        I.waitForElement(this.button.addQuarto);
        I.tap(this.button.addQuarto);
     }
  }

  // Etapas para definir a quantidade de suítes
  if (qtdSuite != "") {
    if (!tipoImovel.includes('Loft')) {
        for (let i = 0; i < qtdSuite; i++) {
            I.waitForElement(this.button.addSuite);
            I.tap(this.button.addSuite);
        }

    }
  }

   // Etapas para definir a quantidade de banheiros
  for (let i = 0; i < qtdBanheiro; i++) {
    I.waitForElement(this.button.addBanheiro);
    I.tap(this.button.addBanheiro);
  }

  // Etapas para definir a quantidade de garagens
  for (let i = 0; i < qtdGaragem; i++) {
    I.wait(5)
    I.waitForElement(this.button.addEstacionamento);
    I.tap(this.button.addEstacionamento);
   }
  
   if (addCover === true) {
    I.wait(3)
    for (let i = 0; i < 2; i++) {
      I.tap(this.field.selecioneFotoCapa)
    }
    I.wait(5)
    I.tap(this.images.primeiraFoto)
    I.wait(5)
   }

   I.wait(3)

  if(addAlbumPhoto > 0){
    I.tap(this.field.selecione50Fotos)
    I.wait(5)
    I.tap(this.field.selectPhotos)
    for (let i = 1; i < addAlbumPhoto; i++) {
      let elementPictures = `//XCUIElementTypeImage[${i}]`;
      I.tap(elementPictures)
      
    }  

    I.tap(this.button.add)
  } 

 
  I.wait(6)  
  I.tap(this.button.publicar)
  I.wait(25)
  I.see('Em Aprovação', this.txt.header);
  I.wait(10)
  I.tap(this.button.backButton)
},

postarImovelCorretor(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
  I.wait(1)
  I.waitForElement(this.txt.header,100)
  I.see('Vamos começar?')
  I.waitForElement(this.dropbox.transacao,100)
  I.tap(this.dropbox.transacao,100)
  I.waitForElement(tipoTransacao,100)
  I.tap(tipoTransacao,100)
  I.waitForElement(this.dropbox.categoria,100)
  I.tap(this.dropbox.categoria,100)
  I.waitForElement(tipoCategoria,100)
  I.tap(tipoCategoria,100)
  I.wait(1)

  I.waitForElement(this.dropbox.tipo,100)
  I.tap(this.dropbox.tipo,100)
  I.waitForElement(tipoImovel,100)
  I.tap(tipoImovel,100)


  I.wait(7)
  if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
    I.wait(8)
    I.waitForElement(this.dropbox.status,100)
    I.tap(this.dropbox.status,100)
    I.waitForElement(statusDoImovel)
    I.tap(statusDoImovel)
  }

  I.wait(5)
  
  I.see('Valor')
  I.swipeUp(this.field.areaUtil)
  I.waitForElement(this.field.valor)
  I.fillField(this.field.valor,valorImovel)
  I.waitForElement(this.field.iptu)
  I.fillField(this.field.iptu, valorIptu)

  if (valorCondominio != "") {
    I.waitForElement(this.field.condominio,100)
    I.fillField(this.field.condominio, valorCondominio)
  }

  I.wait(2)
  I.tap(this.txt.valor)
  I.fillField(this.field.areaUtil,areaUtil)
  I.waitForElement(this.field.totalArea)
  I.fillField(this.field.totalArea,areaTotal)
  I.tap(this.button.continuar)
  I.wait(5)
  I.waitForElement(this.field.cep,100)
  I.tap(this.field.cep)
  let cepChar = cep
  for(let i=0;i < cepChar.length; i++){
      I.pressKey(cepChar.charAt(i));
  } 
  I.fillField(this.field.numero,numero)
  I.fillField(this.field.complemento,complemento)

  if(divulgarEndereco == true) {
    I.waitForElement(this.toggle.divulgarEndereco,100)
    I.tap(this.toggle.divulgarEndereco,100)
  }
  I.tap(this.button.continuar)
  I.wait(8)

  I.swipeUp(this.scroll.elementoScroll)

  if (qtdQuarto != "") {
    for (let i = 0; i < qtdQuarto; i++) {
        I.waitForElement(this.button.addQuarto);
        I.tap(this.button.addQuarto);
     }
  }

  // Etapas para definir a quantidade de suítes
  if (qtdSuite != "") {
    if (!tipoImovel.includes('Loft')) {
        for (let i = 0; i < qtdSuite; i++) {
            I.waitForElement(this.button.addSuite);
            I.tap(this.button.addSuite);
        }

    }
  }

   // Etapas para definir a quantidade de banheiros
  for (let i = 0; i < qtdBanheiro; i++) {
    I.waitForElement(this.button.addBanheiro);
    I.tap(this.button.addBanheiro);
  }

  // Etapas para definir a quantidade de garagens
  for (let i = 0; i < qtdGaragem; i++) {
    I.wait(5)
    I.waitForElement(this.button.addEstacionamento);
    I.tap(this.button.addEstacionamento);
   }
  
   if (addCover === true) {
    I.wait(3)
    for (let i = 0; i < 2; i++) {
      I.tap(this.field.selecioneFotoCapa)
    }
    I.wait(5)
    I.tap(this.images.primeiraFoto)
    I.wait(5)
   }

   I.wait(3)

  if(addAlbumPhoto > 0){
    I.tap(this.field.selecione50Fotos)
    I.wait(5)
    I.tap(this.field.selectPhotos)
    for (let i = 1; i < addAlbumPhoto; i++) {
      let elementPictures = `//XCUIElementTypeImage[${i}]`;
      I.tap(elementPictures)
      
    }  

    I.tap(this.button.add)
  } 

 
  I.wait(6)  
  I.tap(this.button.publicar)
  I.wait(25)
  I.see('Em Aprovação', this.txt.header);
  I.wait(10)
  I.tap(this.button.backButton)
},

tabCorretorPostarImovel() {
  I.wait(3)
  I.tap(this.opcoesTabPostar.postarImovel)
  I.wait(1)
},

postarImovelRural(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
    I.wait(1)
    I.waitForElement(this.txt.header,100)
    I.see('Vamos começar?')
    I.waitForElement(this.dropbox.transacao,100)
    I.tap(this.dropbox.transacao,100)
    I.waitForElement(tipoTransacao,100)
    I.tap(tipoTransacao,100)
    I.waitForElement(this.dropbox.categoria,100)
    I.tap(this.dropbox.categoria,100)
    I.waitForElement(tipoCategoria,100)
    I.tap(tipoCategoria,100)
    I.wait(1)

    I.waitForElement(this.dropbox.tipo,100)
    I.tap(this.dropbox.tipo,100)
    I.waitForElement(tipoImovel,100)
    I.tap(tipoImovel,100)


    I.wait(7)
    if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
      I.wait(8)
      I.waitForElement(this.dropbox.status,100)
      I.tap(this.dropbox.status,100)
      I.waitForElement(statusDoImovel)
      I.tap(statusDoImovel)
    }

    I.wait(5)
    
    I.see('Valor')
    I.swipeUp(this.field.areaUtil)
    I.waitForElement(this.field.valor)
    I.fillField(this.field.valor,valorImovel)
    I.waitForElement(this.field.iptu)
    I.fillField(this.field.iptu, valorIptu)

    if (valorCondominio != "") {
      I.waitForElement(this.field.condominio,100)
      I.fillField(this.field.condominio, valorCondominio)
    }


    I.wait(2)
    I.tap(this.txt.valor)
    I.fillField(this.field.areaUtil,areaUtil)
    I.waitForElement(this.field.totalArea)
    I.fillField(this.field.totalArea,areaTotal)
    I.tap(this.button.continuar)
    I.wait(5)
    I.waitForElement(this.field.cep,100)
    I.tap(this.field.cep)
    let cepChar = cep
    for(let i=0;i < cepChar.length; i++){
        I.pressKey(cepChar.charAt(i));
    } 
    I.fillField(this.field.numero,numero)
    I.fillField(this.field.complemento,complemento)

    if(divulgarEndereco == true) {
      I.waitForElement(this.toggle.divulgarEndereco,100)
      I.tap(this.toggle.divulgarEndereco,100)
    }
    I.tap(this.button.continuar)
    I.wait(8)

    I.swipeUp(this.scroll.elementoScroll)

    if (qtdQuarto != "") {
      for (let i = 0; i < qtdQuarto; i++) {
          I.waitForElement(this.button.addQuarto);
          I.tap(this.button.addQuarto);
       }
    }

    // Etapas para definir a quantidade de suítes
    if (qtdSuite != "") {
      if (!tipoImovel.includes('Loft')) {
          for (let i = 0; i < qtdSuite; i++) {
              I.waitForElement(this.button.addSuite);
              I.tap(this.button.addSuite);
          }
  
      }
    }
  
     // Etapas para definir a quantidade de banheiros
    for (let i = 0; i < qtdBanheiro; i++) {
      I.waitForElement(this.button.addBanheiro);
      I.tap(this.button.addBanheiro);
    }

    // Etapas para definir a quantidade de garagens
    for (let i = 0; i < qtdGaragem; i++) {
      I.wait(5)
      I.waitForElement(this.button.addEstacionamento);
      I.tap(this.button.addEstacionamento);
     }
    
     if (addCover === true) {
      I.wait(3)
      for (let i = 0; i < 2; i++) {
        I.tap(this.field.selecioneFotoCapa)
      }
      I.wait(5)
      I.tap(this.images.primeiraFoto)
      I.wait(5)
     }

     I.wait(5)

    for (let i = 0; i < addAlbumPhoto; i++) {
      if (i === 0) {
        for (let i = 0; i < 2; i++) {
          I.tap(this.field.selecione50Fotos)
        }
        I.wait(8)
        I.tap(this.images.primeiraFoto)
      } else if (i === 1) {
        I.wait(6)
        I.tap(this.images.segundaFoto)
        I.wait(6)
      } else if ( i === 2){
        I.wait(6)
        I.tap(this.images.terceiraFoto)
        I.wait(6)
      } else if (i === 3){
        I.wait(6)
        I.tap(this.images.quartaFoto)
        I.wait(6)
      } else if (i===5){
        I.wait(6)
        I.tap(this.images.quintaFoto)
        I.wait(6)
      } else if (i===6){
        I.wait(6)
        I.tap(this.images.sextaFoto)
        I.wait(6)
      }
    }   

    if(addAlbumPhoto > 0){
      I.tap(this.button.add)
    } 
  
    I.wait(6)  
    I.tap(this.button.publicar)
    I.wait(20)
    I.see('Em Aprovação', this.txt.header);
    I.wait(10)
    I.tap(this.button.backButton)
  },

  tabCorretorPostarImovel() {
    I.wait(3)
    I.tap(this.opcoesTabPostar.postarImovel)
    I.wait(1)
  },

  
  postarImovelGalpao(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
    I.wait(1)
    I.waitForElement(this.txt.header,100)
    I.see('Vamos começar?')
    I.waitForElement(this.dropbox.transacao,100)
    I.tap(this.dropbox.transacao,100)
    I.waitForElement(tipoTransacao,100)
    I.tap(tipoTransacao,100)
    I.waitForElement(this.dropbox.categoria,100)
    I.tap(this.dropbox.categoria,100)
    I.waitForElement(tipoCategoria,100)
    I.tap(tipoCategoria,100)
    I.wait(1)

    I.waitForElement(this.dropbox.tipo,100)
    I.tap(this.dropbox.tipo,100)
    I.waitForElement(tipoImovel,100)
    I.tap(tipoImovel,100)


    I.wait(7)
    if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
      I.wait(8)
      I.waitForElement(this.dropbox.status,100)
      I.tap(this.dropbox.status,100)
      I.waitForElement(statusDoImovel)
      I.tap(statusDoImovel)
    }

    I.wait(5)
    
    I.see('Valor')
    I.swipeUp(this.field.areaUtil)
    I.waitForElement(this.field.valor)
    I.fillField(this.field.valor,valorImovel)
    I.waitForElement(this.field.iptu)
    I.fillField(this.field.iptu, valorIptu)

    I.wait(2)
    I.tap(this.txt.valor)
    I.fillField(this.field.areaUtil,areaUtil)
    I.waitForElement(this.field.totalArea)
    I.fillField(this.field.totalArea,areaTotal)
    I.tap(this.button.continuar)
    I.wait(5)
    I.waitForElement(this.field.cep,100)
    I.tap(this.field.cep)
    let cepChar = cep
    for(let i=0;i < cepChar.length; i++){
        I.pressKey(cepChar.charAt(i));
    } 
    I.fillField(this.field.numero,numero)
    I.fillField(this.field.complemento,complemento)

    if(divulgarEndereco == true) {
      I.waitForElement(this.toggle.divulgarEndereco,100)
      I.tap(this.toggle.divulgarEndereco,100)
    }
    I.tap(this.button.continuar)
    I.wait(8)

    I.swipeUp(this.scroll.elementoScroll)

    if (qtdQuarto != "") {
      for (let i = 0; i < qtdQuarto; i++) {
          I.waitForElement(this.button.addQuarto);
          I.tap(this.button.addQuarto);
       }
    }

    // Etapas para definir a quantidade de suítes
    if (qtdSuite != "") {
      if (!tipoImovel.includes('Loft')) {
          for (let i = 0; i < qtdSuite; i++) {
              I.waitForElement(this.button.addSuite);
              I.tap(this.button.addSuite);
          }
  
      }
    }
  
     // Etapas para definir a quantidade de banheiros
    for (let i = 0; i < qtdBanheiro; i++) {
      I.waitForElement(this.button.addBanheiro);
      I.tap(this.button.addBanheiro);
    }

    // Etapas para definir a quantidade de garagens
    for (let i = 0; i < qtdGaragem; i++) {
      I.wait(5)
      I.waitForElement(this.button.addEstacionamento);
      I.tap(this.button.addEstacionamento);
     }
    
     if (addCover === true) {
      I.wait(3)
      for (let i = 0; i < 2; i++) {
        I.tap(this.field.selecioneFotoCapa)
      }
      I.wait(5)
      I.tap(this.images.primeiraFoto)
      I.wait(5)
     }

     I.wait(5)

    for (let i = 0; i < addAlbumPhoto; i++) {
      if (i === 0) {
        for (let i = 0; i < 2; i++) {
          I.tap(this.field.selecione50Fotos)
        }
        I.wait(5)
        I.tap(this.field.selectPhotos)
        I.wait(6)
        I.tap(this.images.primeiraFoto)
      } else if (i === 1) {
        I.wait(6)
        I.tap(this.images.segundaFoto)
        I.wait(6)
      } else if ( i === 2){
        I.wait(6)
        I.tap(this.images.terceiraFoto)
        I.wait(6)
      } else if (i===3){
        I.wait(6)
        I.tap(this.images.quartaFoto)
        I.wait(6)
      } else if (i===5){
        I.wait(6)
        I.tap(this.images.quintaFoto)
        I.wait(6)
      } else if (i===6){
        I.wait(6)
        I.tap(this.images.sextaFoto)
        I.wait(6)
      }
    }   

    if(addAlbumPhoto > 0){
      I.tap(this.button.add)
    } 
   
    I.wait(5)  
    I.tap(this.button.publicar)
    I.wait(20)
    I.see('Em Aprovação', this.txt.header);
    I.wait(10)
    I.tap(this.button.backButton)
  },

  postarImovelSemCondominio(tipoTransacao,tipoCategoria,tipoImovel,statusDoImovel,valorImovel,valorIptu,valorCondominio,areaUtil,areaTotal,cep,complemento,numero,divulgarEndereco = Boolean,corretorPostagemPublica = Boolean,addCover=Boolean,addAlbumPhoto = Number,qtdQuarto = Number,qtdBanheiro = Number,qtdSuite = Number,qtdGaragem = Number){
    I.wait(1)
    I.waitForElement(this.txt.header,100)
    I.see('Vamos começar?')
    I.waitForElement(this.dropbox.transacao,100)
    I.tap(this.dropbox.transacao,100)
    I.waitForElement(tipoTransacao,100)
    I.tap(tipoTransacao,100)
    I.waitForElement(this.dropbox.categoria,100)
    I.tap(this.dropbox.categoria,100)
    I.waitForElement(tipoCategoria,100)
    I.tap(tipoCategoria,100)
    I.wait(1)

    I.waitForElement(this.dropbox.tipo,100)
    I.tap(this.dropbox.tipo,100)
    I.waitForElement(tipoImovel,100)
    I.tap(tipoImovel,100)


    I.wait(7)
    if (tipoTransacao.includes("Vender") && statusDoImovel != "") {
      I.wait(8)
      I.waitForElement(this.dropbox.status,100)
      I.tap(this.dropbox.status,100)
      I.waitForElement(statusDoImovel)
      I.tap(statusDoImovel)
    }

    I.wait(5)
    
    I.see('Valor')
    I.swipeUp(this.field.areaUtil)
    I.waitForElement(this.field.valor)
    I.fillField(this.field.valor,valorImovel)
    I.waitForElement(this.field.iptu)
    I.fillField(this.field.iptu, valorIptu)

    I.wait(2)
    I.tap(this.txt.valor)
    I.fillField(this.field.areaUtil,areaUtil)
    I.waitForElement(this.field.totalArea)
    I.fillField(this.field.totalArea,areaTotal)
    I.tap(this.button.continuar)
    I.wait(5)
    I.waitForElement(this.field.cep,100)
    I.tap(this.field.cep)
    let cepChar = cep
    for(let i=0;i < cepChar.length; i++){
        I.pressKey(cepChar.charAt(i));
    } 
    I.fillField(this.field.numero,numero)
    I.fillField(this.field.complemento,complemento)

    if(divulgarEndereco == true) {
      I.waitForElement(this.toggle.divulgarEndereco,100)
      I.tap(this.toggle.divulgarEndereco,100)
    }
    I.tap(this.button.continuar)
    I.wait(8)

    I.swipeUp(this.scroll.elementoScroll)

    if (qtdQuarto != "") {
      for (let i = 0; i < qtdQuarto; i++) {
          I.waitForElement(this.button.addQuarto);
          I.tap(this.button.addQuarto);
       }
    }

    // Etapas para definir a quantidade de suítes
    if (qtdSuite != "") {
      if (!tipoImovel.includes('Loft')) {
          for (let i = 0; i < qtdSuite; i++) {
              I.waitForElement(this.button.addSuite);
              I.tap(this.button.addSuite);
          }
  
      }
    }
  
     // Etapas para definir a quantidade de banheiros
    for (let i = 0; i < qtdBanheiro; i++) {
      I.waitForElement(this.button.addBanheiro);
      I.tap(this.button.addBanheiro);
    }

    // Etapas para definir a quantidade de garagens
    for (let i = 0; i < qtdGaragem; i++) {
      I.wait(5)
      I.waitForElement(this.button.addEstacionamento);
      I.tap(this.button.addEstacionamento);
     }
    
     if (addCover === true) {
      I.wait(3)
      for (let i = 0; i < 2; i++) {
        I.tap(this.field.selecioneFotoCapa)
      }
      I.wait(5)
      I.tap(this.images.primeiraFoto)
      I.wait(5)
     }

     I.wait(5)

    for (let i = 0; i < addAlbumPhoto; i++) {
      if (i === 0) {
        for (let i = 0; i < 2; i++) {
          I.tap(this.field.selecione50Fotos)
        }
        I.wait(5)
        I.tap(this.field.selectPhotos)
        I.wait(6)
        I.tap(this.images.primeiraFoto)
      } else if (i === 1) {
        I.wait(6)
        I.tap(this.images.segundaFoto)
        I.wait(6)
      } else if ( i === 2){
        I.wait(6)
        I.tap(this.images.terceiraFoto)
        I.wait(6)
      } else if (i===3){
        I.wait(6)
        I.tap(this.images.quartaFoto)
        I.wait(6)
      } else if (i===5){
        I.wait(6)
        I.tap(this.images.quintaFoto)
        I.wait(6)
      } else if (i===6){
        I.wait(6)
        I.tap(this.images.sextaFoto)
        I.wait(6)
      }
    }   

    if(addAlbumPhoto > 0){
      I.tap(this.button.add)
    } 
   
    I.wait(5)  
    I.tap(this.button.publicar)
    I.wait(20)
    I.see('Em Aprovação', this.txt.header);
    I.wait(10)
    I.tap(this.button.backButton)
  },

  tabCorretorPostarImovel() {
    I.wait(3)
    I.tap(this.opcoesTabPostar.postarImovel)
    I.wait(1)
  },

  tabCorretorPostarConteudo() {
    I.wait(3)
    I.tap(this.opcoesTabPostar.criarPostagem)
    I.wait(1)
  },
}










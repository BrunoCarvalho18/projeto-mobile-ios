const { I } = inject();

module.exports = {

  assertUserLoggedManualTeste(){
    I.wait(3)
    I.see("Manual  Teste")
  },

  assertUserLogged(nome,sobrenome){
    I.wait(6)
    I.see(`${nome} ${sobrenome}`)
  },

  assertUserLoggedAgenteTeste(){
    I.wait(3)
    I.see("Agente Teste")
  },

  assertUserLoggedCorretorTeste(){
    I.wait(3)
    I.see("Corretor Teste")
  },

  assertUserLoggedImobiliariaTeste(){
    I.wait(3)
    I.see("Imobiliaria Teste")
  }

  
}

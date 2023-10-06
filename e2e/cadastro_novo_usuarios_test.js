const fileData = require('../data/data.js');
const home = require('../pages/home.js');
const loggedarea = require('../pages/loggedarea.js');
const cadastro = require('../pages/cadastro.js');
const { I,homePage, loginPage,perfilPage } = inject();


Feature('Cadastro - Novo Cadastro');

Scenario('CTP107 - Cadastro - telefone incorreto', ({I}) => {
    cadastro.excluirCadastro('cadastro.teste@comprealugueagora.com.br','Teste@123')
    homePage.clickTabEntrar()
    loginPage.criarCadastro()
    cadastro.preencherEmail('cadastro.teste@comprealugueagora.com.br')
    cadastro.continuarAposPreenchEmail()
    cadastro.preencherSenha('Teste@123')
    cadastro.prencherConfirmarSenha('Teste@123')
    cadastro.btnSalvarSenha()
    cadastro.btnContinuar()
    cadastro.preencherInfComplementares("Teste","Teste", '87620076')
    cadastro.btnContinuar()
    I.see('Número de telefone inválido')
});

Scenario('CTP106 - Cadastro - senhas divergentes ', ({I}) => {
    cadastro.excluirCadastro('cadastro.teste@comprealugueagora.com.br','Teste@123')
    homePage.clickTabEntrar()
    loginPage.criarCadastro()
    cadastro.preencherEmail('cadastro.teste@comprealugueagora.com.br')
    cadastro.continuarAposPreenchEmail()
    cadastro.preencherSenha('Tste@123')
    cadastro.prencherConfirmarSenha('Teste@123')
    cadastro.btnSalvarSenha()
    I.see('Criar senha')
});

Scenario('CTP108 - Cadastro - sem nome e sobrenome ', ({I}) => {
    cadastro.excluirCadastro('cadastro.teste@comprealugueagora.com.br','Teste@123')
    homePage.clickTabEntrar()
    loginPage.criarCadastro()
    cadastro.preencherEmail('cadastro.teste@comprealugueagora.com.br')
    cadastro.continuarAposPreenchEmail()
    cadastro.preencherSenha('Teste@123')
    cadastro.prencherConfirmarSenha('Teste@123')
    cadastro.btnSalvarSenha()
    cadastro.btnContinuar()
    cadastro.preencherInfComplementares("","", '11987620076')
    cadastro.btnContinuar()
    I.see('Informe seu nome, sobrenome e telefone')
});

Scenario('CTP109 - Cadastro - código de verificação incorreto ', ({I}) => {
    cadastro.excluirCadastro('cadastro.teste@comprealugueagora.com.br','Teste@123')
    homePage.clickTabEntrar()
    loginPage.criarCadastro()
    cadastro.preencherEmail('cadastro.teste@comprealugueagora.com.br')
    cadastro.continuarAposPreenchEmail()
    cadastro.preencherSenha('Teste@123')
    cadastro.prencherConfirmarSenha('Teste@123')
    cadastro.btnSalvarSenha()
    cadastro.preencherInfComplementares("Teste","Teste", '11987620076')
    cadastro.btnContinuar()
    I.wait(30)
    cadastro.preencherCodVerificacao("456123")
    cadastro.btnSalvar();
    I.see('O código de verificação da credencial não é válido.')
});

Scenario('CTP110 - Cadastro - Novo cadastro com sucesso ', ({I}) => {
    cadastro.excluirCadastro('cadastro.teste@comprealugueagora.com.br','Teste@123')
    homePage.clickTabEntrar()
    loginPage.criarCadastro()
    cadastro.preencherEmail('cadastro.teste@comprealugueagora.com.br')
    cadastro.continuarAposPreenchEmail()
    cadastro.preencherSenha('Teste@123')
    cadastro.prencherConfirmarSenha('Teste@123')
    cadastro.btnSalvarSenha()
    cadastro.preencherInfComplementares("Cadastro","Teste", '11987620076')
    cadastro.btnContinuar()
    cadastro.preencherCodVerificacao("123456")
    cadastro.btnSalvar()
    homePage.clickTabPerfil()
    loggedarea.assertUserLogged("Cadastro","Teste")
    perfilPage.clickButtonConfigIconPfl()
    perfilPage.clickLabelSair()
    perfilPage.clickButtonSair()
});


Scenario('CTP111 - Cadastro - cadastro com email já cadastrado', ({I}) => {

    homePage.clickTabEntrar()
    loginPage.criarCadastro()
    cadastro.preencherEmail('cadastro.teste@comprealugueagora.com.br')
    cadastro.continuarAposPreenchEmail()
    I.wait(5)
    I.see('Tente outro email.')

});

Scenario('CTP112 - Cadastro - com email incompleto', ({I}) => {
    homePage.clickTabEntrar()
    loginPage.criarCadastro()
    cadastro.preencherEmail('cadastro.testecomprealugueagora.com.br')
    cadastro.continuarAposPreenchEmail()
    I.wait(5)
    I.see('Adicione um email valido.')

});

Scenario('Delete User api request', ({I}) => {
    cadastro.excluirCadastro('cadastro.teste@comprealugueagora.com.br','Teste@123')
});
## 🚀 Projeto de automação de testes regressivos iOS

## 🛠️  Tecnologias
 
[Node.js](https://nodejs.org/) v16 ou superior para executar;

[CodeceptJS](https://codecept.io/) Framework usado para automação;

[Appium](https://appium.io/docs/en/2.1/) Framework que interage com os elementos no celular;

## Em seguida execute os seguintes comandos usando o terminal do mac:

- npm install -g appium@next 
- appium driver install uiautomator2 
- appium driver install xcuitest
- appium plugin install relaxed-caps 
- npm install codeceptjs webdriverio —save 
- npm i mochawesome mocha -D


## 👨🏻‍💻 Como executar o projeto:
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

 - `npx codeceptjs run --steps`
 - `npx codepcetjs run e2e/login_test.js`
 




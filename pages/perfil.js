const { I } = inject();

module.exports = {

  // insert your locators and methods here
  buttons:{
    buttonConfigIconPfl: '~config-icon-pfl',
    buttonSair: '//XCUIElementTypeOther[@name="logout-modal-btn"]'
  }, 

  labels:{
   labelSair: '//XCUIElementTypeButton[@name="logoutButton"]'
  }, 


  clickButtonConfigIconPfl(){
    I.waitForElement(this.buttons.buttonConfigIconPfl, 10)
    I.tap(this.buttons.buttonConfigIconPfl)
  },

  clickLabelSair(){
    I.waitForElement(this.labels.labelSair, 15)
    I.tap(this.labels.labelSair)
  },

  clickButtonSair(){
    I.waitForElement(this.buttons.buttonSair, 10)
    I.tap(this.buttons.buttonSair)
    I.wait(3)
  },


}

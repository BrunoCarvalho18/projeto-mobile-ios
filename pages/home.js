const { I } = inject();

module.exports = {

  tabs: {
    tabEntrar: '~tabBarLogin',
    tabPerfil: '~tabBarLogout',
    tabPostar: '~tabBarCreateAds',
    tabCreatePosts: '~tabBarCreatePosts'
  },

  button: {
    registerButton: '~registerButton'
  },

  

  clickTabEntrar(){
    I.waitForElement(this.tabs.tabEntrar, 200)
    I.tap(this.tabs.tabEntrar)
  },

  clickTabPerfil(){
    I.waitForElement(this.tabs.tabPerfil, 200)
    I.wait(5)
    I.tap(this.tabs.tabPerfil)
  },

  clickTabPostar(){
    I.waitForElement(this.tabs.tabPostar, 200)
    I.wait(6)
    I.tap(this.tabs.tabPostar)
  },

  clickTabPostarImboliaria(){
    I.waitForElement(this.tabs.tabCreatePosts, 200)
    I.wait(6)
    I.tap(this.tabs.tabCreatePosts)
  },

  clickTabRegisterButton(){
    I.waitForElement(this.button.registerButton, 200)
    I.wait(6)
    I.tap(this.button.registerButton)
  }

  
}

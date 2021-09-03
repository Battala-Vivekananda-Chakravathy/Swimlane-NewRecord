var HomePage = function() {
   this.wdwMainSiteLogo = element(by.className('logo ng-trigger ng-trigger-logoAnimationState xs'));
   this.newIcon = element(by.css('[class="ngx-icon ngx ngx-plus ng-star-inserted"]'));
   this.save = element(by.xpath('//span[.="Save"]'));
   this.landingPage = element(by.css('[class^="ng-tns-c18-24 ng-trigger"]'));
   this.navMenu = element(by.css('[class="nav-menu"]'));
   this.empInfo = element(by.xpath('//div[@data-id="5fe1259a5b026de867ba029a"]'));
   this.timeSpent = element(by.xpath('//div[@class="modal-content"]//input'));
   this.saveOnPopup = element(by.repeater('button in options.buttons'));
   this.dropDownToggle = element(by.css('[class="ngx-dropdown-toggle"]'));
   this.popup = element(by.css('[class="modal-content"]'));
   this.deleteIcon = element(by.css('[class="icon has-text ngx-icon ngx-trash"]'));
   

   this.username = element(by.xpath('//input[@id="input-1"]'));
   this.pwd = element(by.xpath('//input[@id="input-2"]'));
   this.login = element(by.xpath('//span[.="Login"]'));
   this.logout = element(by.xpath('//a[.="Log Out"]'));
   this.loginFailed = element(by.css('[class^="login-error"]'));
};

module.exports = HomePage;

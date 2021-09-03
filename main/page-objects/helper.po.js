var Helper = function() {
	 this.EC = protractor.ExpectedConditions;

	 this.waitForElementToBeVisible = function (elm) {
		browser.wait(this.EC.visibilityOf(elm), 20000);
	};

	this.switchToNonAngularPage = function() {
		browser.waitForAngularEnabled(false);
	};

	this.switchToAngularPage = function() {
		browser.waitForAngularEnabled(true);
	};

}

module.exports = Helper;

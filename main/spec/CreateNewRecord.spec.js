var Helper = require('../page-objects/helper.po.js');
var HomePage = require('../page-objects/homepage.po.js');

var homePage = new HomePage(),
helper = new Helper();

describe('Swimlane', function() {

	it('Login to the application with invalid credentials', async function() {
		await browser.driver.get(browser.params.url);
		var userName = 'vivekananda.chakravarthy';
		var password = '***invalid**credentials***';

		expect(browser.wait(helper.EC.urlContains('/login'), 20000));
		helper.waitForElementToBeVisible(homePage.wdwMainSiteLogo);
		expect(homePage.wdwMainSiteLogo.isPresent()).toBeTruthy();
		await homePage.username.sendKeys(userName);
		await homePage.pwd.sendKeys(password);
		await homePage.login.click();

		var failed = await homePage.loginFailed;
		if(failed.isDisplayed()){
			// await browser.close();
      			// await process.exit("login failed!, invalid credentials");
			console.log("******login failed!, invalid credentials*************");
		}
	});

	it('Login to the application with valid credentials', async function() {
		var userName = 'vivekananda.chakravarthy';
		var password = '****valid**credentials****';

		await homePage.username.clear();
		await homePage.pwd.clear();
		await homePage.username.sendKeys(userName);
		await homePage.pwd.sendKeys(password);
		await homePage.login.click();
		await browser.sleep(3000);
	});

	it('Click on the new icon', function() {
		helper.switchToNonAngularPage();
		homePage.landingPage.isPresent();
		helper.waitForElementToBeVisible(homePage.navMenu);
		homePage.newIcon.click();
		helper.waitForElementToBeVisible(homePage.empInfo);
	});

	it('Enter the employee information fields', async function() {
		const values = ["Vivekananda", "Battala", "Hyderabad", "Telangana", "147258369", "502319", "xyz@gmail.com", "Record"];
		var elements = await browser.driver.findElements(by.xpath('//div[@ng-repeat="layout in row"][@class="col-md-6"]//input'));
		for(var i = 0; i < values.length; i++){
			elements[i].sendKeys(values[i]);
		}
		browser.driver.findElement(by.xpath('//div[@ng-repeat="layout in row"]//textarea')).sendKeys("#14-93, sree ram nagar colony, hyderabad");
	});

	it('Save the employee information fields', async function() {
		helper.waitForElementToBeVisible(homePage.save);
		await homePage.save.click();
		expect(await homePage.popup.isPresent()).toBeTruthy();
		await homePage.timeSpent.sendKeys("3h 30m");
		await homePage.saveOnPopup.click();
	});

	it('Delete the employee personal information', async function() {
		helper.waitForElementToBeVisible(homePage.deleteIcon);
		await homePage.deleteIcon.click();
		expect(await homePage.popup.isPresent()).toBeTruthy();
		await homePage.saveOnPopup.click();
	});

	it('Logout the application', async function() {
		helper.waitForElementToBeVisible(await homePage.dropDownToggle);
		await homePage.dropDownToggle.click();
		await homePage.logout.click();
		browser.sleep(2000);
	});

});

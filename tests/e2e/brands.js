
var env = require('../env');
var helpers = require('../helpers');
var moment = require('moment');
var path = require('path');
describe('Brands Controller', function() {


	var originalTimeout;

	beforeEach(function() {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	});

	afterEach(function() {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	});

	beforeAll(function() {
	});

	// it('should be on dashboard', function() {

	//   browser.getCurrentUrl().then(function(url){
	//   	expect(url).toEqual(env.baseUrl + '#!/dashboard');
	//   });

	// });


	it('should update the brand', function() {
		//Should Ensure All deals are deleted before deleting a brand

		element(by.xpath('//ul[contains(@class, "page-sidebar-menu")]/li[3]/a')).click();

		//Add Brand
		browser.sleep(1000);
		element(by.xpath('//a[@ui-sref="dashboard.brand"]')).click();

		browser.sleep(5000);

		expect(element.all(by.xpath('//a[@ng-click="vm.deleteBrand($event.currentTarget, brand)"]')).then(function(buttons){ return buttons.length;})) 
		.toBeGreaterThanOrEqual(1);


		/**************************TEST on Update Brand*******************************/
		browser.sleep(5000);
		element(by.xpath('//a[@ui-sref="dashboard.brand.edit({id:brand.uid})"]')).click();
		element(by.model('vm.form.name')).sendKeys(' Updated');
		browser.sleep(2000);
		element(by.xpath('//div[contains(@class, "form-actions")]//button')).click();
		expect(browser.getCurrentUrl()).toContain('/dashboard/brand');
		expect(element(by.binding('brand.name')).getText())
		.toEqual('TEST BRAND Updated');
		/*****************************************************************************/

	});
});	
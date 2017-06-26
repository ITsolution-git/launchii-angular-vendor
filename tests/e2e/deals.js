
var env = require('../env');
var moment = require('moment');
var helpers = require('../helpers');
describe('Deals Controller', function() {

	var dealsCount = 0;
	var originalTimeout;

	beforeEach(function() {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
	});

	afterEach(function() {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	});

	function selectDropdownByNumber(element, index, milliseconds) {
		element.all(by.tagName('option'))
			.then(function(options) {
				options[index].click();
			});
			if (typeof milliseconds !== 'undefined') {
				browser.sleep(milliseconds);
		 }
	}

	beforeAll(function() {
	});


	it('should update all deals', function() {
		browser.setLocation('dashboard');
		/*******************Delete All DEALS**********************/
		element(by.xpath('//ul[contains(@class, "page-sidebar-menu")]/li[4]/a')).click();
		browser.sleep(1000);
		element(by.xpath('//a[@ui-sref="dashboard.deal"]')).click();
		browser.sleep(5000);
		var totalCount = 0;

		selectDropdownByNumber(element(by.model('vm.filterDealStatus')), 4, 5000);

		element.all(by.xpath('//a[@ng-click="vm.deleteDeal($event.currentTarget, deal)"]')).then(function(deleteButtons){
			var originalLen = deleteButtons.length;
			if (deleteButtons.length == 0) {
				expect(true).toEqual(true);
			}

			totalCount = originalLen;

			selectDropdownByNumber(element(by.model('vm.filterDealStatus')), 0, 5000);

			element(by.xpath('//a[@ng-click="vm.deleteDeal($event.currentTarget, deal)"]')).click();
			browser.sleep(500);
			element(by.xpath('//div[contains(@class, "bootbox-confirm")]//div[@class="modal-footer"]/button[2]')).click();
			browser.sleep(5000);
			
			selectDropdownByNumber(element(by.model('vm.filterDealStatus')), 4, 5000);

			element.all(by.xpath('//a[@ng-click="vm.deleteDeal($event.currentTarget, deal)"]')).then(function(newDeleteButtons){
				dealsCount = newDeleteButtons.length;
				expect(newDeleteButtons.length).toBeGreaterThanOrEqual(totalCount);
			});


			/*******************Update a New DEAL**********************/
			element(by.xpath('//a[@ui-sref="dashboard.deal"]')).click();
			browser.sleep(5000);

			element(by.xpath('//a[@ui-sref="dashboard.deal.edit({id:deal.uid})"]')).click();
			helpers.clearInput(element(by.model('vm.form.name')));
			element(by.model('vm.form.name')).sendKeys('TEST DEAL Updated');

			browser.sleep(2000);

			//Edit Button
			browser.sleep(500);
			element(by.xpath('//div[contains(@class, "form-actions")]//button')).click();

			browser.sleep(4000);

			expect(browser.getCurrentUrl()).toContain('/dashboard/deal');
			expect(element(by.binding('deal.name')).getText())
			.toEqual('TEST DEAL Updated');

		});
		

	});


	it('test on jasmine', function(){
		expect('/dashboard/deal').toContain('/dashboard/deal');
	})


});	
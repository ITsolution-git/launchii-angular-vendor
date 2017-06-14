
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


  it('should delete a brand and create new brand', function() {
  	//Should Ensure All deals are deleted before deleting a brand

		element(by.xpath('//ul[contains(@class, "page-sidebar-menu")]/li[4]/a')).click();
		browser.sleep(1000);
		element(by.xpath('//a[@ui-sref="dashboard.deal"]')).click();

		browser.sleep(5000);

		return element.all(by.xpath('//a[@ng-click="vm.deleteDeal($event.currentTarget, deal)"]')).then(function(deleteButtons){
			var originalLen = deleteButtons.length;
			if (deleteButtons.length == 0) {
	    	expect(true).toEqual(true);
			}

			deleteButtons.forEach(function(btn){ 
				btn.click();
				browser.sleep(500);
				element(by.xpath('//div[contains(@class, "bootbox-confirm")]//div[@class="modal-footer"]/button[2]')).click();
				browser.sleep(500);
			});
			browser.sleep(5000);
			element.all(by.xpath('//a[@ng-click="vm.deleteDeal($event.currentTarget, deal)"]')).then(function(newDeleteButtons){				
				dealsCount = newDeleteButtons.length;
				expect(newDeleteButtons.length).toEqual(0);
			});

			///DELETE all brands
			element(by.xpath('//ul[contains(@class, "page-sidebar-menu")]/li[3]/a')).click();
			browser.sleep(1000);
			element(by.xpath('//a[@ui-sref="dashboard.brand"]')).click();

			return element.all(by.xpath('//a[@ng-click="vm.deleteBrand($event.currentTarget, brand)"]')).then(function(deleteButtons){
				var originalLen = deleteButtons.length;
				if (deleteButtons.length == 0) {
		    	expect(true).toEqual(true);
				}

				deleteButtons.forEach(function(btn){ 
					btn.click();
					browser.sleep(500);
					element(by.xpath('//div[contains(@class, "bootbox-confirm")]//div[@class="modal-footer"]/button[2]')).click();

				});
				browser.sleep(3000);
				element.all(by.xpath('//a[@ng-click="vm.deleteDeal($event.currentTarget, deal)"]')).then(function(newDeleteButtons){				
					expect(newDeleteButtons.length).toEqual(0);
				});



				//Add Brand
				element(by.xpath('//ul[contains(@class, "page-sidebar-menu")]/li[3]/a')).click();
				element(by.xpath('//a[@ui-sref="dashboard.brand.add"]')).click();

				browser.sleep(5000);
				element(by.model('vm.form.name')).sendKeys('TEST BRAND');
				element(by.model('vm.form.email')).sendKeys('test.e2e@brand.com');
				element(by.model('vm.form.description')).sendKeys('TEST Description');
				
			
			  var fileToUpload = '../test.png',
			      absolutePath = path.resolve(__dirname, fileToUpload);

				element(by.model('vm.form.logo')).sendKeys(absolutePath);
				element(by.model('vm.form.logo.description')).sendKeys('Logo DESC');

				element(by.model('vm.form.cover')).sendKeys(absolutePath);
				element(by.model('vm.form.cover.description')).sendKeys('Cover DESC');

		    element(by.xpath('//div[@class="form-actions"]//button')).click();
		    browser.sleep(5000);
			});


		});
	});
});	
'use strict';

var submit = document.querySelector('#submit');
var firstName = document.querySelector('#fname');
var middleName = document.querySelector('#mname');
var lastName = document.querySelector('#lname');
var firstNameShip = document.querySelector('#fname-ship');
var middleNameShip = document.querySelector('#mname-ship');
var lastNameShip = document.querySelector('#lname-ship');
//copy name from top to shipping section
var copyNameChkb = document.getElementById('name-ship-chkbx');

var companyShip = document.querySelector('#company-ship');
var add1Ship = document.querySelector('#add1-ship');
var add2Ship = document.querySelector('#add2-ship');
var cityShip = document.querySelector('#city-ship');
var stateShip  = document.querySelector('#state-ship');
var zipShip = document.querySelector('#zip-ship');
var countryShip = document.querySelector('#country-ship');
var firstNameBill = document.querySelector('#fname-bill');
var middleNameBill = document.querySelector('#mname-bill');
var lastNameBill = document.querySelector('#lname-bill');
var companyBill = document.querySelector('#company-bill');
var add1Bill = document.querySelector('#add1-bill');
var add2Bill = document.querySelector('#add2-bill');
var cityBill = document.querySelector('#city-bill');
var stateBill = document.querySelector('#state-bill');
var zipBill = document.querySelector('#zip-bill');
var countryBill = document.querySelector('#country-bill');
//copy address from shipping section to billing section
var copyAddChkb = document.querySelector('#bill-add-match-ship');

if (copyNameChkb) {
	console.log('copy name checkbox exists');
}

//event handlers
copyNameChkb.onclick = function () {
	if (copyNameChkb.checked) {
		console.log('copy name checkbox val: ' + copyNameChkb.value);
		firstNameShip.value = firstName.value;
		middleNameShip.value = middleName.value;
		lastNameShip.value = lastName.value;
	} else {
		console.log('copy name checkbox val: ' + copyNameChkb.value);
		firstNameShip.value = '';
		middleNameShip.value = '';
		lastNameShip.value = '';
	}
};

copyAddChkb.onclick = function () {
	if (copyAddChkb.checked) {
		console.log('copy add checkbox val: ' + copyAddChkb.value);
		firstNameBill.value = firstNameShip.value;
		middleNameBill.value = middleNameShip.value;
		lastNameBill.value = lastNameShip.value;
		companyBill.value = companyShip.value;
		add1Bill.value = add1Ship.value;
		add2Bill.value = add2Ship.value;
		cityBill.value = cityShip.value;
		stateBill.value = stateShip.value;
		zipBill.value = zipShip.value;
		countryBill.value = countryShip.value;
	} else {
		console.log('copy add checkbox val: ' + copyAddChkb.value);
		firstNameBill.value = '';
		middleNameBill.value = '';
		lastNameBill.value = '';
		companyBill.value = '';
		add1Bill.value = '';
		add2Bill.value = '';
		cityBill.value = '';
		stateBill.value = '';
		zipBill.value = '';
		countryBill.value = '';
	}
};

submit.onclick = function () {
	var validationErrors = '';
	var email1 = document.querySelector('#email1');
	var email2 = document.querySelector('#email2');
	var emailValidationError = '';

	//validate zip code

	//validate email address match
	if (email1.value !== email2.value) {
		emailValidationError += 'Email addresses do not match. ';
	}

	//validate email format
	if (!email1.value.includes('@')) {
		emailValidationError += 'Email should include "@". ';
	}

	console.log('emailValidationError: ' + emailValidationError);
	email1.setCustomValidity(emailValidationError);
};

//https://www.owasp.org/index.php/Input_Validation_Cheat_Sheet
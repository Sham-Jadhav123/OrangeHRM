import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import {   browser } from '@wdio/globals'
// import Orange from '../pageobjects/Orangepage.ts'
import Orange from '../pageobjects/Orangepage.ts';




Given(/^open the site$/, async() => {
    await browser.url('https://opensource-demo.orangehrmlive.com/');
    await browser.pause(3000);
	
});

Then(/^Enter Un and pawd$/, async() => {
    await Orange.Loginpage();
	
});


Then(/^add admin$/, async() => {
	await Orange.AddAdmin();
});


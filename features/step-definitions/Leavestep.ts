import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import {   browser } from '@wdio/globals'
import Leave from '../pageobjects/LeavePage.ts';



Given(/^open a  websitesite$/, async() => {
    await browser.url('https://opensource-demo.orangehrmlive.com/');
    await browser.pause(3000);
    await Leave.Login();
	
});

Then(/^Add a Leave$/, async() => {
    await Leave.AddLeaves();

	
});

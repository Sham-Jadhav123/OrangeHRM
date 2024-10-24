import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import {   browser } from '@wdio/globals'
import PIM from '../pageobjects/PIMPage.ts';



Given(/^open the websitesite$/, async() => {
    await browser.url('https://opensource-demo.orangehrmlive.com/');
    await browser.pause(3000);
    await PIM.Login();
	
});

Then(/^Add PIM$/, async() => {
    await PIM.AddPIM();

});

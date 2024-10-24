import { $, driver, browser } from '@wdio/globals'
import Page from './page';
import {TouchAction} from 'webdriverio'




class Orange extends Page{

    get username(){ return $ ('//input[@placeholder="Username"]')}
    get password() { return $('//input[@placeholder="Password"]')}
    get loginbtn() { return $('//button[normalize-space()="Login"]')}
    get admin () { return $('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"][normalize-space()="Admin"]')}
    get add() { return $('//button[normalize-space()="Add"]')}
    get select() { return $('(//div[@class="oxd-select-text-input"][normalize-space()="-- Select --"])[1]')}
    get type () { return $ ('//input[@placeholder="Type for hints..."]')}
    get status() { return $('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]')};
    get uname() { return $('(//input[@class="oxd-input oxd-input--active"])[2]')}
    get pwd() { return $('(//input[@type="password"])[1]')}
    get confpwd() { return $('(//input[@type="password"])[2]')}
    get savebtn() { return $('//button[normalize-space()="Save"]')}

    async Loginpage() {

        await browser.pause(3000);
        await this.username.setValue("Admin");
        await browser.pause(3000);
        await this.password.setValue("admin123");
        await browser.pause(3000);
        await this.loginbtn.click();
        await browser.pause(3000);
        
    }
    async AddAdmin() {

        await this.admin.click();
        await browser.pause(3000);
        await this.add.click();
        await browser.pause(3000);
        await this.select.click();
        await browser.pause(3000);
        await browser.keys('ArrowDown');
       // await browser.keys('Down');
       // (browser as any).keys('Down');
        await browser.pause(3000);
        (browser as any).keys('Enter');
        await browser.pause(3000);
        await this.type.setValue("Testing123");
        await browser.pause(3000);
        await this.status.click();
        await browser.pause(3000);
        await browser.keys('ArrowDown');
        await browser.pause(3000);
        (browser as any).keys('Enter');
        await browser.pause(3000);
        await this.uname.setValue("shyam");
        await browser.pause(3000);
        await this.pwd.setValue("Shyam123");
        await browser.pause(3000);
        await this.confpwd.setValue("Shyam123");
        await browser.pause(3000);
        await this.savebtn.click();
        await browser.pause(3000);











    }




}
export default new Orange();


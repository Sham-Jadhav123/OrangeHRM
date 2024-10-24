import { $, driver, browser } from '@wdio/globals'
import Page from './page';
import {TouchAction} from 'webdriverio'



class PIM extends Page{

    get username(){ return $ ('//input[@placeholder="Username"]')}
    get password() { return $('//input[@placeholder="Password"]')}
    get loginbtn() { return $('//button[normalize-space()="Login"]')}
    //get pim() { return $('//a[@class="oxd-main-menu-item active"]')}
    get pim() { return $('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"][normalize-space()="PIM"]')}
    get add() { return $('//button[normalize-space()="Add"]')}
    get Fname() { return $('//input[@placeholder="First Name"]')}
    get Mname() { return $('//input[@placeholder="Middle Name"]')}
    get Lname() { return $('//input[@placeholder="Last Name"]')}
    get empid() { return $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div//input[@class="oxd-input oxd-input--active"]')}
    get savebt() { return $('//button[normalize-space()="Save"]')}




    async Login(){
        await browser.pause(3000);
        await this.username.setValue("Admin");
        await browser.pause(3000);
        await this.password.setValue("admin123");
        await browser.pause(3000);
        await this.loginbtn.click();
        await browser.pause(3000);
    }
    async AddPIM() {

        await browser.pause(3000);

        await this.pim.click();
        await browser.pause(3000);
        await this.add.click();
        await browser.pause
        await this.Fname.setValue('Shyam');
        await browser.pause
        await this.Mname.setValue("P");
        await browser.pause
        await this.Lname.setValue("Jadhav");
        await browser.pause
       const text= await this.empid.getText();
       console.log(text);
       await browser.pause(3000);
        await this.savebt.click();
        await browser.pause(3000);



    }



}
export default new PIM();
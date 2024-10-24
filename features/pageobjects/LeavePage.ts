import { $, driver, browser } from '@wdio/globals'
import Page from './page';
import {TouchAction} from 'webdriverio'

class Leave extends Page{
    get username(){ return $ ('//input[@placeholder="Username"]')}
    get password() { return $('//input[@placeholder="Password"]')}
    get loginbtn() { return $('//button[normalize-space()="Login"]')}
    //get leave() { return $('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"][normalize-space()="Leave"]')}
    get leave() { return $('(//span[normalize-space()="Leave"])[1]')}
    get apply() { return $('//a[normalize-space()="Apply"]')}
    get fdate() { return $('(//input[@placeholder="yyyy-dd-mm"])[1]')}
    get leavebal() { return $('//p[@class="oxd-text oxd-text--p orangehrm-leave-balance-text"]')}
    get type() { return $('//div[@class="oxd-select-text-input"]')}
    get todate() { return $('(//input[@placeholder="yyyy-dd-mm"])[2]')}
    
    async Login(){
        await browser.pause(3000);
        await this.username.setValue("Admin");
        await browser.pause(3000);
        await this.password.setValue("admin123");
        await browser.pause(3000);
        await this.loginbtn.click();
        await browser.pause(3000);
    }
    async AddLeaves() {
        await this.leave.click();
        await browser.pause(3000);
       // await this.fdate.setValue("2024-10-24");
        await browser.pause(3000);
        const elementdis = await this.apply.isDisplayed();
        if(elementdis) {
            await this.apply.click();
            await browser.pause(3000);
        }
        else{
            console.log("element is not display")
        }
        const element = await this.type.isClickable();
        if(element) {
            await this.type.click();
            await browser.pause(3000);
            await browser.keys('ArrowDown');
            await browser.pause(3000);

            (browser as any).keys('Enter');
        }
        else{
            console.log("element is not clickable");
        }
        await browser.pause(3000);  
        await this.fdate.setValue("2024-10-24");
        await browser.pause(3000);
          
        const leavebalance = await this.leavebal.getText();
        const balance= parseInt(leavebalance, 10);
        if(balance > 0){
         
        await this.todate.clearValue();
        await browser.pause(3000);
        await this.todate.setValue("2024-10-30");
        await browser.pause(3000);
        }
        else{
            console.log("your leave balance is zero");
        }

        await browser.pause(3000);
        await this.apply.click();
    }

}
export default new Leave();
import{test,Browser,Page,expect} from '@playwright/test'
import { log } from 'node:console';
import path from 'node:path';
import{chromium} from 'playwright'
//test ('logintest',async({page}) => {
test('reservation page',async({page})=> {
    const browser:Browser=await chromium.launch({headless:false})
    await page.goto("https://automationintesting.online/")
    await page.waitForTimeout(5000)
    //await page.getByText('Book Now').click();
    await page.locator('//*[@id="rooms"]/div/div[2]/div[3]/div/div[3]/a').click()
    await page.waitForTimeout(5000)
    await expect('reservation page').toBeTruthy()
    await page.locator('//div[@class="rbc-calendar"]').waitFor({state: 'visible'})
    const a = await page.locator('//span[text()="Total"]/parent::div/span[2]').textContent()
    console.log(a)
    await page.locator('//button[text()="Reserve Now"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//input[@name="firstname"]').fill("Harish");
    await page.locator('//*[@name="lastname"]').fill("kalpana");
    await page.locator('//input[@name="email"]').fill("kalpana123@gmail.com");
    await page.locator('//*[@name="phone"]').fill("1234567891111");
    await page.waitForTimeout(3000)
    await page.locator('//button[text()="Reserve Now"]').click()
    await page.locator('//h2[text()="Booking Confirmed"]').waitFor({state:'visible'})







})





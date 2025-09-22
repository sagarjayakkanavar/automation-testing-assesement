import{test,expect,Browser,Page,} from '@playwright/test'
import path from 'node:path';
import{webkit,chromium,firefox} from 'playwright'
test ('logintest',async({page}) => {
    const browser:Browser= await chromium.launch({headless:false})
    
  await page.goto("https://testautomationpractice.blogspot.com/")  
  await page.locator('#name').fill("kalpana")
  await page.locator('#email').fill('kalpana123@gmail.com')
  await page.locator('#phone').fill('12345')
  await page.locator('#textarea').fill('Bangalore')
  await page.locator('#female').click();
  await page.locator('#monday').click();
  //await page.getByLabel('Country').selectOption({label:'United States'});
 // await page.getByLabel('country').selectOption('Canada');
  await page.getByLabel('Country').selectOption(['United States','Canada'])
  await page.getByLabel('Colors').selectOption('Red')
  await page.getByLabel('Sorted List').selectOption({label:'Cat'})
  await page.locator('#datepicker').fill('12/12/2025')
  await page.waitForTimeout(3000)
  //await page.locator('#txtDate').fill('18/08/1992')
  //await page.locator('#start-date').fill('01-01-2025')
  //await page.locator('#end-date').fill('01-01-2026')
  //await page.locator('#Submit').click();
  //await page.locator('#Home').click();
  //await page.locator('#Posts (Atom)').click
  await page.locator('#singleFileInput').setInputFiles('testdata/epfo.pdf')
  await page.locator('#name=BookTable td[1]')
  await page.locator('#name=BookTable tr #text()=Learn Java')
  await page.waitForTimeout(5000)
 // await page.locator("//td[text()='Smartwatch']/../td[4]/input").check()
  const matchedrow=  page.locator('tr').filter({ hasText:'Smartwatch'});
  await matchedrow.locator('input').check()
  await page.locator('#input1').fill('india')
  await page.locator('#btn1').check
  await page.locator('#input2').fill('joo')
  await page.locator('#btn2').check
  await page.locator('#input3').fill('vvv')
  await page.locator('#btn3').check
  await page.locator('{text:Home}').check
  await page.locator('#a').check
  await page.locator('Download Files').click
  await page.locator('#Wikipedia1_wikipedia-search-input').fill('java')
  await page.locator('#submit').check
  
  await page.locator('#START')
  await page.locator('#alertBtn').check
  await page.on('dialog',dialog=> dialog.accept())  
  await page.locator('#Confirmation Alert').check
  await page.on ('dialog',dialog=> dialog.accept())
  await page.locator('#Prompt Alert').check
  await page.on('dialog', dialog => console.log(dialog.message))
await console.log("###############hello playwright###############")
await page.locator('#New Tab').check
await page.locator('#Popup Windows').click
await page.getByText('Point Me').hover();
await page.getByText('Copy Text').dblclick();
await page.getByText('Drag me to my target').dragTo(page.locator('#droppable'))
await page.locator('#slider-range').scrollIntoViewIfNeeded
await page.locator('#comboBox').click()
await page.getByText('Item 1',{ exact: true }).click();




})

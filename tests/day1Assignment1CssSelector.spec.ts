import {test, chromium } from "@playwright/test";

//Create a Lead using CSS Selectors

test('Create a Lead using CSS Selectors', async({page})=>{
    console.log("Add new lead")
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('#password').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    await page.locator('a', { hasText: 'CRM/SFA' }).click();
    //await page.locator('//a[text()="Leads"]').click()
    await page.waitForTimeout(4000)
    await page.locator('//a[text()="Create Lead"]').click()
    await page.waitForTimeout(4000)
    await page.locator('input[id="createLeadForm_companyName"]').fill('Google')
  
    await page.waitForTimeout(4000)
    await page.locator('input[id="createLeadForm_firstName"]').fill('Kelvin')

    await page.locator('#createLeadForm_lastName').fill('Torson')

     const dropDown = page.locator('[id="createLeadForm_dataSourceId"]>option')
    const dropDownValue = await dropDown.count()

    console.log('the dropdown count is ',dropDownValue);

    for (let index = 0; index < dropDownValue; index++) {
        console.log( await dropDown.nth(index).innerText());
    }

    await page.locator('#createLeadForm_departmentName').fill('Sales Dept')   
    await page.locator('#createLeadForm_personalTitle').fill('Ms.')
    await page.locator('#createLeadForm_generalProfTitle').fill('Executive Office')
    await page.locator('#createLeadForm_annualRevenue').fill('21 Lac P.a.')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('1234567890') 
    await page.locator('//input[@class="smallSubmit"]').click()

    await page.waitForTimeout(4000)

})
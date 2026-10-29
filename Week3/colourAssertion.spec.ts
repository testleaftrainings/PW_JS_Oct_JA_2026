

import { expect, test } from "@playwright/test";

test("Colour Assertion",async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");


    expect(page.locator('//h2[text()="Leaftaps Login"]')).toHaveCSS("background-color","rgb(0, 148, 218)")    

    // await page.locator('//input[@id="username"]').fill("democsr2")

     await page.locator('//input[@id="username"]').pressSequentially("democsr2",{delay:500})

    await page.locator('//input[@id="password"]').fill("crmsfa")
})
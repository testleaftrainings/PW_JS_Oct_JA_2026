
import { test } from "@playwright/test";

// test.only("Learn to handle table", async ({ page }) => {

//     await page.goto("https://the-internet.herokuapp.com/tables#edit");

//     for (let index = 1; index <= 6; index++) {

//         let tableVal = await page.locator(`//table[1]/tbody/tr[1]/td[${index}]`).innerText();

//         console.log(tableVal);


//     }

// })


// import { test } from "@playwright/test";

test("Learn to handle table using playwright locators", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/tables#edit");

    // Locate the first table
    const table = page.locator("#table1");

    // Locate the first row in the table body
    const firstRow = table.locator("tbody tr").first();

    // Fetch all cell values from the first row
    const cells = firstRow.getByRole("cell");

    const count = await cells.count();

    for (let index = 0; index < count; index++) {
        const tableValue = await cells.nth(index).innerText();
        console.log(tableValue);
    }

});



test("Learn to handle scraping of links", async ({ page }) => {

    await page.goto("https://www.facebook.com/");

    const anchor = await page.locator("a").all();

    for (let index = 0; index < anchor.length; index++) {

        let link = await anchor[index].getAttribute('href');

        if (!link?.startsWith("https")) {

            console.log(link);

        }


    }



})





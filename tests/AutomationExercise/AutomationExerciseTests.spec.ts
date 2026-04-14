import { test, Request, expect, BrowserContext, Page } from "@playwright/test"

let webContext : BrowserContext;
let page : Page;

test.beforeEach(async({browser})=>{
    webContext = await browser.newContext();
    page = await webContext.newPage();
    await page.goto("https://www.automationexercise.com");
    await page.getByRole("button", {name : "Manage options"}).click();
    await page.getByRole("button", {name : "Confirm choices"}).click();
});

test("Register user and delete user", async () =>{
    await expect(page.locator("#header")).toBeVisible();
    await expect(page.locator("#slider")).toBeVisible();
    await expect(page.locator("section").nth(1)).toBeVisible();
    await expect(page.locator("#footer")).toBeVisible();
    await page.getByRole("link", {name : " Signup / Login"}).click();
    await expect(page.getByRole("heading", {name : "New User Signup!"}))
    .toBeVisible();
    await page.getByRole("")
});
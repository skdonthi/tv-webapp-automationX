import { remote } from "webdriverio";
import { assert } from "chai";
import config from "../config/lg-tv.config";
import { before, describe, it } from "mocha";

describe("LG TV Test Suite", () => {
  let browser: WebdriverIO.Browser;
  before(async () => {
    // Load the configuration dynamically
    browser = await remote(config);
    await browser.url("http://localhost:4200");
  });

  it("should load the correct page title", async () => {
    const title = await browser.getTitle();
    assert.equal(title, "Expected Angular App Title");
  });

  it("should click on the login button", async () => {
    const loginButton = await browser.$("#login-button");
    await loginButton.click();
  });

  after(async () => {
    await browser.deleteSession();
  });
});

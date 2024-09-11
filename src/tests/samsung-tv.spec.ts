import { remote } from "webdriverio";
import { assert, expect } from "chai";
import config from "../config/samsung-tv.config";
import { before, describe, it } from "mocha";
import { expect as wdioExpect } from "@wdio/globals";

it("should have a focused element", async () => {
  const focusedElement = await browser.$(":focus");
  await wdioExpect(focusedElement).toExist();
});
describe("Samsung TV Test Suite", () => {
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

  it("should simulate remote control actions", async () => {
    // Simulate pressing Right, Down, and OK
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [
          { type: "keyDown", value: "\uE014" }, // VK_RIGHT
          { type: "keyDown", value: "\uE015" }, // VK_DOWN
          { type: "keyDown", value: "\uE007" }, // VK_ENTER
        ],
      },
    ]);

    // Verify the focused element or a resulting action
    const focusedElement = await browser.$(".focused-class");
    expect(focusedElement).to.exist;
  });

  after(async () => {
    await browser.deleteSession();
  });
});

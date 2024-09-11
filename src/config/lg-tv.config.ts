export default {
  hostname: "127.0.0.1", // Local Appium server
  port: 4723, // Appium port
  path: "/wd/hub",
  capabilities: {
    platformName: "WebOS",
    browserName: "LGTVBrowser",
    deviceName: "LGTV",
    automationName: "WebOSDriver",
    udid: "YOUR_LG_TV_IP",
    noReset: true,
  },
};

export default {
  hostname: "127.0.0.1", // Local Appium server
  port: 4723, // Appium port
  path: "/wd/hub",
  capabilities: {
    platformName: "Tizen",
    browserName: "SamsungTvBrowser",
    deviceName: "SamsungTV",
    automationName: "TizenTVDriver",
    udid: "YOUR_SAMSUNG_TV_IP",
    noReset: true,
  },
};

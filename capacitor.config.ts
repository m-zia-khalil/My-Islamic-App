import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.alburhan.maamulaat",
  appName: "Al-Burhan Ma'amulaat",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      iconColor: "#20296e"
    }
  }
};

export default config;
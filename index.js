import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./app");
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);

// import { AppRegistry, Platform } from "react-native";
// import { registerRootComponent } from "expo";
// import App from "./app";
// import { name as appName } from "./app.json";

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately
// if (Platform.OS == "android") {
//   registerRootComponent(App);
// } else {
//   AppRegistry.registerComponent(appName, () => App);
// }

import Navigation from "./src/navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Roboto_Black: require("./assets/Fonts/Roboto-Black.ttf"),
    Roboto_Bold: require("./assets/Fonts/Roboto-Bold.ttf"),
    Roboto_Italic: require("./assets/Fonts/Roboto-Italic.ttf"),
    Roboto_Light: require("./assets/Fonts/Roboto-Light.ttf"),
    Roboto_Medium: require("./assets/Fonts/Roboto-Medium.ttf"),
    Roboto_Regular: require("./assets/Fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

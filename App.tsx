import React from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { Background } from "./src/components/BackGround/index";

import Signin from "./src/screens/Signin/index";
import { Home } from "./src/screens/Home/index";

export default function App() {
  const [FontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!FontsLoaded) {
    <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Background>
  );
}

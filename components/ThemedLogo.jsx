import { View, Text, useColorScheme, Image } from "react-native";
import LightLogo from "../assets/img/logo_light.png";
import DarkLogo from "../assets/img/logo_dark.png";

export default function ThemedLogo({...props}) {
  const colorScheme = useColorScheme();

  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;
  return <Image source={logo} {...props} />;
}

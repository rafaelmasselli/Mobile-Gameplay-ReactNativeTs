import { StyleSheet } from "react-native";
import { theme } from "../../global/style/style";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.highlight,
    fontSize: 40,
    textAlign: "center",
    marginBottom: 16,
    fontFamily : theme.fonts.title700
  },
  Subtitle: {
    color: theme.colors.highlight,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 64,
    fontFamily: theme.fonts.text500
  },
});

import { StyleSheet } from "react-native";
import { theme } from "../../global/style/style";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.backgroundColor,
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
    color: theme.colors.color,
    fontSize: 40,
    textAlign: "center",
    marginBottom: 16,
  },
  Subtitle: {
    color: theme.colors.color,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 64,
  },
});

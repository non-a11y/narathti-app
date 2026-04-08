import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffffff",
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  textheader: {
    color: "#444444",
    marginLeft: 20,
    //marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  ios: {
    // shadow iOS
    shadowColor: "#464646ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  android: {
    // shadow Android
    elevation: 10,
  },
  defaulttextstyles: {
    color: "#7F7F7F",
    fontSize: 16,
  },
});

export const homeStyles = StyleSheet.create({});
export const taskStyles = StyleSheet.create({});
export const pickupStyles = StyleSheet.create({});
export const managementStyles = StyleSheet.create({});
export const sosStyles = StyleSheet.create({});

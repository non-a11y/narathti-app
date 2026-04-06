import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  textheader: {
    color: "#444444",
    marginLeft: 20,
    //marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
});


export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#ffffffff",
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textstyles: {
    color: "#7F7F7F",
    fontSize: 16,
  },
  ios: {
    // shadow iOS
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  android: {
    // shadow Android
    elevation: 10,
  },
});
export const taskStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#ffffffff",
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textstyles: {
    color: "#7F7F7F",
    fontSize: 16,
  },
  ios: {
    // shadow iOS
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  android: {
    // shadow Android
    elevation: 10,
  },
});
export const pickupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  ios: {
    // shadow iOS
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  android: {
    // shadow Android
    elevation: 10,
  },
});

export const managementStyles = StyleSheet.create({});

export const sosStyles = StyleSheet.create({});

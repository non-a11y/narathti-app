import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  ios: {
    // shadow iOS
    shadowColor: "#a3a3a3ff",
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

export const main = StyleSheet.create({
  textheader: {
    color: "#444444",
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffffff",
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const cruiseStyles = StyleSheet.create({
  rowLabel: {
    fontSize: 16,
    color: "#1A1A2E",
    fontWeight: "500",
  },
  rowValue: {
    fontSize: 14,
    color: "#555555",
    fontWeight: "400",
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
    flexShrink: 1,
  },
  list: {
    width: "95%",
    height: 60,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fcfffcff",
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#5e45ffff",
  },
  button: {
    backgroundColor: "#A7BFFC",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#447FFF",
  },
  buttontext: {
    color: "#ffffffff",
    fontSize: 10,
    fontWeight: "400",
  },
});


export const button_function = StyleSheet.create({
  text_left: {
    fontSize: 16,
    color: "#1A1A2E",
    fontWeight: "500",
  },
  text_right: {
    fontSize: 14,
    color: "#555555",
    fontWeight: "400",
  },
  box_right: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
    flexShrink: 1,
  },
  list: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffffff",
    paddingHorizontal: 20,
    
    borderRadius: 30,
    // เส้นขอบ
    borderWidth: 2,
    borderColor: "#78bef8ff",
  },
});

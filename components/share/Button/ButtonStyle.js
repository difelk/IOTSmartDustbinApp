import { StyleSheet } from "react-native";
import { colors } from "../../../styles/constants";

export default StyleSheet.create({
  primaryBtn: {
    minWidth: 80,
    // height: 50,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.primary,
    fontSize: 12,
    color: "red",
  },
  buttonText: {
    backgroundColor: colors.black,
  },
  primaryBtnText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
  },
  button: {
    backgroundColor: colors.black,
  },
  buttonText: {
    backgroundColor: colors.black,
  },
  iconBtnLg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,
    backgroundColor: colors.header1,
  },
  iconsBtnStnd: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "green",
        elevation: 20,
      },
    }),
  },
  iconBtnMD: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.header1,
  },
  iconBtnSM: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: colors.header1,
  },

  lidBtn: {
    backgroundColor: "#3cb89b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 88,
    height: 88,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "green",
        elevation: 20,
      },
    }),
  },
  batteryBtn: {
    backgroundColor: "orange",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "green",
        elevation: 20,
      },
    }),
  },
  binBtn: {
    backgroundColor: "#61caf1",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "green",
        elevation: 20,
      },
    }),
  },

  settingsBtn: {
    backgroundColor: "#a2d536",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "green",
        elevation: 20,
      },
    }),
  },

  aboutBtn: {
    backgroundColor: "#898cf2",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,
    

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "green",
        elevation: 20,
      },
    }),
  },

  logoutBtn: {
    backgroundColor: "orange",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "green",
        elevation: 20,
      },
    }),
  },
});

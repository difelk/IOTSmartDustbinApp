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
    color: colors.black,
  },
  txtColor: {
    color: "#191952",
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
        elevation: 2,
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
    // backgroundColor: "#39c2c1",
    backgroundColor: "#1ed7ca",
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
        shadowRadius: 15,
      },
      android: {
        shadowColor: "green",
        elevation: 25,
      },
    }),
  },
  batteryBtn: {
    backgroundColor: "#ffffff",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "#191952",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "#191952",
        elevation: 2,
      },
    }),
  },
  binBtn: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "#191952",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "#191952",
        elevation: 2,
      },
    }),
  },

  settingsBtn: {
    backgroundColor: "#ffffff",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "#191952",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "#191952",
        elevation: 2,
      },
    }),
  },

  aboutBtn: {
    backgroundColor: "#ffffff",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "#191952",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "#191952",
        elevation: 2,
      },
    }),
  },

  widthBtnIconLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 160,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 12,
    marginRight: 6,
    marginLeft: 6,
    marginTop: 12,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "#191952",
        elevation: 20,
      },
    }),
  },

  link: {
    backgroundColor: "unset",
    borderColor: "none",
    textAlign: "right",
    marginLeft: 20,
  },

  linkText: {
    color: "#0ab86e",
    fontWeight: "600",
    fontSize: 16,
  },

  notifyBtn: {
    backgroundColor: "#ffffff",
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
        shadowColor: "#191952",
        elevation: 2,
      },
    }),
  },

  footerIconBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 50,
    backgroundColor: "#5876edc4",
  },
  normalIconBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 50,
  },

  logoutBtn: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 92,
    height: 92,
    borderRadius: 8,

    ...Platform.select({
      ios: {
        shadowColor: "#191952",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "#191952",
        elevation: 2,
      },
    }),
  },

  tabButton: {
    borderRadius: 50,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#ffffff",
  },
  tabButtonTxt: {
    color: "#bdcad0",
  },
  ActiveTab: {
    backgroundColor: '#3baded'
  },
  ActiveTabTxt: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 600,
  },
});

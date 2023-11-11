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
    backgroundColor: "#f8ce30",

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
    backgroundColor: "#65e38f",

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
    backgroundColor: "#66b2fe",

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
    backgroundColor: "#ec6874",

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

  link: {
    backgroundColor: "unset",
    borderColor: "none",
    textAlign: 'right',
    marginLeft: 20,
  },

  linkText: {
    color: "#0ab86e",
    fontWeight: "600",
    fontSize: 16,
    
  },

  notifyBtn: {
    backgroundColor: "#bc6ef7",

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

  footerIconBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#5876edc4',
  },

  logoutBtn: {
    backgroundColor: "#80f45e",

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


import { StyleSheet } from "react-native";
import { colors } from "../../styles/constants";

export default StyleSheet.create({
  mainWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#4363eb",
    // padding: 16,
    paddingBottom: 50,
  },
  subTitleTxt: {
    fontSize: 12,
    color: colors.backgroundColor1,
    marginTop: 8,
    marginBottom: 8,
  },

  mainTitleTxt: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "700",
    // marginTop: 16,
    marginBottom: 8,
  },
  stripRuleTop: {
    width: 260,
    borderBottomWidth: 1,
    borderBottomColor: "#c6c6d457",
    borderStyle: "solid",
    padding: 10,
    position: "absolute",
    right: 11,
    top: 7,
  },

  stripRuleBottom: {
    width: 260,
    borderBottomWidth: 1,
    borderBottomColor: "#c6c6d457",
    borderStyle: "solid",
    padding: 10,
    position: "absolute",
    right: 5,
    top: -7,
  },

  greenBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4363eb",
    padding: 16,
    borderRadius: 8,
    // marginBottom: 26,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
      },
      android: {
        shadowColor: "black",
        elevation: 0,
      },
    }),
  },
  middleSection: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  mainBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#06f890",
    width: 350,
    height: 80,
  },
  iconView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  textView: {
    display: "flex",
    flexDirection: "row",
    width: 200,
  },
  headerTxt: {
    color: "#D3D3D3",
    fontWeight: "600",
  },
  nextIcon: {},

  sectionTwo: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "#191952",
        elevation: 50,
      },
    }),
  },

  homeBtnsList: {
    display: "none",
    marginBottom: 50,
    paddingBottom: 50,
    height: 100,
  },
  bkgrnfBlue: {
    backgroundColor: "#4363eb",
  },
  servicesTextWrapper: {
    marginBottom: 20,
    marginTop: 5,
    backgroundColor: "#ffffff",
  },
  servicesTex: {
    fontSize: 18,
    fontWeight: "700",
    color: "#373737",
  },
  whiteTxt: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
  },
  lidBtnWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  lidBtnClose: {
    marginRight: 8,
  },
  lidBtnOpen: {
    marginLeft: 8,
  },
  statusIcons: {
    width: 26,
    height: 26,
    marginRight: 8,
  },
  greenboxShadow: {
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "black",
    //     shadowOffset: { width: 0, height: 4 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 8,
    //   },
    //   android: {
    //     elevation: 8,
    //   },
    // }),
  },
});

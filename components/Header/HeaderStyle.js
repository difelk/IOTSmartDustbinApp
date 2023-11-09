import { StyleSheet } from "react-native";
import { colors } from "../../styles/constants";

export default StyleSheet.create({
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: colors.backgroundColor1,
  },
  name: {
    color: colors.header1,
    fontSize: 15,
    fontWeight: "600",
  },
  title: {
    color: colors.subTxt1,
    fontSize: 14,
  },
  profileDetails: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
  },
  profilePicSection: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.black,
      marginRight: 12,
  },
  profilePicTextSection: {
    display: "flex",
    flexDirection: "column",
  },
});

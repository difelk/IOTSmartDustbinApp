import { StyleSheet } from "react-native";
import { colors } from "./constants";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: colors.secondary,
  },
  gap: {
    marginBottom: 5,
  },
  display_Flx_dir_row_align_center: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  justify_between: {
    justifyContent: "space-between",
  },

  display_Flx:{
    display: "flex", 
  },
  dir_col:{
    flexDirection:"column", 
  },
  dir_row:{
    flexDirection:"row", 
  },
  align_center:{
    alignItems: "center",
  },
  align_start:{
    alignItems: "flex-start",
  },
  marginTop10:{
    marginTop:70,
  },
  mg20:{
    marginTop: 0,
  }
});

import React from "react";
import { View, Text } from "react-native";
import HeaderStyle from "./HeaderStyle";
import MyButton from "../share/Button/Button";

export default function Header() {
  const handleOnClick = (value) => {
    console.log(value);
  };

  return (
    <View style={HeaderStyle.headerWrapper}>
      <View style={HeaderStyle.profileDetails}>
        <View style={HeaderStyle.profilePicSection}></View>
        <View style={HeaderStyle.profilePicTextSection}>
          <Text style={HeaderStyle.name}>Dilshan Fernando</Text>
          <Text style={HeaderStyle.title}>Admin</Text>
        </View>
      </View>
      <View>
        <View>
          <MyButton
            onPress={handleOnClick}
            buttonText={"view profile"}
            buttonType={"PRIMARY"}
          />
        </View>
      </View>
    </View>
  );
}

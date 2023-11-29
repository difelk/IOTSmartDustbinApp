import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing } from "react-native";



export default function Loader() {
const loadingIcon = require("../../assets/loadingIcon.png");

const rotation = useRef(new Animated.Value(0)).current;

useEffect(() => {
  const rotateAnimation = Animated.loop(
    Animated.timing(rotation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  );

  rotateAnimation.start();

  return () => rotateAnimation.stop();
}, [rotation]);

const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  
  return (
    <>
      <View style={styles.center}>
      <Animated.Image
        source={loadingIcon}
        style={[styles.image, { transform: [{ rotate: spin }] }]}
      />
            <Text>Loading...</Text>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  center: {
    minHeight: "100%",
    alignItems: "center",
    paddingBottom: 60,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 50,
  },
  loadingIcon: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  }
});

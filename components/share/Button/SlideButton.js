import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const SlideButton = ({setBinNotification}) => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: toggleSwitch ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [toggleSwitch, animatedValue]);

  const onPress = () => {
    setToggleSwitch(!toggleSwitch);
    setBinNotification(toggleSwitch ? false : true);
  };

  const slideButtonStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 27], 
        }),
      },
    ],
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.slideButtonWrapper, toggleSwitch ? styles.toggleLeft : styles.toggleRight]}>
        <Animated.View style={[styles.sliderSlideButton, slideButtonStyle]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  slideButtonWrapper: {
    width: 55,
    height: 12,
    padding: 12,
    borderRadius: 30,
    backgroundColor: '#7A8AE1',
    position: 'relative',
  },
  sliderSlideButton: {
    width: 26,
    height: 26,
    borderRadius: 50,
    backgroundColor: '#445EEF',
    position: 'absolute',
    top: -1,
  },
});

export default SlideButton;

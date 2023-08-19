import React, { Component } from "react";
import { View, PanResponder, Animated } from "react-native";
import Promotions from "./Promotion";

class SlidingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      currentPosition: "bottom",
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this.onPanResponderMove,
      onPanResponderRelease: this.onPanResponderRelease,
    });
  }

  onPanResponderMove = (_, gestureState) => {
    if (
      (this.state.currentPosition === "top" && gestureState.dy < 0) ||
      (this.state.currentPosition === "bottom" && gestureState.dy > 0)
    ) {
      return;
    }

    this.state.pan.setValue({ x: 0, y: gestureState.dy });
  };

  onPanResponderRelease = (_, gestureState) => {
    if (gestureState.dy < -100) {
      this.animateToTop();
    } else if (gestureState.dy > 100) {
      this.animateToBottom();
    } else {
      this.animateToPosition();
    }
  };

  animateToTop = () => {
    Animated.spring(this.state.pan, {
      toValue: { x: 0, y: -450 },
      useNativeDriver: false,
    }).start();
    this.setState({ currentPosition: "top" });
  };

  animateToBottom = () => {
    Animated.spring(this.state.pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
    this.setState({ currentPosition: "bottom" });
  };

  animateToPosition = () => {
    const targetY = this.state.currentPosition != "top" ? 0 : 0;
    Animated.spring(this.state.pan, {
      toValue: { x: 0, y: targetY },
      useNativeDriver: false,
    }).start();
  };

  render() {
    const { pan } = this.state;
    const [translateX, translateY] = [pan.x, pan.y];
    const slidingStyle = {
      transform: [{ translateX }, { translateY }],
    };

    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[slidingStyle, styles.slidingComponent]}
      >
        <Promotions />
      </Animated.View>
    );
  }
}

const styles = {
  slidingComponent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: "blue",
  },
};

export default SlidingComponent;

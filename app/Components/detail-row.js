import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function DetailRow({ props }) {
  //const imageSource = circle.imageSource;
  const { circle, section1, section2, section3 } = props;

  const { color: circleColor, imageSource } = circle;

  const {
    text: text1,
    textColor: text1Color,
    bgColor: text1BgColor,
  } = section1;

  const {
    text: text2,
    textColor: text2Color,
    bgColor: text2BgColor,
  } = section2;

  const {
    text: text3,
    textColor: text3Color,
    bgColor: text3BgColor,
  } = section3;

  const rowStyle = {
    marginVertical: 5,
    flexDirection: "row",
    height: 50,
    width: "95%",
    borderRadius: 25,
    backgroundColor: text1BgColor,
    justifyContent: "flex-start",
    alignContent: "center",
    paddingLeft: "2%",
  };

  const text1Style = {
    paddingRight: 10,
    paddingLeft: 5,
    width: "60%",
    height: "100%",
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: text1BgColor,
  };

  const text2Style = {
    flex: 1,
    position: "absolute",
    left: "42%",
    padding: 5,
    width: "60%",
    height: "100%",
    backgroundColor: text2BgColor,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 30,
  };

  const text3Style = {
    borderRadius: 30,
    position: "absolute",
    left: "71%",
    padding: 10,
    width: "31.5%",
    height: "100%",
    backgroundColor: text3BgColor,
    justifyContent: "center",
  };

  const circleViewStyle = {
    height: 50,
    width: "15%",
    justifyContent: "center",
  };

  const circleStyle = {
    backgroundColor: circleColor,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    borderRadius: 15,
    height: 30,
    width: 30,
  };

  return (
    <View style={rowStyle}>
      <View style={circleViewStyle}>
        <View style={circleStyle}>
          <Image source={imageSource} style={imageStyle} />
        </View>
      </View>

      <View style={text1Style}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            height: 40,
            width: "40%",
            color: text1Color,
          }}
        >
          {text1}
        </Text>
      </View>
      <View style={text2Style}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            height: 50,
            width: "48%",
            padding: 5,
            color: text2Color,
          }}
        >
          {text2}
        </Text>
      </View>
      <View style={text3Style}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            height: 50,
            padding: 2,
            color: text3Color,
          }}
        >
          {text3}
        </Text>
      </View>
    </View>
  );
}

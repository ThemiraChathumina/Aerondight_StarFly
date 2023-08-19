import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import DetailRow from "./detail-row";
import colors from "../Config/colors";
import useRGB from "../hooks/useRGB";

export default function DetailList({ props }) {
  const Data = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", alignItems: "center", paddingBottom: 10 }}>
        <Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}>
          R E C E N T
        </Text>
      </View>
      <FlatList
        data={Data}
        renderItem={({ item }) => <DetailRow props={item.details} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     //alignItems: "center",
  //     //paddingTop: 20,
  //     //paddingHorizontal: "2%",
  //     height: "60%",
  //     width: "95%",
  //     backgroundColor: "blue",
  //   },

  container: {
    paddingLeft: "3%",
    //height: 600,
    backgroundColor: useRGB(colors.backgroundDark1, 0.5),
    paddingTop: 10,
    paddingBottom: 18,
    width: "100%",
    height: "100%",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    //alignItems: "center",
  },
});

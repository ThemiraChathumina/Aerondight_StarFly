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

export default function DetailList({ props }) {
  const Data = props;
  return (
    <SafeAreaView style={styles.container}>
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
    backgroundColor: "blue",
    paddingTop: 50,
    width: "100%",
    height: "100%",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    //alignItems: "center",
  },
});

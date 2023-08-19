import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import PromoItem from "./PromoItem";
import useRGB from "../hooks/useRGB";
import colors from "../Config/colors";

const Promotions = () => {
  const initialMargin = 300;
  const [scrollViewMargin, setScrollViewMargin] = useState(initialMargin);

  const handlePromotionsTextClick = () => {
    setScrollViewMargin(scrollViewMargin === 10 ? initialMargin : 10);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.roundedContainer, { marginTop: scrollViewMargin }]}>
        <ScrollView
          style={styles.scrollView}
        >
          <TouchableWithoutFeedback onPress={handlePromotionsTextClick}>
            <View style={styles.HeadingContainer}>
              <Text style={styles.promotionsText}> P R O M O T I O N S</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.ItemHeadingContainer}>
            <PromoItem
              name="Jupyter"
              url="https://www.printsome.com/blog/wp-content/uploads/interplanetary-tourism-jupiter.jpg"
            />
            <PromoItem
              name="Venus"
              url="https://www.printsome.com/blog/wp-content/uploads/interplanetary-tourism-venus.jpg"
            />
            <PromoItem
              name="Mars"
              url="https://www.printsome.com/blog/wp-content/uploads/interplanetary-tourism-mars.jpg"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundedContainer: {
    flex: 1,
    backgroundColor: useRGB(colors.backgroundDark1, 0.5),
    borderTopEndRadius: 60,
    borderTopLeftRadius: 60,
    overflow: "hidden", // Clip content to rounded borders
  },
  scrollView: {
    flex: 1,
  },
  promotionsText: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    color: "white",
  },
  HeadingContainer: {
    alignItems: "center",
  },
  ItemHeadingContainer: {
    justifyContent: "center",
  },
  backgroundc: {
    backgroundColor: "blue",
    height: 100,
  },
});

export default Promotions;

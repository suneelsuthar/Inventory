import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

import theme from "../../../theme";
const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("window").height;
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles._container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Item")}
          style={{ backgroundColor: theme.primary, padding: 10, margin: 30 }}
        >
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    // padding:5
  },
});

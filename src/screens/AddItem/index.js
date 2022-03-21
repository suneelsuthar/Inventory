import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";
export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles._container}>
        <View style={styles._image_circle}>
          <Image
            source={require("./../../../assets/itemType.png")}
            style={styles._header_img}
          />
        </View>
        <TouchableOpacity
          style={styles._list}
          onPress={() => this.props.navigation.navigate("AddItemWithHsn")}
        >
          <Image
            source={require("./../../../assets/withhsn.png")}
            style={styles._list_icon}
          />
          <View style={styles._list_view}>
            <Text style={styles._title}>Add item with HSN code</Text>
            <Text style={styles._desc}>
              HSN code is a standard 4-8 digit code for GST purpose
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles._list}>
          <Image
            source={require("./../../../assets/withouhsn.png")}
            style={styles._list_icon}
          />
          <View style={styles._list_view}>
            <Text style={styles._title}>Add item without HSN code</Text>
            <Text style={styles._desc}>
              Add item using primary category of the item
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles._list}>
          <Ionicons name="md-barcode" size={24} color="black" />
          <View style={styles._list_view}>
            <Text style={styles._title}>Add item with Barcode</Text>
            <Text style={styles._desc}>
              Scan bar code to get item details and add it to your inventory
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  _header_img: {
    alignSelf: "center",
    height: 150,
    width: 150,
    marginRight: -20,
  },
  _image_circle: {
    backgroundColor: theme.fillcolor,
    height: 150,
    width: 150,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 20,
    marginBottom: 20,
  },
  _list: {
    backgroundColor: theme.fillcolor,
    flexDirection: "row",
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  _list_icon: {},
  _title: {
    fontFamily: theme.bold,
    fontSize: 18,
  },
  _desc: {
    fontFamily: theme.regular,
    marginTop: 20,
    fontSize: 16,
    paddingRight: 20,
  },
  _list_view: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

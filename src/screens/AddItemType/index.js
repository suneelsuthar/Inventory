import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { List } from "react-native-paper";
import theme from "../../../theme";
import { Entypo } from "@expo/vector-icons";
import { Dropdown, Button } from "./../../components";
export default class AddItemType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      insightsType: "1D",
      showSoldItem: false,
      showStockItem: false,
      topSoldType: "1D",
      notsoldType: "1M",
      type: null,
      itemType: [
        { label: "Mobile", value: "Mobile" },
        { label: "Shoes", value: "Shoes" },
        { label: "Shirt", value: "Shirt" },
      ],
    };
  }

  changeTab = (type, val) => {
    if (type === "Insights") {
      this.setState({ insightsType: val });
    } else if (type === "sold") {
      this.setState({ topSoldType: val });
    } else if (type === "notsold") {
      this.setState({ notsoldType: val });
    }
  };
  onchangeType = (v) => {
    this.setState({ type: v });
  };
  render() {
    let { showSoldItem, showStockItem, type, itemType } = this.state;
    let { code } = this.props.route.params;
    return (
      <SafeAreaView style={styles._container}>
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <Text style={styles._code}>{code}</Text>
          {/*  TABLE */}

          <Text style={styles._accordian_title}>Add Item Type </Text>
          <Text style={styles._desc}>
            Define type of the item i.e. Mobile, Shoes, Shirt
          </Text>
          <Dropdown data={itemType} onchange={this.onchangeType} value={type} />

          {/* Top items - SOLD */}
          <List.Section>
            <List.Accordion
              title="Add photos"
              titleStyle={styles._accordian_title}
              style={styles._accordian_header}
              expanded={showSoldItem}
              onPress={() => this.setState({ showSoldItem: !showSoldItem })}
              right={(e) =>
                !e.isExpanded ? (
                  <TouchableOpacity
                    style={[
                      styles._circle,
                      { height: 30, width: 30, borderWidth: 0 },
                    ]}
                  >
                    <Entypo name="plus" size={15} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[
                      styles._circle,
                      { height: 30, width: 30, borderWidth: 0 },
                    ]}
                  >
                    <Entypo name="minus" size={15} color="black" />
                  </TouchableOpacity>
                )
              }
            >
              <Text>lsdkfjlsdfj</Text>
            </List.Accordion>
            <Text style={styles._desc}>Enter upto 3 photos</Text>

            <List.Accordion
              title="Add More Item Details"
              titleStyle={styles._accordian_title}
              style={styles._accordian_header}
              expanded={showStockItem}
              onPress={() => this.setState({ showStockItem: !showStockItem })}
              right={(e) =>
                !e.isExpanded ? (
                  <TouchableOpacity
                    style={[
                      styles._circle,
                      { height: 30, width: 30, borderWidth: 0 },
                    ]}
                  >
                    <Entypo name="plus" size={15} color="black" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[
                      styles._circle,
                      { height: 30, width: 30, borderWidth: 0 },
                    ]}
                  >
                    <Entypo name="minus" size={15} color="black" />
                  </TouchableOpacity>
                )
              }
            >
              <Text>lsdkfjlsdfj</Text>
            </List.Accordion>
            <Text style={styles._desc}>Enter upto 3 photos</Text>
          </List.Section>
          <View style={styles.title_row}>
            <Text style={styles._accordian_title}>Item Name </Text>
            <TouchableOpacity>
              <Text style={styles._edit_text}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles._name_filed}>
            <Text style={styles._auto_generated_text}>
              Item name will autogenerate based on the details selected; you can
              also edit the name manually
            </Text>
          </View>
          <Button
            title="Next"
            onPress={() => this.next()}
            disabled={type === null ? true : false}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: theme.white,
    padding: 20,
  },

  _circle: {
    borderWidth: 2,
    borderColor: theme.secondary,
    height: 64,
    width: 64,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.fillcolor,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    borderColor: theme.greymedium,
    borderBottomWidth: 1,
  },
  _label: {
    fontFamily: theme.medium,
    alignSelf: "center",
    paddingTop: 10,
    fontSize: 12,
  },
  _item: {
    justifyContent: "center",
    alignItems: "center",
  },
  _accordian_header: {
    backgroundColor: theme.white,
    paddingLeft: 0,
    marginLeft: -7,
  },
  _accordian_title: {
    fontFamily: theme.bold,
    fontSize: 18,
    color: theme.black,
    marginTop: 10,
  },

  _code: {
    alignSelf: "center",
    fontFamily: theme.bold,
    color: theme.primary,
    fontSize: 16,
  },
  _desc: {
    color: theme.grey,
    fontFamily: theme.medium,
    marginBottom: 10,
  },
  title_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _edit_text: {
    color: theme.btnColor,
    fontFamily: theme.bold,
  },
  _name_filed: {
    backgroundColor: theme.fillcolor,
    borderRadius: 6,
    padding: 10,
    marginVertical: 20,
  },
  _auto_generated_text: {
    fontSize: 16,
    fontFamily: theme.regular,
    color: theme.grey,
  },
});

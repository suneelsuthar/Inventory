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
export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      insightsType: "1D",
      showSoldItem: true,
      showStockItem: true,
      showNotSoldItem: true,
      topSoldType: "1D",
      notsoldType: "1M",
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
  render() {
    let {
      insightsType,
      expanded,
      showSoldItem,
      showStockItem,
      showNotSoldItem,
      topSoldType,
      notsoldType,
    } = this.state;
    const sold = [
      {
        itemName: "Iron| Black| 56|  Rod...",
        qty: "327",
        amt: "pcs",
      },
      {
        itemName: "Iron sdfsdf sdfdsfsdfs Rod...",
        qty: "237",
        amt: "ct",
      },
      {
        itemName: "Iron sdfsdf sdfdsfsdfs Rod...",
        qty: "327",
        amt: "pcs",
      },
      {
        itemName: "Curtains...",
        qty: "237",
        amt: "pcs",
      },
    ];
    const stock = [
      {
        itemName: "Iron| Black| 56|  Rod...",
        qty: "1327",
        amt: "pcs",
      },
      {
        itemName: "Iron sdfsdf sdfdsfsdfs Rod...",
        qty: "237",
        amt: "ct",
      },
      {
        itemName: "Iron sdfsdf sdfdsfsdfs Rod...",
        qty: "327",
        amt: "pcs",
      },
      {
        itemName: "Curtains...",
        qty: "237",
        amt: "pcs",
      },
    ];
    const notsold = [
      {
        itemName: "Iron| Black| 56|  Rod...",
        qty: "1327",
        amt: "pcs",
      },
      {
        itemName: "Iron sdfsdf sdfdsfsdfs Rod...",
        qty: "237",
        amt: "ct",
      },
      {
        itemName: "Iron sdfsdf sdfdsfsdfs Rod...",
        qty: "327",
        amt: "pcs",
      },
      {
        itemName: "Curtains...",
        qty: "237",
        amt: "pcs",
      },
    ];
    return (
      <SafeAreaView style={styles._container}>
        <ScrollView>
          {/*  TABLE */}
          <View style={styles._table}>
            <View style={styles._tr}>
              <Text
                style={[
                  styles._td,
                  { fontFamily: theme.bold, fontSize: 18, color: theme.black },
                ]}
              >
                Insights
              </Text>
              <Text
                style={[
                  styles._th,
                  { flex: 3, color: theme.primary, fontSize: 14 },
                ]}
              >
                Today
              </Text>
            </View>
            <View style={styles._tr}>
              <Text style={styles._td}>Unique Items sold</Text>
              <View style={styles._table_heading}>
                <Text style={styles._th}>0</Text>
              </View>
            </View>

            <View style={styles._tr}>
              <Text style={styles._td}>New Items added</Text>
              <View style={styles._table_heading}>
                <Text style={[styles._th, { color: theme.numberColor }]}>
                  0
                </Text>
              </View>
            </View>
            <View style={styles._footer}>
              <TouchableOpacity
                style={[
                  styles._tab_item,
                  {
                    backgroundColor:
                      insightsType === "1D" ? theme.primary : theme.white,
                  },
                ]}
                onPress={() => this.changeTab("Insights", "1D")}
              >
                <Text
                  style={[
                    styles._tab_text,
                    {
                      color:
                        insightsType === "1D" ? theme.white : theme.primary,
                    },
                  ]}
                >
                  1D
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.changeTab("Insights", "1W")}
                style={[
                  styles._tab_item,
                  {
                    backgroundColor:
                      insightsType === "1W" ? theme.primary : theme.white,
                  },
                ]}
              >
                <Text
                  style={[
                    styles._tab_text,
                    {
                      color:
                        insightsType === "1W" ? theme.white : theme.primary,
                    },
                  ]}
                >
                  1W
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles._tab_item,
                  {
                    backgroundColor:
                      insightsType === "1M" ? theme.primary : theme.white,
                  },
                ]}
                onPress={() => this.changeTab("Insights", "1M")}
              >
                <Text
                  style={[
                    styles._tab_text,
                    {
                      color:
                        insightsType === "1M" ? theme.white : theme.primary,
                    },
                  ]}
                >
                  1M
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles._tab_item,
                  {
                    backgroundColor:
                      insightsType === "3M" ? theme.primary : theme.white,
                  },
                ]}
                onPress={() => this.changeTab("Insights", "3M")}
              >
                <Text
                  style={[
                    styles._tab_text,
                    {
                      color:
                        insightsType === "3M" ? theme.white : theme.primary,
                    },
                  ]}
                >
                  3M
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles._tab_item,
                  {
                    backgroundColor:
                      insightsType === "FY" ? theme.primary : theme.white,
                  },
                ]}
                onPress={() => this.changeTab("Insights", "FY")}
              >
                <Text
                  style={[
                    styles._tab_text,
                    {
                      color:
                        insightsType === "FY" ? theme.white : theme.primary,
                    },
                  ]}
                >
                  FY
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* NEW SECTIONS */}
          <View style={styles._row}>
            <TouchableOpacity
              style={styles._item}
              onPress={() => this.props.navigation.navigate("AddItem")}
            >
              <View style={styles._circle}>
                <Image
                  source={require("./../../../assets/addnewitem.png")}
                  style={styles._icons}
                />
              </View>
              <Text style={styles._label}>Add new item</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles._item}>
              <View style={styles._circle}>
                <Image
                  source={require("./../../../assets/search.png")}
                  style={styles._icons}
                />
              </View>
              <Text style={styles._label}>Search </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles._item}>
              <View style={styles._circle}>
                <Image
                  source={require("./../../../assets/allitmes.png")}
                  style={styles._icons}
                />
              </View>
              <Text style={styles._label}>All items</Text>
            </TouchableOpacity>
          </View>
          {/* Top items - SOLD */}
          <List.Section>
            <List.Accordion
              title="Top items - SOLD"
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
              <View style={styles._footer}>
                <TouchableOpacity
                  style={[
                    styles._tab_item,
                    {
                      backgroundColor:
                        topSoldType === "1D" ? theme.primary : theme.white,
                    },
                  ]}
                  onPress={() => this.changeTab("sold", "1D")}
                >
                  <Text
                    style={[
                      styles._tab_text,
                      {
                        color:
                          topSoldType === "1D" ? theme.white : theme.primary,
                      },
                    ]}
                  >
                    1D
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.changeTab("sold", "1W")}
                  style={[
                    styles._tab_item,
                    {
                      backgroundColor:
                        topSoldType === "1W" ? theme.primary : theme.white,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles._tab_text,
                      {
                        color:
                          topSoldType === "1W" ? theme.white : theme.primary,
                      },
                    ]}
                  >
                    1W
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles._tab_item,
                    {
                      backgroundColor:
                        insightsType === "1M" ? theme.primary : theme.white,
                    },
                  ]}
                  onPress={() => this.changeTab("sold", "1M")}
                >
                  <Text
                    style={[
                      styles._tab_text,
                      {
                        color:
                          topSoldType === "1M" ? theme.white : theme.primary,
                      },
                    ]}
                  >
                    1M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles._tab_item,
                    {
                      backgroundColor:
                        topSoldType === "3M" ? theme.primary : theme.white,
                    },
                  ]}
                  onPress={() => this.changeTab("sold", "3M")}
                >
                  <Text
                    style={[
                      styles._tab_text,
                      {
                        color:
                          topSoldType === "3M" ? theme.white : theme.primary,
                      },
                    ]}
                  >
                    3M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles._tab_item,
                    {
                      backgroundColor:
                        insightsType === "FY" ? theme.primary : theme.white,
                    },
                  ]}
                  onPress={() => this.changeTab("sold", "FY")}
                >
                  <Text
                    style={[
                      styles._tab_text,
                      {
                        color:
                          insightsType === "FY" ? theme.white : theme.primary,
                      },
                    ]}
                  >
                    FY
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles._heading_row}>
                <Text style={styles._row_title}>Item Name</Text>
                <Text style={styles._row_title}>
                  <Text style={{ color: theme.btnColor }}>Qty</Text> |{" "}
                  <Text style={{ color: theme.btnColor }}>Amt</Text>
                </Text>
              </View>
              {sold.map((val, i) => {
                return (
                  <View style={styles._item_row} key={i}>
                    <Text style={styles.item_name}>{val.itemName}</Text>
                    <Text style={styles.qty}>{val.qty}</Text>
                    <Text style={styles.amt}> {val.amt}</Text>
                  </View>
                );
              })}
              <TouchableOpacity style={styles._view_more}>
                <Text style={styles._view_more_text}>View more</Text>
              </TouchableOpacity>
            </List.Accordion>

            <List.Accordion
              title="Top Items - STOCK"
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
              <View style={styles._heading_row}>
                <Text style={styles._row_title}>Item Name</Text>
                <Text style={styles._row_title}>Qty available</Text>
              </View>
              {stock.map((val, i) => {
                return (
                  <View style={styles._item_row} key={i}>
                    <Text style={styles.item_name}>{val.itemName}</Text>
                    <Text style={styles.qty}>{val.qty}</Text>
                    <Text style={styles.amt}> {val.amt}</Text>
                  </View>
                );
              })}
            </List.Accordion>

            <List.Accordion
              title="Top items  - NOT SOLD "
              titleStyle={styles._accordian_title}
              style={styles._accordian_header}
              expanded={showNotSoldItem}
              onPress={() => this.setState({ notsoldType: !showNotSoldItem })}
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
              <View
                style={[
                  styles._footer,
                  { justifyContent: "flex-start", marginHorizontal: 10 },
                ]}
              >
                <TouchableOpacity
                  style={[
                    styles._tab_item,
                    {
                      backgroundColor:
                        notsoldType === "1M" ? theme.primary : theme.white,
                    },
                  ]}
                  onPress={() => this.changeTab("notsold", "1M")}
                >
                  <Text
                    style={[
                      styles._tab_text,
                      {
                        color:
                          notsoldType === "1M" ? theme.white : theme.primary,
                      },
                    ]}
                  >
                    1M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles._tab_item,
                    {
                      backgroundColor:
                        notsoldType === "3M" ? theme.primary : theme.white,
                    },
                  ]}
                  onPress={() => this.changeTab("notsold", "3M")}
                >
                  <Text
                    style={[
                      styles._tab_text,
                      {
                        color:
                          notsoldType === "3M" ? theme.white : theme.primary,
                      },
                    ]}
                  >
                    3M
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles._heading_row}>
                <Text style={styles._row_title}>Item Name</Text>
                <Text style={styles._row_title}>
                  <Text style={{ color: theme.btnColor }}>Qty</Text> |{" "}
                  <Text style={{ color: theme.btnColor }}>Amt</Text>
                </Text>
              </View>
              {notsold.map((val, i) => {
                return (
                  <View style={styles._item_row} key={i}>
                    <Text style={styles.item_name}>{val.itemName}</Text>
                    <Text style={styles.qty}>{val.qty}</Text>
                    <Text style={styles.amt}> {val.amt}</Text>
                  </View>
                );
              })}
            </List.Accordion>
          </List.Section>
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
  _table: {
    borderWidth: 1,
    borderColor: theme.greymedium,
    margin: 10,
    borderRadius: 6,
  },
  _tr: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: theme.greymedium,
    height: 50,
    alignItems: "center",
  },
  _th: {
    flex: 1,
    borderLeftColor: theme.greymedium,
    fontFamily: theme.bold,
    fontSize: 36,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  _td: {
    flex: 2,
    padding: 15,
    borderLeftColor: theme.greymedium,
    fontFamily: theme.medium,
    color: theme.grey,
    alignItems: "center",
  },
  _table_heading: {
    borderLeftWidth: 1,
    flex: 1,
    borderLeftColor: theme.greymedium,
  },
  _footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 50,
  },
  _tab_text: {
    fontFamily: theme.medium,
  },
  _tab_item: {
    borderRadius: 100,
    paddingHorizontal: 10,
    padding: 3,
  },
  _icons: {
    // height: 20,
    // width: 20,
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
  },
  _accordian_title: {
    fontFamily: theme.bold,
    fontSize: 18,
    color: theme.black,
    marginTop: 10,
  },
  _heading_row: {
    backgroundColor: theme.greyNormal,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    padding: 10,
  },
  _row_title: {
    fontFamily: theme.bold,
    fontSize: 12,
  },
  _item_row: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: theme.greymedium,
    marginHorizontal: 10,
  },
  item_name: {
    flex: 1,
    fontFamily: theme.regular,
  },
  qty: {
    fontFamily: theme.regular,
  },
  amt: {
    fontFamily: theme.italic,
    color: theme.grey,
  },
  _view_more: {
    alignSelf: "center",
    marginTop: 10,
  },
  _view_more_text: {
    padding: 10,
    color: theme.btnColor,
    fontFamily: theme.bold,
  },
});

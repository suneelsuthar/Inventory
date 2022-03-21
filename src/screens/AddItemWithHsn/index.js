import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../../theme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Button from "../../components/Button";
export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      modalVisible: false,
    };
  }

  next = () => {
    this.setState({ modalVisible: true });
  };
  render() {
    let { value, modalVisible } = this.state;
    return (
      <View style={styles._container}>
        <View style={styles._image_circle}>
          <Image
            source={require("./../../../assets/itemType.png")}
            style={styles._header_img}
          />
        </View>
        <View style={styles._inner_section}>
          <View style={styles._inner_layer}>
            <Text style={styles._label}>Enter HSN code</Text>
            <View style={styles._input_view}>
              <TextInput
                placeholder="HSN code"
                style={styles._text_input}
                value={value}
                onChangeText={(e) => this.setState({ value: e })}
              />
              <Feather
                name="search"
                size={20}
                color={theme.greymedium}
                style={{ marginRight: 10 }}
              />
            </View>
          </View>
          <Button
            title="Next"
            onPress={() => this.next()}
            disabled={value === "" ? true : false}
          />
        </View>
        {/* MODAL BOX */}
        <Modal animationType="none" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles._modal_header}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalVisible: false }),
                    this.props.navigation.navigate("AddItemType", {
                      code: this.state.value,
                    });
                }}
              >
                <AntDesign name="arrowleft" size={24} color={theme.white} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: false })}
              >
                <AntDesign name="close" size={24} color={theme.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalView}>
              <Text style={styles._code_label}>HSN Code </Text>
              <Text style={styles._code}>8084</Text>
              <View style={styles._mark_circle}>
                <Image
                  source={require("./../../../assets/mark.png")}
                  style={styles._mark_icon}
                />
              </View>
              <Text style={styles._primary_Cat}>Primary Category</Text>
              <Text style={styles._cat}>Machine Parts</Text>
              <Text style={styles._desc_title}>Description</Text>
              <Text style={styles._desc}>
                Machines for cleaning, sorting or grading, seed, grain or dried
                leguminous vegetables; machinery used in milling industry or for
                the working of cereals or dried leguminous vegetables other than
                farm type machinery and parts thereof{" "}
              </Text>
            </View>
          </View>
        </Modal>
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
  _label: {
    fontFamily: theme.bold,
    marginHorizontal: 10,
  },
  _input_view: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.greymedium,
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 10,
  },
  _text_input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 0,
    fontFamily: theme.bold,
  },
  _inner_layer: {
    flex: 1,
  },
  _inner_section: {
    flex: 1,
    paddingBottom: 50,
    paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 22,
    backgroundColor: "#1E3C32E5",
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 6,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    // shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  _mark_circle: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: theme.black,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },

  _mark_icon: {
    height: 20,
    width: 25,
    marginRight: -10,
    marginTop: -5,
  },
  _code_label: {
    fontFamily: theme.bold,
    color: theme.grey,
    fontSize: 16,
  },
  _code: {
    fontFamily: theme.bold,
    fontSize: 16,
  },
  _primary_Cat: {
    fontFamily: theme.medium,
    color: theme.grey,
  },
  _cat: {
    fontFamily: theme.bold,
    fontSize: 18,
  },
  _desc_title: {
    fontFamily: theme.bold,
    fontSize: 16,
    alignSelf: "flex-start",
    paddingBottom: 10,
  },
  _desc: {
    fontFamily: theme.regular,
    color: theme.grey,
  },
  _modal_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
});

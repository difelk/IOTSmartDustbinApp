import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../../Footer/Footer";
import i18next from "../../../services/i18next";
import DropDownPicker from "react-native-dropdown-picker";
import { useTranslation } from "react-i18next";
import SlideButton from "../../share/Button/SlideButton";
import Header from "../../Header/Header";
export default function Settings() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "English", value: "en" },
    { label: "Sinhala", value: "sl" },
  ]);

  useEffect(() => {
    const getStoredLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem("selectedLanguage");
        if (storedLanguage) {
          setValue(storedLanguage);
          i18next.changeLanguage(storedLanguage);
        }
      } catch (error) {
        console.error("Error retrieving stored language:", error);
      }
    };
    getStoredLanguage();
  }, []);

  const handleLangChng = (lang) => {
    i18next.changeLanguage(lang.value);
    setValue(lang.value);
    AsyncStorage.setItem("selectedLanguage", lang.value);
  };

  const handlDisplayName = (value) => {
    // console.log("display name is - ", value);
  };

  const [binRecordingOpen, setBinRecordingOpen] = useState(false);
  const [binSelectedItem, setBinSelectedItem] = useState("4 Hour");

  const handleBinRecordingTime = (value) => {
    setBinSelectedItem(value);
    console.log("RECORDINGG TIME - ", value);
  };

  const [batteryRecordingOpen, setBatteryRecordingOpen] = useState(false);
  const [batterySelectedItem, setBatterySelectedItem] = useState("4 Hour");

  const handleBatteryRecordingTime = (value) => {
    setBatterySelectedItem(value);
    console.log("RECORDINGG TIME - ", value);
  };

  const [binNotification, setBinNotification] = useState(false);
  console.log("Toggle bin notify ", binNotification);

  return (
    <>
      <Header />
      <View style={styles.settingsWrapper}>
        <Text style={styles.mainHeader}>{t("SETTINGS")}</Text>
        <View style={styles.langDropWrapper}>
          <Text style={styles.txtSml}>{t("SELECT_PREFERRED_LANGUAGE")}</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onSelectItem={(value) => handleLangChng(value)}
            style={styles.dropdown}
            placeholder={
              value
                ? items.find((i) => i.value === value).label
                : t("SELECT_LANGUAGE")
            }
          />
        </View>

        <View style={styles.textLbWrapper}>
          <Text style={styles.txtSml}>{t("DISPLAY_NAME")}</Text>
          <TextInput
            style={[styles.input, styles.inputMrgLf7]}
            onChangeText={handlDisplayName}
            placeholder="useless placeholder"
          />
        </View>

        <View style={styles.slideLbWrapper}>
          <Text style={styles.slidetxtSml}>Bin Notifications</Text>
          <SlideButton setBinNotification={setBinNotification} />
        </View>
        {binNotification ? (
          <View style={styles.langDropWrapper}>
            <Text style={styles.txtSml}>Recording Time</Text>
            <DropDownPicker
              open={binRecordingOpen}
              value={binSelectedItem}
              items={[
                { label: "1 Hour", value: "1 Hour" },
                { label: "2 Hour", value: "2 Hour" },
                { label: "4 Hour", value: "4 Hour" },
                { label: "8 Hour", value: "8 Hour" },
                { label: "12 Hour", value: "12 Hour" },
                { label: "24 Hour", value: "24 Hour" },
                { label: "48 Hour", value: "48 Hour" },
                { label: "60 Hour", value: "60 Hour" },
              ]}
              setValue={setBinSelectedItem}
              setOpen={setBinRecordingOpen}
              style={[styles.dropdown]}
              placeholder={
                binSelectedItem ? binSelectedItem : "Select Recording Time"
              }
              onSelectItem={(value) => handleBinRecordingTime(value)}
            />
          </View>
        ) : (
          ""
        )}
        <View style={styles.slideLbWrapper}>
          <Text style={styles.slidetxtSml}>Battery Notifications</Text>
          <SlideButton />
        </View>
        <View style={styles.langDropWrapper}>
          <Text style={styles.txtSml}>Recording Time</Text>
          <DropDownPicker
            open={batteryRecordingOpen}
            value={batterySelectedItem}
            items={[
              { label: "1 Hour", value: "1 Hour" },
              { label: "2 Hour", value: "2 Hour" },
              { label: "4 Hour", value: "4 Hour" },
              { label: "8 Hour", value: "8 Hour" },
              { label: "12 Hour", value: "12 Hour" },
              { label: "24 Hour", value: "24 Hour" },
              { label: "48 Hour", value: "48 Hour" },
              { label: "60 Hour", value: "60 Hour" },
            ]}
            setValue={setBatterySelectedItem}
            setOpen={setBatteryRecordingOpen}
            style={[styles.dropdown, styles.dropdownOverlap]}
            placeholder={
              batterySelectedItem
                ? batterySelectedItem
                : "Select Recording Time"
            }
            onSelectItem={(value) => handleBatteryRecordingTime(value)}
          />
        </View>
      </View>
      <Footer txt={"Settings"} />
    </>
  );
}

const styles = StyleSheet.create({
  settingsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
    // marginLeft: 8,
    // marginRight:8,
    width: "100%",
    marginTop: 20,
    padding: 12,
  },
  mainHeader: {
    fontSize: 14,
    fontWeight: "700",
  },
  dropdown: {
    width: 200,
    height: 50,
    marginLeft: 8,
    marginRight: 8,
  },

  langDropWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 12,
  },
  txtSml: {
    fontSize: 12,
    width: 150,
  },
  slidetxtSml: {
    fontSize: 12,
    width: 300,
  },
  textLbWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  slideLbWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  inputMrgLf7: {
    marginLeft: 7,
  },
  dropdownOverlap: {
    zIndex: 1,
  },
});

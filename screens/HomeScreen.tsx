import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { theme } from "../theme";
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc: number) => {
    console.log(loc, "location");
  };

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor={"lightgray"}
                className="pl-6 h-10 pb-1 flex-1 text-base text-white"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => {
                toggleSearch(!showSearch);
              }}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>

          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, index) => {
                let showBorder = index + 1 != locations.length;
                let borderClass = showBorder
                  ? " border-b-2 border-b-gray-400"
                  : "";
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleLocation(loc);
                    }}
                    key={index}
                    className={
                      "flex-row items-center border-0 p-3 px-4 mb-1" +
                      borderClass
                    }
                  >
                    <MapPinIcon color="gray" size="20" />
                    <Text className="text-black text-lg ml-2">
                      London, United Kingdom
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
}

import React from "react";
import { NavigationContainerRef } from "@react-navigation/native";
import { TabStackParamList } from "../navigations/RootNavigation";

export const navRef =
  React.createRef<NavigationContainerRef<TabStackParamList>>();
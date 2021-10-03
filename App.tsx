import React from "react";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

export default function App(){
  const [fontsLoaded] = useFonts({
    Roboto_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
    <Routes />
  );
}
import React from 'react';
import LottieView from "lottie-react-native";

import panela from '../../assets/panela.json';

export default function Lottie({src}) {
  return (
    <LottieView loop autoPlay autoSize resizeMode="contain" source={src} />
  );
}
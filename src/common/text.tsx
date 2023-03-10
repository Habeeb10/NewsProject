import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import * as Colors from './colors';

type TextHeaderProps = {
  label: string;
  style?: StyleProp<TextStyle>;
};

export const TextHeader = ({label, style}: TextHeaderProps) => {
  return <Text style={[styles.label, style]}>{label}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: Colors.black,
  },
});

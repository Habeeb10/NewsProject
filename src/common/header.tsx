import React from 'react';
import {StyleSheet, View, Text, StyleProp, ViewStyle} from 'react-native';
import * as Colors from './colors';
import {hp} from './utils';

export type HeaderProps = {
  heading: string;
  description: string;
  style?: StyleProp<ViewStyle>;
};

export const Header = ({heading, description, style}: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.bottomSheetNumber}>{heading}</Text>
      <Text style={styles.sendOTP}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(10),
    paddingHorizontal: hp(20),
  },
  bottomSheetNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black,
    marginTop: hp(10),
  },
  sendOTP: {
    marginTop: hp(10),
    fontSize: 14,
    fontWeight: '400',
    lineHeight: hp(22),
    color: Colors.black,
  },
});

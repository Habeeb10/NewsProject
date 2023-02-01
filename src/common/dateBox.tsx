import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Add} from '../../assets/svg';
import {hp, wp} from './utils';
import * as Colors from './colors';

export type DateContainerProps = {
  label: string;
  isYear?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const DateContainer = ({
  label,
  isYear,
  style,
  onPress,
}: DateContainerProps) => {
  return (
    <View style={[styles.container, isYear && styles.isYear, style]}>
      <TextInput style={styles.label} placeholder={label} />
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <Add />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    width: wp(90),
    height: hp(50),
    borderWidth: 0.7,
    borderColor: Colors.deepgrey,
    borderRadius: 10,
    marginTop: hp(10),
    justifyContent: 'space-between',
  },
  isYear: {
    width: wp(90),
    paddingHorizontal: wp(10),
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: wp(3),
  },
});

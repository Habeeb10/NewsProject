import React, {useState, FC} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  // ViewStyle,
  // TextStyle,
  // StyleProp,
  StyleSheet,
} from 'react-native';
import {Add, Sub} from '../../assets/svg';
import * as Colors from './colors';

export const Limit: FC = () => {
  const [value, setValue] = useState(1);

  return (
    <View style={styles.valuebox}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => (value > 1 ? setValue(value - 1) : null)}>
        <Sub />
      </TouchableOpacity>
      <Text style={styles.one}>{value}</Text>
      <TouchableOpacity
        style={styles.boxPlus}
        onPress={() => (value >= 1 && value < 30 ? setValue(value + 1) : null)}>
        <Add />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  valuebox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 100,
  },
  boxPlus: {
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: Colors.lightorange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderRadius: 15,
    width: 30,
    height: 30,
    borderColor: Colors.transparent,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  one: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

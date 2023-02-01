import React from 'react';
import {Limit} from '../../common/value';
import {View} from 'react-native';
import {Button} from '../../common/button';
import {HelloStyles as styles} from './styles';

const Hello = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Limit />
      <Button
        title={'hello'}
        style={styles.button}
        onPressButton={() => navigation.navigate('login')}
      />
    </View>
  );
};

export default Hello;

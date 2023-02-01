import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../common/button';
import {Input} from '../../common/input';
import {LoginStyles as styles} from './styles';

const Login = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text style={styles.communicate}>
        Create a account so you can communicate with other people and find new
        friends
      </Text>
      <View style={styles.emailContainer}>
        <Input
          label="Email / Username"
          style={styles.email}
          labelStyle={undefined}
        />
      </View>
      <View style={styles.emailContainer}>
        <Input
          label="Password"
          style={styles.Password}
          labelStyle={undefined}
        />
      </View>
      <View>
        <Button
          title="Sign Up With Google"
          style={styles.signupwithgoogle}
          styleText={styles.textStyle}
          onPressButton={() => navigation.navigate('gender')}
        />
      </View>
    </View>
  );
};

export default Login;

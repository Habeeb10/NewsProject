import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../common/utils';
import * as Colors from '../../../common/colors';

export const SigninStyles = StyleSheet.create({
  button: {
    backgroundColor: Colors.purple,
  },
  sendOTPButton: {
    color: Colors.white,
  },
  orText: {
    fontSize: 17,
    alignSelf: 'center',
    color: Colors.black,
    fontWeight: '500',
  },
  signupOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(40),
    marginVertical: hp(20),
  },
});

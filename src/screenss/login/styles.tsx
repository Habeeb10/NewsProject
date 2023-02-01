import {StyleSheet} from 'react-native';
import {hp, wp} from '../../common/utils';
import * as Colors from '../../common/colors';

export const LoginStyles = StyleSheet.create({
  Container: {
    paddingHorizontal: hp(10),
  },
  signup: {
    marginLeft: hp(4),
    fontSize: hp(16),
    color: Colors.lightgray,
    fontWeight: 'bold',
  },
  forgotpassword: {
    fontSize: hp(16),
    alignSelf: 'flex-end',
    marginTop: hp(13),
    color: Colors.gray,
    fontWeight: 'bold',
  },
  account: {
    fontSize: hp(16),
    color: Colors.gray,
  },
  accountcontainer: {
    flexDirection: 'row',
    marginTop: hp(25),
    alignSelf: 'center',
  },
  alternative: {
    marginTop: hp(15),
    marginBottom: hp(20),
    textAlign: 'center',
    fontSize: hp(16),
    color: Colors.gray,
    fontWeight: '400',
  },
  textStyle: {
    color: Colors.white,
    fontSize: hp(14),
    marginLeft: hp(20),
  },
  signupwithgoogle: {
    backgroundColor: Colors.purple,
  },
  button: {
    marginTop: hp(48),
  },
  email: {
    height: hp(49),
    width: wp(335),
  },
  Password: {
    height: hp(49),
    width: wp(335),
  },
  emailContainer: {
    marginTop: hp(20),
    paddingHorizontal: hp(20),
  },

  communicate: {
    fontSize: hp(14),
    textAlign: 'center',
    color: Colors.purple,
    marginTop: hp(70),
    paddingHorizontal: hp(15),
    marginBottom: hp(30),
  },
  header: {
    fontSize: hp(20),
    letterSpacing: hp(0),
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.purple,
  },
});

import {StyleSheet} from 'react-native';
import {hp} from '../../../common/utils';
import * as Colors from '../../../common/colors';

export const SendStyles = StyleSheet.create({
  detailsHeader: {
    marginBottom: hp(20),
    marginTop: hp(30),
  },
  underlineStyleBase: {
    width: 60,
    height: 70,
    borderRadius: 10,
    backgroundColor: Colors.grey,
    color: 'black',
  },
  underlineStyleHighLighted: {
    borderColor: Colors.deepblue,
  },
  otpInput: {
    width: '100%',
    height: hp(110),
    marginTop: hp(10),
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: hp(20),
  },
  verifyButton: {
    backgroundColor: Colors.purple,
    marginTop: hp(50),
  },
  verifyButtonTitle: {
    color: 'white',
  },
  editNumber: {
    alignSelf: 'flex-end',
    color: 'red',
    marginTop: hp(10),
    fontSize: 16,
    marginRight: hp(20),
  },
  resend: {
    color: Colors.purple,
    fontWeight: '500',
    height: hp(20),
  },
  noOtp: {
    fontSize: 17,
    alignSelf: 'center',
    marginTop: hp(15),
  },
});

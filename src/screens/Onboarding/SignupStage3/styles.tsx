import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../common/utils';
import * as Colors from '../../../common/colors';

export const SignupStyles = StyleSheet.create({
  dateofbirth: {
    marginLeft: hp(5),
  },
  inputt: {
    color: Colors.black,
  },
  detailsHeader: {
    marginBottom: hp(20),
    marginTop: hp(30),
  },
  profilePicture: {
    color: Colors.black,
    fontSize: 18,
  },
  optionalText: {
    color: Colors.deepgrey,
  },
  pictureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(20),
    width: '100%',
    height: hp(55),
    borderWidth: 0.7,
    borderColor: Colors.black,
    borderRadius: 10,
    marginTop: hp(7),
  },
  pictureText: {
    color: 'darkblue',
    fontSize: 17,
    marginLeft: wp(20),
    fontWeight: '600',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signupButton: {
    borderWidth: 0.7,
    borderColor: Colors.black,
    marginTop: hp(20),
    width: '95%',
  },
  nextStage3: {
    color: Colors.black,
  },
});

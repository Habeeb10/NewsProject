import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../common/utils';
import * as Colors from '../../../common/colors';

export const GenderStyles = StyleSheet.create({
  genderstyle: {
    marginLeft: hp(18),
    fontSize: hp(15),
  },
  inputt: {
    color: Colors.black,
  },
  emailContainer: {
    paddingHorizontal: hp(20),
  },
  email: {
    height: hp(49),
    width: wp(300),
  },
  detailsHeader: {
    marginBottom: hp(20),
  },
  genderSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(20),
    width: '100%',
    height: hp(55),
    borderWidth: 0.7,
    borderColor: Colors.deepgrey,
    borderRadius: 10,
    marginTop: hp(7),
    justifyContent: 'space-between',
  },
  gender: {
    fontSize: hp(13),
  },
  accountButton: {
    backgroundColor: Colors.purple,
    marginTop: hp(40),
  },
  textStyle: {
    color: 'white',
  },
});

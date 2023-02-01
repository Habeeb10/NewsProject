import * as Colors from '../../common/colors';
import {StyleSheet} from 'react-native';
import {hp, wp} from '../../common/utils';

export const OnboardingStyles = StyleSheet.create({
  slide: {
    width: wp(360),
    height: hp(250),
    marginTop: hp(110),
    marginBottom: hp(30),
    alignSelf: 'center',
  },
  description: {
    fontSize: 17,
    color: Colors.white,
    fontWeight: '300',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: hp(10),
  },
  activeDotStyle: {
    backgroundColor: Colors.white,
    width: wp(28),
    height: hp(10),
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    paddingTop: hp(10),
  },
  neverMiss: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: '700',
    alignSelf: 'center',
  },
  logo: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: '900',
    alignSelf: 'center',
    marginTop: hp(50),
  },
  bottomSheetStyles: {
    paddingHorizontal: wp(20),
  },
  modalView: {
    backgroundColor: 'white',
    height: 700,
    borderRadius: 10,
    paddingHorizontal: wp(20),
    paddingTop: hp(20),
  },
});

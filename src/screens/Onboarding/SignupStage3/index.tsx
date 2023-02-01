import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {UploadPicture} from '../../../../assets/svg';
import {Agreement} from '../../../common/agreement';
import {Button} from '../../../common/button';
import {DateContainer} from '../../../common/dateBox';
import {Header} from '../../../common/header';
import {Input} from '../../../common/input';
import {TextHeader} from '../../../common/text';
import {hp} from '../../../common/utils';
import {SignupStyles as styles} from './styles';
// import {useNavigation} from '@react-navigation/core';

type StageThreeProps = {
  onBack: () => void;
  onNext: () => void;
};

const Signup = ({onBack, onNext}: StageThreeProps) => {
  // const navigation = useNavigation();
  return (
    <>
      <Header
        heading="SignUp."
        description="At Lyfed, we give information about Best Deals, Events, curated offers, sales & assured cashback for our customers."
      />
      <View style={{marginTop: hp(20), paddingHorizontal: hp(20)}}>
        <Text style={styles.profilePicture}>
          Profile picture <Text style={styles.optionalText}>(optional)</Text>
        </Text>
        <TouchableOpacity
          onPress={onBack}
          style={styles.pictureContainer}
          activeOpacity={0.7}>
          <UploadPicture />
          <Text style={styles.pictureText}>Upload picture</Text>
        </TouchableOpacity>
        <Input
          label="Name"
          placeholder="Your name"
          labelStyle={styles.inputt}
        />
        <View style={{marginTop: hp(15)}}>
          <TextHeader label="Date of birth" style={styles.dateofbirth} />
          <View style={styles.dateContainer}>
            <DateContainer label="DD" />
            <DateContainer label="MM" />
            <DateContainer label="YYYY" isYear />
          </View>
        </View>
        <Button
          title="Next"
          style={styles.signupButton}
          styleText={styles.nextStage3}
          onPressButton={onNext}
        />
      </View>
      <Agreement />
    </>
  );
};

export default Signup;

import React, {useState} from 'react';
import {Agreement} from '../../../common/agreement';
import {Button} from '../../../common/button';
import {Header} from '../../../common/header';
import {Input} from '../../../common/input';
import {TextHeader} from '../../../common/text';
import {hp, wp} from '../../../common/utils';
import * as Colors from '../../../common/colors';
import RNPickerSelect from 'react-native-picker-select';
import {GENDER} from '../constant';
import {GenderStyles as styles} from './styles';
import {View} from 'react-native';
// import {useNavigation} from '@react-navigation/core';

type StageFourProp = {
  onPressCreate: () => void;
};

const Gender = ({onPressCreate}: StageFourProp) => {
  // const navigation = useNavigation();
  const [gender, setGender] = useState(GENDER);
  const placeholder = {
    label: 'Select gender..',
    value: null,
    color: Colors.black,
  };

  return (
    <>
      <Header
        style={styles.detailsHeader}
        heading="A few more details."
        description="Please fill in the following boxes to complete your registration to get started."
      />
      <TextHeader label="Gender" style={styles.genderstyle} />

      <RNPickerSelect
        placeholder={placeholder}
        onValueChange={value => {
          setGender(value);
          console.log(value);
        }}
        value={gender}
        items={GENDER}
        style={{
          viewContainer: {
            paddingHorizontal: wp(10),
            width: '90%',
            height: hp(55),
            borderWidth: 0.7,
            borderColor: Colors.black,
            borderRadius: 10,
            marginTop: hp(7),
            marginLeft: hp(20),
            paddingVertical: hp(20),
          },
          placeholder: {
            fontSize: 20,
            paddingVertical: hp(10),
          },
        }}
      />
      <View style={styles.emailContainer}>
        <Input
          label="Email address"
          placeholder="Your email address"
          labelStyle={styles.inputt}
        />
      </View>
      <View style={styles.emailContainer}>
        <Input label="Phone number" isPhone labelStyle={styles.inputt} />
      </View>
      <Button
        title="Create new account"
        style={styles.accountButton}
        styleText={styles.textStyle}
        onPressButton={onPressCreate}
      />
      <Agreement />
    </>
  );
};

export default Gender;

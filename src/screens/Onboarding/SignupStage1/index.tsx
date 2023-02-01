import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../../common/button';
import {CountriesType} from '../types';
import {CountryBox} from '../components/CountryInput';
import {SocialSignupCard} from '../components/SignupButtons';
import {Header} from '../../../common/header';
import {SocialSignupList} from '../constant';
import {SigninStyles as styles} from './styles';

type StageOneProp = {
  onCountryPress: () => void;
  country: CountriesType;
  onChangeText: (text: string) => void;
  onSendOtp: () => void;
  phoneNumber: string;
};

const Signin = (props: StageOneProp) => {
  const {onCountryPress, country, onChangeText, onSendOtp, phoneNumber} = props;
  return (
    <>
      <Header
        heading="Enter your phone number"
        description="We will send you a 4-digit OTP to your phone number for verification"
      />
      <CountryBox
        onPress={onCountryPress}
        short_name={country.short_name}
        code={country.code}
        value={phoneNumber}
        onChangeText={onChangeText}
        onSubmitEditing={onSendOtp}
      />
      <Button
        title="send OTP"
        style={styles.button}
        styleText={styles.sendOTPButton}
        onPressButton={onSendOtp}
      />
      <Text style={styles.orText}>Or</Text>
      <View style={styles.signupOptions}>
        {SocialSignupList.map((item, index) => {
          return (
            <SocialSignupCard key={index} icon={item.icon} onPress={() => {}} />
          );
        })}
      </View>
    </>
  );
};

export default Signin;

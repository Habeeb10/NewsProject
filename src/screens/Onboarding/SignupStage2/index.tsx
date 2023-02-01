import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Button} from '../../../common/button';
import {Header} from '../../../common/header';
import {SendStyles as styles} from './styles';
// import {useNavigation} from '@react-navigation/core';

type StageTwoProp = {
  onWrongNumber: () => void;
  otpCode: string;
  onOtpChanged: () => void;
  onVerify: () => void;
  onResend: () => void;
  phoneNumber: string;
};

const Send = (props: StageTwoProp) => {
  // const navigation = useNavigation();
  const {
    onWrongNumber,
    otpCode,
    onOtpChanged,
    onVerify,
    onResend,
    phoneNumber,
  } = props;
  return (
    <>
      <Header
        heading="Verify OTP"
        description={`Please enter the 4-digit OTP sent to you at +234-${phoneNumber}`}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={onWrongNumber}>
        <Text style={styles.editNumber}>Wrong number? Edit</Text>
      </TouchableOpacity>
      <OTPInputView
        style={styles.otpInput}
        pinCount={4}
        placeholderCharacter="-"
        code={otpCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={onOtpChanged}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        // onCodeFilled={code => {
        //   console.log(`Code is ${code}, you are good to go!`);
        // }}
      />
      <Button
        title="Verify & continue"
        style={styles.verifyButton}
        styleText={styles.verifyButtonTitle}
        onPressButton={onVerify}
      />
      <Text style={styles.noOtp}>
        Didn't get the OTP?{' '}
        <Text style={styles.resend} onPress={onResend}>
          Resend
        </Text>
      </Text>
    </>
  );
};

export default Send;

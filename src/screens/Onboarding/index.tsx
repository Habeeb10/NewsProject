import React, {useRef, useState} from 'react';
import {Text, View, Image, Alert, FlatList} from 'react-native';
import * as Colors from '../../common/colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Button} from '../../common/button';
import {OnboardingStyles as styles} from './styles';
import BottomSheet from '@gorhom/bottom-sheet';
import {CountriesType, CountryProps, ItemProps} from './types';
import {CountriesCard} from '../Onboarding/components/CountriesCards';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Agreement} from '../../common/agreement';
import {useCountries} from '../../hooks/useCountries';
import {CountryDetails, SLIDES} from './constant';
import Modal from 'react-native-modal';
import Signin from './SignupStage1';
import Send from './SignupStage2';
import Signup from './SignupStage3';
import Gender from './SignupStage4';

export default function Onboarding() {
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState('');
  const [country, setCountry] = useState<CountriesType>(CountryDetails[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [signupStage, setSignupStage] = useState(1);

  const {countries} = useCountries();

  const [nextSlide, setNext] = useState(1);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const intro = useRef<AppIntroSlider>(null);
  const checkOTP = useRef<OTPInputView>(null);

  const handleConfirmOTP = () => {
    if (code === '') {
      setSignupStage(3);
    } else {
      Alert.alert('', 'Wrong code');
    }
  };

  const handlePhoneLength = () => {
    if (phoneNumber.length === 10) {
      setSignupStage(2);
    } else {
      Alert.alert('Error', 'Phone number incorrect');
    }
  };

  const FetchedCountries = ({item}: {item: CountryProps}) => {
    return <CountriesCard onPress={() => selectCountry(item)} {...item} />;
  };

  const _renderItem = ({item: {image}}: {item: ItemProps}) => {
    return (
      <View>
        <Image source={image} style={styles.slide} />
        <Text style={styles.neverMiss}>Never miss a sale</Text>
        <Text style={styles.description}>
          Any upcoming sale at your nearby mall and by your favourite brands.
          You will be the first to get the information
        </Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <Button
        title="Get started"
        onPressButton={() => {
          bottomSheetRef.current?.snapToIndex(0);
        }}
      />
    );
  };

  const _renderNextButton = () => {
    return (
      <Button
        title="Next"
        isNext
        onPressButton={() => intro.current?.goToSlide(nextSlide, true)}
      />
    );
  };

  const selectCountry = (item: CountriesType) => {
    setCountry(item);
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.logo}>Lfyd</Text>
        <AppIntroSlider
          style={{zIndex: -100}}
          ref={intro}
          onSlideChange={curent => {
            setNext(curent + 1);
          }}
          keyExtractor={item => item.key.toString()}
          data={SLIDES}
          renderItem={_renderItem}
          dotStyle={{backgroundColor: Colors.black}}
          activeDotStyle={styles.activeDotStyle}
          renderDoneButton={_renderDoneButton}
          bottomButton={true}
          renderNextButton={_renderNextButton}
        />
        <BottomSheet
          style={styles.bottomSheetStyles}
          index={-1}
          onClose={() => {
            setCountry(CountryDetails[0]);
            setPhoneNumber('');
          }}
          enablePanDownToClose
          ref={bottomSheetRef}
          snapPoints={signupStage === 1 ? ['70%'] : ['80%']}>
          {signupStage === 1 && (
            <Signin
              onChangeText={setPhoneNumber}
              onSendOtp={handlePhoneLength}
              country={country}
              phoneNumber={phoneNumber}
              onCountryPress={() => setModalVisible(true)}
            />
          )}
          {signupStage === 2 && (
            <Send
              onWrongNumber={() => setSignupStage(1)}
              phoneNumber={phoneNumber}
              otpCode={code}
              onOtpChanged={() => setCode(code)}
              onVerify={handleConfirmOTP}
              onResend={() => setSignupStage(2)}
            />
          )}
          {signupStage === 3 && (
            <Signup
              onBack={() => setSignupStage(2)}
              onNext={() => setSignupStage(4)}
            />
          )}
          {signupStage === 4 && (
            <Gender onPressCreate={() => setSignupStage(1)} />
          )}
          <Agreement />
        </BottomSheet>
        <Modal isVisible={modalVisible} hasBackdrop backdropOpacity={0.7}>
          <View>
            <FlatList
              contentContainerStyle={{alignItems: 'center'}}
              style={styles.modalView}
              data={countries}
              renderItem={FetchedCountries}
            />
          </View>
        </Modal>
      </View>
    </>
  );
}

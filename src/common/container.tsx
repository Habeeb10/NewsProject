import {
  SafeAreaView,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';

export type ContainerProps = {
  children: string;
  style?: StyleProp<ViewStyle>;
  backgroundColor: string;
  barColor: string;
  vertical: boolean;
};
export const Header = ({barColor, children, style}: ContainerProps) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: barColor}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}>
          <View style={[styles.container, style]}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import React, { useState } from "react";
// import CommonStyles from "../../../common/styles/CommonStyles";
// import SpacerWrapper from "../../../common/util/SpacerWrapper";
// import BackButton from "../../../components/buttons/BackButton";
// import ButtonLg from "../../../components/buttons/ButtonLg";
// import BoxTextInput from "../../../components/input/BoxTextInput";
// import { Text, View } from "../../../components/Themed";
// import { SignUpStackProps } from "./SignUpNavigator";
// import RNPickerSelect from "react-native-picker-select";
// import { GENDER } from "../Password/SignInCard";
// import { Primary } from "../../../common/colors";
// // import { wp } from "../../../common/utils";
// // import { hp } from "../../../common/util/utils";
// import { Picker } from "@react-native-picker/picker";
// import Colors from "../../../constants/Colors";

// // const [gender, setGender] = useState(GENDER);
// // const placeholder = {
// //   label: "Select gender..",
// //   value: null,
// //   color: Primary,
// // };

// const SignUpEmailScreen = ({
//   navigation,
// }: NativeStackScreenProps<SignUpStackProps>) => {
//   return (
//     <SpacerWrapper>
//       <BackButton onPress={() => navigation.goBack()} />
//       <View>
//         <Text style={[CommonStyles.headerText]}>Profile Setup</Text>
//         <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
//       </View>
//       <BoxTextInput
//         placeHolder='Full Name'
//         required
//         value='John Appleased'
//         onChange={() => {}}
//       />
//       <BoxTextInput
//         placeHolder='Email'
//         required
//         value='johnappleased@apple.com'
//         onChange={() => {}}
//       />
//       {/* <RNPickerSelect
//         placeholder={placeholder}
//         onValueChange={(value) => {
//           setGender(value);
//           console.log(value);
//         }}
//         value={gender}
//         items={GENDER}
//         style={{
//           viewContainer: {
//             paddingHorizontal: wp(10),
//             width: "90%",
//             height: hp(55),
//             borderWidth: 0.7,
//             borderColor: Primary,
//             borderRadius: 10,
//             marginTop: hp(7),
//             marginLeft: hp(20),
//             paddingVertical: hp(20),
//           },
//           placeholder: {
//             fontSize: 20,
//             paddingVertical: hp(10),
//           },
//         }}
//       /> */}
//       <BoxTextInput
//         placeHolder='Full Name'
//         required
//         value='John Appleased'
//         onChange={() => {}}
//       />
//       <BoxTextInput
//         placeHolder='Email'
//         required
//         value='johnappleased@apple.com'
//         onChange={() => {}}
//       />
//       <Picker collapsable>
//         <Picker.Item label='male' value={"Male"} />
//         <Picker.Item label='female' value={"Female"} />
//       </Picker>
//       <ButtonLg
//         color={Colors.general.black}
//         alt={false}
//         onPress={() => {
//           navigation.navigate("SignUpPassword");
//         }}
//         title='Continue'
//       />
//     </SpacerWrapper>
//   );
// };

// export default SignUpEmailScreen;

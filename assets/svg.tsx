import React from 'react';
import {Path, Rect} from 'react-native-svg';
import Svg, {Line} from 'react-native-svg';

export const Add = () => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="#EC7B15">
      <Path
        d="M6.75 5.25V0H5.25V5.25H0V6.75H5.25V12H6.75V6.75H12V5.25H6.75Z"
        fill="#EC7B15"
      />
    </Svg>
  );
};

export const Sub = () => {
  return (
    <Svg width="16" height="3" viewBox="0 0 16 3" fill="none">
      <Line
        y1="1.33331"
        x2="16"
        y2="1.33331"
        stroke="#333333"
        stroke-width="2"
      />
    </Svg>
  );
};

export const GoogleIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.8859 12.2613C22.8859 11.4459 22.8128 10.6618 22.6769 9.90906H11.8459V14.3575H18.035C17.7684 15.795 16.9582 17.0129 15.7403 17.8284V20.7138H19.4569C21.6314 18.7118 22.8859 15.7636 22.8859 12.2613Z"
        fill="#4285F4"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8459 23.4998C14.9509 23.4998 17.5541 22.47 19.4568 20.7137L15.7402 17.8282C14.7105 18.5182 13.3932 18.9259 11.8459 18.9259C8.85068 18.9259 6.31546 16.903 5.41114 14.1848H1.56909V17.1644C3.46136 20.9228 7.35046 23.4998 11.8459 23.4998Z"
        fill="#34A853"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.41117 14.1851C5.18117 13.4951 5.05049 12.7581 5.05049 12.0001C5.05049 11.2422 5.18117 10.5051 5.41117 9.81512V6.83557H1.56913C0.790265 8.38807 0.345947 10.1444 0.345947 12.0001C0.345947 13.8558 0.790265 15.6122 1.56913 17.1647L5.41117 14.1851Z"
        fill="#FBBC05"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8459 5.07386C13.5343 5.07386 15.0502 5.65409 16.242 6.79364L19.5405 3.49523C17.5489 1.63955 14.9457 0.5 11.8459 0.5C7.35046 0.5 3.46136 3.07705 1.56909 6.83545L5.41114 9.815C6.31546 7.09682 8.85068 5.07386 11.8459 5.07386Z"
        fill="#EA4335"
      />
    </Svg>
  );
};

export const MailIcon = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 23 18" fill="none">
      <Path
        d="M1 1.5L11.5 9L22 1.5M1 16.5H22V1.5H1V16.5Z"
        stroke="#707070"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const FacebookIcon = () => {
  return (
    <Svg width="25" height="20" viewBox="0 0 25 20" fill="none">
      <Path
        d="M15.438 3.32083H17.3226V0.140833C16.9974 0.0975 15.8793 0 14.577 0C11.8598 0 9.99846 1.65583 9.99846 4.69917V7.5H7V11.055H9.99846V20H13.6747V11.0558H16.5519L17.0086 7.50083H13.6739V5.05167C13.6747 4.02417 13.9603 3.32083 15.438 3.32083Z"
        fill="#007AFF"
      />
    </Svg>
  );
};

export const UploadPicture = () => {
  return (
    <Svg width="29" height="30" viewBox="0 0 29 30" fill="none">
      <Rect y="0.5" width="29" height="29" rx="6" fill="#3396FD" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 7C20.933 7 22.5 8.567 22.5 10.5V19.5C22.5 21.433 20.933 23 19 23H10C8.067 23 6.5 21.433 6.5 19.5V10.5C6.5 8.567 8.067 7 10 7H19ZM19 8H10C8.61929 8 7.5 9.11929 7.5 10.5V19.5C7.5 19.5847 7.50422 19.6685 7.51245 19.751L11.3417 15.9231C11.7322 15.5326 12.3653 15.5326 12.7559 15.9231L13.9784 17.1456L17.476 13.648C17.8665 13.2575 18.4997 13.2575 18.8902 13.648L21.5 16.258V10.5C21.5 9.11929 20.3807 8 19 8ZM14.5 12C14.5 10.8954 13.6046 10 12.5 10C11.3954 10 10.5 10.8954 10.5 12C10.5 13.1046 11.3954 14 12.5 14C13.6046 14 14.5 13.1046 14.5 12Z"
        fill="white"
      />
    </Svg>
  );
};

export const DropDown = () => {
  return (
    <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
      <Path
        d="M8.31348 11.3435L14.3135 17.3435L20.3135 11.3435"
        stroke="#151522"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

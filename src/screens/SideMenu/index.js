import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const DItem = ({textStyle = {}, btnStyle = {}, ...props}) => {
  //  props.textStyle = props.textStyle || {};
  // props.btnStyle = props.btnStyle || {};
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btn, btnStyle]}
      {...props}>
      {props.button && (
        <Text allowFontScaling={false} style={[styles.btnText, textStyle]}>
          {props.children}
        </Text>
      )}
      {!props.button && props.children}
    </TouchableOpacity>
  );
};

const DrawerBox = ({navigation}) => {
  const [language, setLanguage] = useState(null);

  const capFirstLetterInSentence = sentence => {
    var string = sentence;
    var letters = {i: 'İ', ş: 'Ş', ğ: 'Ğ', ü: 'Ü', ö: 'Ö', ç: 'Ç', ı: 'I'};
    string = string.replace(/(([iışğüçö]))/g, function (letter) {
      return letters[letter];
    });
    return string.toUpperCase();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.content}>
        <DItem
          button={true}
          onPress={() => {
            //goHome(I18n.t('home.tabbar_1'));
          }}>
          {capFirstLetterInSentence('Home')}
        </DItem>
        <DItem
          button={true}
          onPress={() => {
            // goHome(I18n.t('home.tabbar_2'));
          }}>
          {capFirstLetterInSentence('Account')}
        </DItem>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
  },
  btn: {
    padding: 9,
    borderBottomColor: '#d8d8d8',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 40,
  },
  btnTextUI: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
  social: {
    flexDirection: 'row',
  },
  bottom: {
    flexDirection: 'row',
  },
  langBox: {
    padding: 20,
  },
  lang: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default DrawerBox;

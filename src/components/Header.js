import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {EY_BLACK, EY_WHITE} from '../constants/Color';

const Header = ({leftSvg, rightSvg, title, rightOnPress, leftOnPress}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => leftOnPress()}>
        {leftSvg}
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity onPress={() => rightOnPress()}>
        {rightSvg}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 85,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: EY_WHITE,
  },

  title: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Nunito-Regular',
    color: EY_BLACK,
  },
});

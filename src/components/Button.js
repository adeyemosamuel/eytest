import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, labelColor, bgColor, bdColor, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{...styles.btn, backgroundColor: bgColor, borderColor: bdColor}}>
      <Text style={{...styles.label, color: labelColor}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderRadius: 2,
  },

  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
  },
});

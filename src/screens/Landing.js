import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {EY_BLACK, EY_WHITE, EY_YELLOW} from '../constants/Color';
import Toast from '../util/toast';

const {width} = Dimensions.get('screen');

const Landing = () => {
  let navigation = useNavigation();

  const secondButton = () => {
    Toast('Coming soon 🙂');
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.landingContainer}>
            <View style={styles.logo}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../assets/img/ey.png')}
              />
            </View>

            <View style={{marginTop: 150}}>
              <Text style={styles.landingText}>EY Remote Opportunity</Text>
            </View>

            <View style={{marginTop: 8}}>
              <Text style={styles.landingNote}>By Samuel O. Adeyemo</Text>
            </View>

            <View style={styles.buttonView}>
              <Button
                label={'QUESTION ONE'}
                bgColor={EY_BLACK}
                labelColor={EY_WHITE}
                onPress={() => navigation.navigate('Weather')}
              />
            </View>

            <View style={styles.button}>
              <Button
                label={'QUESTION TWO'}
                bgColor={EY_WHITE}
                labelColor={EY_BLACK}
                bdColor={EY_YELLOW}
                onPress={() => secondButton()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  landingContainer: {
    backgroundColor: EY_WHITE,
    height: '100%',
    width: width,
    paddingHorizontal: 20,
  },

  landingNote: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'rgba(51, 51, 51, 0.51)',
  },

  logo: {
    marginTop: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  landingText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '500',
    color: EY_BLACK,
  },

  buttonView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 37,
  },

  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 25,
  },
});

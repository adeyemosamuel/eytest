import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../components/Header';
import ArrowBack from '../assets/svg/bi_arrow-left.svg';
import Chevron from '../assets/svg/chevron-right.svg';
import {useNavigation} from '@react-navigation/native';
import weatherData from '../mock/Data';
import {EY_DARK} from '../constants/Color';

const Weather = () => {
  let navigation = useNavigation();
  const [weather] = useState(weatherData);
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Cities'}
        leftSvg={<ArrowBack />}
        leftOnPress={() => navigation.goBack()}
      />

      <View style={styles.container}>
        <FlatList
          data={weather}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          style={{flex: 1, width: '100%', marginTop: 20, marginBottom: 20}}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={{
                ...styles.weatherCard,
                backgroundColor: '#fefcf4',
              }}
              onPress={() =>
                navigation.navigate('WeatherDetails', {
                  item: {
                    city: item.city,
                    image: item.image,
                  },
                })
              }>
              <View style={styles.imgView}>
                <Image style={styles.img} source={{uri: item.image}} />
              </View>

              <View style={styles.detailsView}>
                <View>
                  <Text style={styles.light}>CITY</Text>
                  <Text style={styles.bold}>{item.city}</Text>
                </View>

                <View>
                  <Text style={styles.light}>COUNTRY</Text>
                  <Text style={styles.bold}>{item.country}</Text>
                </View>
              </View>

              <View style={styles.continentView}>
                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Chevron />
                </View>

                <View>
                  <Text style={styles.light}>Continent</Text>
                  <Text style={styles.statusBold}>{item.continent}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },

  weatherCard: {
    width: '100%',
    height: 98,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: EY_DARK,
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
  },

  light: {
    fontSize: 9,
    color: '#828282',
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'Nunito-Regular',
  },

  bold: {
    fontSize: 12,
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'Nunito-Regular',
  },

  statusBold: {
    fontSize: 12,
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'Nunito-Regular',
    textTransform: 'capitalize',
  },

  //
  imgView: {flex: 2, alignItems: 'center', justifyContent: 'center'},

  detailsView: {flex: 6, justifyContent: 'space-between', marginLeft: 15},

  continentView: {flex: 2, justifyContent: 'space-between'},

  img: {height: 70, width: 70, borderRadius: 6},
});

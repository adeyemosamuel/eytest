import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowBack from '../assets/svg/bi_arrow-left.svg';
import {API_KEY} from 'react-native-dotenv';
import {getWeatherReport} from '../shared/Backend';
import Moment from 'moment';

const {width} = Dimensions.get('screen');

const WeatherDetails = ({route}) => {
  const {item} = route.params;
  let navigation = useNavigation();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeatherDetails();
  }, [item.city]);

  const kToC = kelvin => {
    var kTemp = kelvin;
    var kToCel = kTemp - 273.15;
    return kToCel;
  };

  const addCommas = n => {
    var num = n;
    var commas = num.toLocaleString('en-US');
    return commas;
  };

  const getWeatherDetails = () => {
    getWeatherReport(`/weather?q=${item.city}&appid=${API_KEY}`)
      .then(res => {
        setDetails({
          name: res.data.name,
          country: res.data.sys.country,
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
          lat: res.data.coord.lat,
          lon: res.data.coord.lon,
          description: res.data.weather[0].description,
          humidity: res.data.main.humidity,
          pressure: res.data.main.pressure,
          temp: res.data.main.temp,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
          sea_level: res.data.main.sea_level,
          speed: res.data.wind.speed,
        });
      })
      .catch(e => {
        throw e;
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" animating color="#1a1a24" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.imageView}>
        <ImageBackground
          source={{uri: item.image}}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.imageBackground}>
            <TouchableOpacity
              style={styles.arrow}
              onPress={() => navigation.goBack()}>
              <ArrowBack height={20} width={20} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.location}>
            <Image
              style={styles.img}
              source={require('../assets/img/pin.png')}
            />
            <Text style={styles.cityName}>{details.name}</Text>
          </View>
          <View style={{marginTop: 6}}>
            <Text style={styles.country}>Country: {details.country}</Text>
          </View>
        </View>

        <ScrollView
          style={styles.createContainer}
          contentContainerStyle={{flexGrow: 1}}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.first}>
            <Text style={styles.top}>Temperature</Text>
            <Text style={styles.bottom}>{kToC(details.temp)}°C</Text>
          </View>

          <View style={styles.grey}>
            <Text style={styles.top}>Humidity</Text>
            <Text style={styles.bottom}>{details.humidity}%</Text>
          </View>

          <View style={styles.white}>
            <Text style={styles.top}>Pressure</Text>
            {/* <Text style={styles.bottom}>{details.pressure} mBar</Text> */}
            <Text style={styles.bottom}>
              {addCommas(details.pressure)} mBar
            </Text>
          </View>

          <View style={styles.grey}>
            <Text style={styles.top}>Wind Speed</Text>
            <Text style={styles.bottom}>{details.speed} mph</Text>
          </View>

          <View style={styles.white}>
            <Text style={styles.top}>Sunrise</Text>
            <Text style={styles.bottom}>
              {Moment(details.sunrise).format('hh:mm A')}
            </Text>
          </View>

          <View style={styles.grey}>
            <Text style={styles.top}>Sunset</Text>
            <Text style={styles.bottom}>
              {Moment(details.sunset).format('hh:mm A')}
            </Text>
          </View>

          <View style={styles.white}>
            <Text style={styles.top}>Description</Text>
            <Text style={{...styles.bottom, textTransform: 'capitalize'}}>
              {details.description}
            </Text>
          </View>

          <View style={styles.grey}>
            <Text style={styles.top}>Longitude</Text>
            <Text style={styles.bottom}>{details.lon}°</Text>
          </View>

          <View style={styles.last}>
            <Text style={styles.top}>Latitude</Text>
            <Text style={styles.bottom}>{details.lat}°</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
  },

  imageBackground: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  arrow: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: width,
    height: 300,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  img: {height: 30, width: 30, marginRight: 10},

  imageView: {
    width: width,
    height: 180,
  },

  viewContainer: {
    height: '100%',
    width: width,
    paddingHorizontal: 20,
  },

  head: {width: '100%', paddingHorizontal: 20},

  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Nunito-Regular',
    color: '#000000',
  },

  country: {
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Nunito-Regular',
    color: '#575F6E',
    marginLeft: 10,
  },

  location: {flexDirection: 'row', alignItems: 'center', marginTop: 30},

  first: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 10,
    height: 55,
    justifyContent: 'center',
  },

  last: {
    width: '100%',
    paddingHorizontal: 10,
    height: 55,
    justifyContent: 'center',
    marginBottom: 20,
  },

  grey: {
    width: '100%',
    paddingHorizontal: 10,
    height: 55,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },

  white: {
    width: '100%',
    paddingHorizontal: 10,
    height: 55,
    justifyContent: 'center',
  },

  top: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Nunito-Regular',
    color: '#191D21',
  },

  bottom: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Nunito-Regular',
    color: '#191D21',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
